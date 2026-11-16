import { createUserDto, updateUserDto } from "../dtos/user.dto.js";
import { create, getAll, getByEmail, getById, remove, update } from "../repositories/user.repository.js";
import { conflict, notFound } from "../utils/api-error.js";

export async function findAllUsers() {
    const users = await getAll();
    return users;
}

export async function findById(id : number) {
    const user = await getById(id);
    if(!user) {
        throw notFound("User not found");
    }
    return user;
}

export async function createUser(data : createUserDto) {
    const existingUser = await getByEmail(data.email);

    if(existingUser) {
        throw conflict('User already exists');
    }

    return create(data);
}

export async function updateUser(id : number, data : updateUserDto) {
    const user = await getById(id);
    if(!user) {
        throw notFound('User not found');
    }

    if(data.email && data.email !== user.email) {
        const existingUser = await getByEmail(data.email);
        if(existingUser) {
            throw conflict('User already exist');
        }
    }

    return update(id, data);
}

export async function deleteUser(id : number) {
    const user = await getById(id);
    if(!user) {
        throw notFound('User not found');
    }

    return remove(id);
}