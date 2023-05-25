import { Request, Response, NextFunction } from 'express';
import {PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

const getAllUsers =  async (req: Request, res: Response) => {
    let users = await prisma.user.findMany();
    return res.json({
        message: users
    })
    
}
