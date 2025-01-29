import config from "./config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createHash = password => bcrypt.hashSync(password,bcrypt.genSaltSync(10));
export const validateHash = (passwordToVerify,storedHash) =>bcrypt.compareSync(passwordToVerify,storedHash);
export const createToken = (payload,duration) => jwt.sign(payload,config.SECRET,{expressIn:duration});

export const validateToken = (req,res,next) =>{
    const headerToken = req.headers.authorization ? req.headers.authorization.split(' ')[1] : undefined;
    const cookieToken = req.signedCookies && req.signedCookies[`${config.appName}_cookie`] ? req.cookies[`${config.appName}_cookie`] : undefined;
    const queryToken = req.query.access_token ? req.query.access_token : undefined;
    const receivedToken = headerToken || cookieToken || queryToken;

    if (!receivedToken) return res.status(401).send({ error: 'Token required', data: [] });
    jwt.verify(receivedToken, config.SECRET, (err, payload) => {
        if (err) return res.status(403).send({ error: 'Invalid token', data: [] });
        req.user = payload;
        next();
    });
};

export const passportCall = (strategy) => {
    return async (req, res, next) => {
        passport.authenticate(strategy, function (err, user, info) {
            if (err) return next(err);
            if (!user) return res.status(401).send({ error: 'Problemas de autenticación' , data: [] });
            req.user = user;
            next();
        })(req, res, next);
    }
}

export const handlePolicies = policies => (req, res, next) => {
    const role = req.user.role;
    if (!policies.includes(role)) return res.status(403).send({ error: 'No se cuenta con autorización', data: [] });
    next();
}