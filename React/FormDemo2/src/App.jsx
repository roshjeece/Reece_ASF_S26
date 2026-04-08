import React from 'react';
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// Destructuring yup for object, string, and number schemas
// object defines shape of JS object by specifying its keys and respective validation rules
// string: schema ensures value is type string, text-specific validation
// number: schema ensures value is type number, handles basic math constraints
const { object, string, number } = yup;

// Define the full schema for the user's input, defining what is required, showing error messages
const userSchema = object({
    fname: string().required("First name is required"),
    lname: string().required("Last name is required"),
    age: number().required("Age is required"),
    email: string().required("Email is required"),
    password: string().min(8, "Password must be at least 8 characters").required("Password is required")
})

const App = () => {

    // Destructuring the useForm hook from RHF.
    // Register tells RHF "track this field" and wires the input's event handles so RHF knows the field exists
    // and can collect its value on submit
    // Submission, Reset, and Errors are all functions/objects destructured from useForm
    // yupResolver enforces validation rules that live within userSchema when RHF triggers validation
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(userSchema),
        mode: "onBlur"
    });

    // Next Step: in a real app, this could be a meaningful API call:
    /*
    const onSubmit = async (data) => {
    await fetch('/api/users', { method: 'POST', body: JSON.stringify(data) });
    reset();
    }
    * */
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    // Don't need a whole handleChange. Just log the change. Register handles the rest.
    const logChange = (event) => {
        console.log(`${event.target.name}: ${event.target.value}`)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    First Name:
                    <input
                        type="text"
                        {...register("fname", { onChange: logChange})}
                    />
                </label>
                {/*errors.fname: RHF checks if there's an error in the fname field
                &&: short circuit evaluation. If left side is falsy, React renders nothing.
                If left side truthy (error exists), React renders right side.
                errors.fname.message: renders error message I defined in the userSchema*/}
                {errors.fname && <p>{errors.fname.message}</p>}
                <br/>
                <label>Last Name:
                    <input
                        type="text"
                        {...register("lname", { onChange: logChange})}
                    />
                </label>
                {errors.lname && <p>{errors.lname.message}</p>}
                <br/>
                <label>
                    Age:
                    <input
                        type="number"
                        {...register("age", { onChange: logChange})}
                    />
                </label>
                {errors.age && <p>{errors.age.message}</p>}
                <br/>
                <label>Email:
                    <input
                        type="email"
                        {...register("email", { onChange: logChange})}
                    />
                </label>
                {errors.email && <p>{errors.email.message}</p>}
                <br/>
                <label>
                    Password:
                    <input
                        type="password"
                        {...register("password", { onChange: logChange})}
                    />
                </label>
                {errors.password && <p>{errors.password.message}</p>}

                <button type={"submit"}>Submit</button>
                <button type="button" onClick={reset}>Reset</button>
            </form>
        </>
    );
};

export default App;