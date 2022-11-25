import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import "./loginForm.css"

const FormValues = {
    name: '',
    email: '',
    password: '',
    repassword: '',
    formErrors: { name: '', email: '', password: '', repassword: '' },
    nameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false
}

function LoginForm() {

    // const [values, setValues] = useState(FormValues);

    // const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setValues({
    //         ...values, [event.target.name]: event.target.value
    //     });
    // };

    // const validate = (fieldName: string, value: string) => {
    //     let fieldValidationErrors = values.formErrors;
    //     let emailValid = values.emailValid;
    //     let passwordValid = values.passwordValid;

    //     switch (fieldName) {
    //         case 'email':
    //             emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
    //             fieldValidationErrors.email = emailValid ? '' : ' is invalid';
    //             break;
    //         case 'password':
    //             passwordValid = value.length >= 6;
    //             fieldValidationErrors.password = passwordValid ? '' : ' is too short';
    //             break;
    //         default:
    //             break;
    //     }
    // };

    // return (
    //     <div>
    //         <form>
    //             <label htmlFor="name">Name</label>
    //             {values.formErrors["name"].length > 0 ?
    //                 <p>{values.formErrors["name"]}</p> :
    //                 ''
    //             }
    //             <input name="name" type="text" placeholder="name" onChange={handleOnChange} />
    //             <label htmlFor="email">Email</label>
    //             {values.formErrors["email"].length > 0 ?
    //                 <p>{values.formErrors["email"]}</p> :
    //                 ''
    //             }
    //             <input type="text" name="email" placeholder="email" onChange={handleOnChange} />
    //             <label htmlFor="password">Password</label>
    //             {values.formErrors["password"].length > 0 ?
    //                 <p>{values.formErrors["password"]}</p> :
    //                 ''
    //             }
    //             <input type="password" name="password" placeholder="password" onChange={handleOnChange} />
    //             <label htmlFor="repassword">Re-Password</label>
    //             {values.formErrors["repassword"].length > 0 ?
    //                 <p>{values.formErrors["repassword"]}</p> :
    //                 ''
    //             }
    //             <input type="password" name="repassword" placeholder="re-password" onChange={handleOnChange} />
    //         </form>
    //     </div>

    // )
    const [department, setDepartment] = useState("");
    const [message, setMessage] = useState("");
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const [departmentError, setDepartmentError] = useState<string | null>(null);
    const [messageError, setMessageError] = useState('');
    const [agreedToTermsError, setAgreedToTermsError] = useState('');

    const [departmentTouched, setDepartmentTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);
    const [agreedToTermsTouched, setAgreedToTermsTouched] = useState(false);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const isValid = !departmentError && !messageError && !agreedToTermsError;
        if (!isValid) {
            return;
        }
        console.log("submitting", { department, message, agreedToTerms });
    }

    useEffect(() => {
        validate();
    }, [department, message, agreedToTerms]);

    function validate() {
        setDepartmentError('');
        setMessageError('');
        setAgreedToTermsError('');
        if (department === "") {
            setDepartmentError("Department is required.");
        }
        if (message === "") {
            setMessageError("Message is required.");
        }
        if (agreedToTerms === false) {
            setAgreedToTermsError("You must agree to the terms and conditions.");
        }
    }

    // function stateToString() {
    //     return JSON.stringify(
    //         {
    //             values: { department, message, agreedToTerms },
    //             errors: { departmentError, messageError, agreedToTermsError },
    //             touched: { departmentTouched, messageTouched, agreedToTermsTouched },
    //         },
    //         null,
    //         " "
    //     );
    // }

    return (
        <form onSubmit={handleSubmit}>
            <select
                name="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                onBlur={(e) => setDepartmentTouched(true)}
            >
                <option value="">Select...</option>
                <option value="hr">Human Resources</option>
                <option value="pr">Public Relations</option>
                <option value="support">Support</option>
            </select>
            <br />
            {departmentError && departmentTouched && (
                <p className="alert">{departmentError}</p>
            )}
            <br />
            <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={(e) => setMessageTouched(true)}

            />
            <br />
            {messageError && messageTouched && (
                <p className="alert">{messageError}</p>
            )}
            <input
                type="checkbox"
                name="agreedToTerms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                onBlur={(e) => setAgreedToTermsTouched(true)}
            />
            I agree to the terms and conditions.
            <br />
            {agreedToTermsError && agreedToTermsTouched && (
                <p className="alert">{agreedToTermsError}</p>
            )}
            <button>Send</button>
            {/* <pre>{stateToString()}</pre> */}
        </form>
    );
}


export default LoginForm