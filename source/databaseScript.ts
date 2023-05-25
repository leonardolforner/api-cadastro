import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();


(()=> {
prisma.user.create({
    data:{
        nome: "Leonardo",
        sobrenome: "Forner",
        curso:"Engenharia de Software",
        email: "L.forner@edu.pucrs.br",
        username:"21100996",
        password:"123",
        ano_entrada:"2021"
    }
}).catch(error => console.log(error))
})()
