import { FormEvent, useState } from "react"
import "./loginForm.css"

function LoginForm() {

    const [values, setValues] = useState({})

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values, [event.target.name]: event.target.value
        });
        console.log(values)
    };

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" placeholder="name" onChange={handleOnChange} />
            <label htmlFor="email">Password</label>
            <input type="text" name="email" placeholder="email" onChange={handleOnChange} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" onChange={handleOnChange} />
            <label htmlFor="repassword">Re-Password</label>
            <input type="password" name="repassword" placeholder="re-password" onChange={handleOnChange} />
        </form>
    )
}


export default LoginForm