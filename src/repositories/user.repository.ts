import { prisma } from "../config/database.js";
import { createUserDto, updateUserDto } from "../dtos/user.dto.js";

export async function getAll() {
    const users = await prisma.user.findMany();
    return users;
}

export async function getById(id : number) {
    const user = await prisma.user.findUnique({
        where : {id}
    });
    return user;
}

export async function getByEmail(email : string) {
    const user = await prisma.user.findUnique({
        where : {email}
    });
    return user;
}

export async function create(data : createUserDto) {
    const user = await prisma.user.create({
        data
    });
    return user;
}

export async function update(id : number, data : updateUserDto) {
    const user = await prisma.user.update({
        where : {id},
        data,
    });

    return user;
}

export async function remove(id : number) {
    const user = await prisma.user.delete({
        where : {id}
    });
    return user;
}