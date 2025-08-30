
import { useNavigate } from "react-router-dom";

export default function Profile({ user, setUser }) {
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="auth-page">
        <div className="auth-form text-center">
          <h2>⚠️ Please Login First</h2>
          <button
            className="auth-btn"
            onClick={() => navigate("/login")}
            style={{ marginTop: "20px" }}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="container auth-page">
      <div className="auth-form">
        <div className="auth-title">
          <h2>👤 My Profile</h2>
          <p>Welcome back, {user.name}!</p>
        </div>

        <div className="form-group">
          <label>Name</label>
          <input type="text" value={user.name} readOnly />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="text" value={user.email} readOnly />
        </div>

        <div className="form-group">
          <label>Role</label>
          <input type="text" value={user.role} readOnly />
        </div>

        {/* ✅ Show Admin Dashboard button only if role is admin */}
        {user.role === "admin" && (
          <button
            className="auth-btn"
            style={{ marginBottom: "15px", background: "linear-gradient(135deg, #ff7b00, #d9534f)" }}
            onClick={() => navigate("/admin")}
          >
            ⚙️ Go to Admin Dashboard
          </button>
        )}

        <button className="auth-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>

      
    </div>
  );
}
