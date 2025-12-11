import { body , validationResult } from "express-validator";
export const registerVallidator = [
    body('name').notEmpty().withMessage("Name is required").trim().escape(),
    body('email').isEmail().withMessage("Email is required").trim().escape(),
    body('password').isStrongPassword().withMessage("Password shoud be strong."),
    body('gender').notEmpty().withMessage("Gender is requred"),
    body('country').notEmpty().withMessage("Country is required")
]
export default validationResult;