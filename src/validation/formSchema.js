// Here goes the schema for the form

import * as yup from "yup";


const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required("Username is required!")
    .min(3, "Username must be more than 3 characters."),
    email: yup
    .string()
    .email("must be a valid email address")
    .required("you've got to put an email"),
    role: yup
    .string()
    .oneOf(["instructor", "student", "alumni"], "Role is required"),
    civil: yup
    .string()
    .oneOf(["married", "single"], "civil status is required"),
    coding: yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean()
})

export default formSchema;