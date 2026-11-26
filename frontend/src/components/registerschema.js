import z from "zod";
export const registerschema = z.object({
    name: z.string().min(3, "Name must contain 3 letter"),
    email: z.string().email("enter the vaild email"),
    password: z.string().min(8, "password should contain atleast 8 letters"),
    age: z.coerce.number().min(18, "Age should be minimum of 18")
})