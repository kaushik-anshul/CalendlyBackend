import {z} from "zod";

export const createUserSchema = z.object({
    email : z.email('Invalid user email'),
    name : z.string().min(1, ' name should be greater than 1 character').max(100, 'name should be less than 100 characters')
});

export type createUserDto = z.infer<typeof createUserSchema>;
