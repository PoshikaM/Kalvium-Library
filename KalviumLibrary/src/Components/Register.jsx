import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, repeatPassword } = formData;

    if (name.length < 3 || name.length > 30) {
      setError({ ...error, name: "Name should be between 3 and 30 characters" });
      return;
    }

    if (!email.includes("@")) {
      setError({ ...error, email: "Invalid Email" });
      return;
    }

    if (password.length !== 10 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError({
        ...error,
        password: "Password must be 10 chars with 1 special character",
      });
      return;
    }

    if (repeatPassword !== password) {
      setError({ ...error, repeatPassword: "Passwords do not match!" });
      return;
    }

    setSuccess(true);
    console.log("Successful", formData);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        {success && <p className="success">Registration Successful 🎉</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <p className="error">{error.name}</p>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <p className="error">{error.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Password (10 chars, 1 special)"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <p className="error">{error.password}</p>

        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat Password"
          value={formData.repeatPassword}
          onChange={handleChange}
          required
        />
        <p className="error">{error.repeatPassword}</p>

        <button type="submit" className="submit-btn">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Register;