import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!user) {
      alert("Invalid email or password ❌");
      return;
    }

    // Set current user
    localStorage.setItem("currentUser", JSON.stringify(user));
    setUser(user);

    alert("Login successful ✅");
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-title">
          <h2>Login</h2>
          <p>Access your account 🐔</p>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>

        <button type="submit" className="auth-btn">Login</button>

        <div className="auth-link">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
}
