import { Router } from "express";
import mockManager from "../dao/users.manager.js";
import {fakerES_MX as faker} from "@faker-js/faker"

const mocksRouter = Router();
const manager = mockManager();

mocksRouter.get('/mockingusers', async (req, res) =>{
    let nombre=faker.person.firstName()
    let apellido=faker.person.lastName()
    let dni=faker.number.int({min:9_500_000, max: 50_000_000})
    let email=faker.internet.email({firstName:nombre, lastName:apellido})

    return {
        nombre, 
        apellido, 
        dni,
        email
    }
});

mocksRouter.post('/generateData', async (req, res) => {
    let {cantidad=1, db}=req.query

    let data=[]
    for(let i=0; i<cantidad; i++){
        data.push(generateData())
    }

    if(db){
        try {
            data=await modeloDatos.insertMany(data)
        } catch (error) {
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({error:`Error al generar data... :(`})
        }
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({data});
});