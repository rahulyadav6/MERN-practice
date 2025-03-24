const { z } = require("zod");

const signUpSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3, {message:"Name must be atleast of 3 characters"})
    .max(255, {message: "Name is too long"}),

    email: z
    .string({required_error: "Email is required "})
    .trim()
    .email({message: "Invalid email  address "})
    .min(3, {message: "Email must be atleast of 3 characters"})
    .max(255, {message: "Email is too long"}),

    phone: z
    .string({required_error: "Phone is required "})
    .trim()
    .min(10, {message: "Phone must be of atleast 10 digits"})
    .max(20, {message: "Phone is too long"}),
    
    password: z
    .string({required_error: "Password is required "})
    .trim()
    .min(10, {message: "Password must be of atleast 6 characters"})
    .max(1024, {message: "Password is too long"}),  
});

module.exports = signUpSchema;