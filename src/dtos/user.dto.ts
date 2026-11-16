import {z} from "zod";

export const createUserSchema = z.object({
    email : z.email('Invalid user email'),
    name : z.string().min(1, ' name should be greater than 1 character').max(100, 'name should be less than 100 characters')
});

export const updateUserSchema = z.object({
    email : z.email('Invalid user email').optional(),
    name : z.string().min(1, ' name should be greater than 1 character').max(100, 'name should be less than 100 characters').optional()
}).refine((data) => data.email !== undefined || data.name !== undefined, {
    message : 'Atleast one filed must be provided',
});

export type createUserDto = z.infer<typeof createUserSchema>;
export type updateUserDto = z.infer<typeof updateUserSchema>;