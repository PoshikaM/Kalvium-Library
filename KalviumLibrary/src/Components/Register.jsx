import { useState } from "react";

function Register(){

    // assigning needed items
    const [formData, setFormData] = useState({
        name : '',
        email : '',
        password : '',
        repeatPassword : ''
    })

    // to show if there is error
    const [error, setError] = useState({
        name : '',
        email : '',
        password : '',
        repeatPassword : ''
    })

    // to show success at the end
    const [success, setSuccess] = useState(false);

    // to handle the changes based on the name and value for every input field and show error or setData accordingly
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData , [name] : value});

        setError({ ...error, [name] : "" })
    }

    // to handle the submit event and check if everything is correct
    const handleSubmit = (e) => {
        e.preventDefault();

        const {name, email, password, repeatPassword} = formData;

        // check conditions for name
        if(name.length < 3 || name.length > 30){
            setError({ ...error , name : 'Name should be between 3 and 30 characters'})
            return;
        }

        // check conditions for email
        if(!email.includes('@')){
            setError({ ...error , email : "Invalid Email"})
            return;
        }

        // check conditions for password
        if(password.length != 10 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            setError({ ...error , password : 'Password must contain 10 characters with 1 special character'})
            return;
        }

        // check conditions for repeat password
        if(repeatPassword !== password){
            setError({ ...error , repeatPassword : 'Password does not match !'})
            return;
        }

        // if everything is okay setSuccess to true
        setSuccess(true);
        console.log("Scccessful", formData)

    }

    return(
        <form onSubmit={handleSubmit}>

        <div className="inputs">

            {/* name input field */}
            <div className="field">
            {success && <p className="success">Registration Successful !</p>}
            <input 
            type="text" 
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange} 
            required />
            <p style={{color: "red"}}>{error.name}</p>

            {/* email input field */}
            <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange} 
            required />
            <p style={{color : "red"}}>{error.email}</p>

            {/* password input field */}
            <input 
            type="password" 
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange} 
            required />
            <p style={{color : "red"}}>{error.password}</p>

            {/* repeat password input field */}
            <input 
            type="password" 
            name="repeatPassword" 
            placeholder="Repeat Password"
            value={formData.repeatPassword} 
            onChange={handleChange} 
            required />
            <p style={{color : "red"}}>{error.repeatPassword}</p>

            {/* Sign in button */}
            <div className="btn">
                <button type="submit">Sign In</button>
            </div>

            </div>
        </div>
        </form>
    )
}

export default Register;