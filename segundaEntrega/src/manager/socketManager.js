import fs from 'fs';

const socketManager = (socket)=>{
    socket.on("products",async ()=>{
        const data =  await fs.promises.readFile("products.json","utf-8")
        const products = JSON.parse(data)
        socket.emit("products",products)
    });
};

export default socketManager;