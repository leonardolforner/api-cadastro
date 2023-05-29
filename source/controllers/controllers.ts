import { Request, Response, NextFunction } from 'express';
import {PrismaClient } from "@prisma/client"
import exp from 'constants';
const prisma = new PrismaClient();

const getAllUsers =  async (req: Request, res: Response) => {
    let users = await prisma.user.findMany();
    return res.json({
        message: users
    })
    
}

const getUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    let user = await prisma.user.findFirst({
        where:{
            id: id
        }
    })
    return res.json({
        message: user
    })
}

const updatePassword = async (req:Request, res:Response) => {
    const id = req.params.id;
    const newPassword = req.body.password??null;
    console.log(newPassword)
    await prisma.user.update({
        where: {
            id:id
        },
        data:{
            password: newPassword
        }
    })
    return res.json({
        message: "senha trocada!"
    })
}

const createUser = async (req:Request, res:Response) => {
    const name = req.body.name
    const lastName = req.body.lastName;
    const course = req.body.course;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const year = req.body.year;
    await prisma.user.create({
        data:{
            nome: name,
            sobrenome: lastName,
            curso: course,
            email: email,
            username: username,
            password: password,
            ano_entrada: year
        }
    })
    return res.json({
        message: "usuário criado com sucesso!"
    })
}

const deleteUser = async (req:Request, res:Response) => {
    const id = req.params.id;
    await prisma.user.delete({
        where:{
            id: id
        }
    })
    return res.json({
        message: "usuário deletado :("
    })
}

export default {getAllUsers, getUser, updatePassword, createUser, deleteUser}