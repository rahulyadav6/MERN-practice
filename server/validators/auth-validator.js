const { z } = require("zod");


const loginSchema = z.object({
    email: z
    .string({required_error: "Email is required ", invalid_type_error: "email must be a string"})
    .trim()
    .email({message: "Invalid email  address "})
    .min(3, {message: "Email must be atleast of 3 characters"})
    .max(255, {message: "Email is too long"}),

    password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(1024, { message: "Password is too long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[\W_]/, { message: "Password must contain at least one special character" }),
})

const signUpSchema = loginSchema.extend({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3, {message:"Name must be atleast of 3 characters"})
    .max(255, {message: "Name is too long"}),

    

    phone: z
    .string({required_error: "Phone is required "})
    .trim()
    .min(10, {message: "Phone must be of atleast 10 digits"})
    .max(20, {message: "Phone is too long"}),
    
    
});

module.exports = {signUpSchema, loginSchema};



