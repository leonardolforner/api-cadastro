import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();


(()=> {
prisma.user.create({
    data:{
        nome: "João Rafael",
        sobrenome: "Borges de Oliveira",
        curso:"Engenharia de Software",
        email: "j.rafael@edu.pucrs.br",
        username:"22104394",
        password:"senhaSecreta",
        ano_entrada:"2023"
    }
}).catch(error => console.log(error))
})()
