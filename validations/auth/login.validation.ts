import {z} from 'zod'

export const loginSchema = z.object({
    email:z.string().email("Invaild Email Address"),
    password:z.string().min(6,"Password must be at least 6 character")
});

export const forgetSchema = z.object({
    email:z.string().email("Invaild Email Address"),
})

export const newPasswordSchema = z.object({
    newPassword:z.string().min(6,"Password must be at least 6 character"),
    reEnterPassword:z.string().min(6,"Password must be at least 6 character")
})