import { z } from 'zod'

export const Userschema = z.object({
    firstname : z.string().min(3 , {message : "firstname must be at least 3 characters"}),
    lastname : z.string().min(3,{message : "lastname be at least 3 characters"}),
    email: z.string().email({message : "Invalid email address"}),
    phone: z.string().min(10, { message: "Phone must be at least 10 characters" })
    .regex(/^[0-9]+$/, { message: "Phone must only contain numbers" }),
    idcard : z.string().length(13, { message: "ID card must be exactly 13 characters" })
    .regex(/^[0-9]+$/, { message: "idcard must only contain numbers" }),
    password : z.string().min(6 , {message : "Password must be at least 5 characters"}),
    birthDate: z.string() .refine((val) => !isNaN(new Date(val).getTime()), {
       message: "Invalid date format",
     }),
    confrimpassword : z.string().min(6,{message : "Password must be at least 6 characters"}),
   }).refine(data => data.password === data.confrimpassword ,{
       path: ['confrimpassword'],
       message: 'Passwords does not match'})
   

export type UserSchema = z.infer<typeof Userschema>;