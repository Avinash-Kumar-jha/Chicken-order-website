import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ setUser }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if already exists
    if (users.find((u) => u.email === form.email)) {
      alert("User already exists! Please login.");
      navigate("/login");
      return;
    }

    // New user
    const newUser = { ...form, role: "user", cart: [] };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Set current user
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);

    alert("Signup successful 🎉");
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-title">
          <h2>Create Account</h2>
          <p>Join us and start shopping 🐔</p>
        </div>

        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>

        <button type="submit" className="auth-btn">Sign Up</button>

        <div className="auth-link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
}
