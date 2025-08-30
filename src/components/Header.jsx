import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ user, setUser }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
    localStorage.removeItem("currentUser");
    navigate("/"); // logout ke baad home
  };

  const handleShopNow = () => {
    // Products section pe scroll karo agar same page hai
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Agar products page alag hai to navigate karo
      navigate("/products");
    }
  };

  return (
    <header>
      <div className="container header-content">
        <div 
          className="logo" 
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <i>🐔</i>
          ChickenFeed Express
        </div>

        <div className="auth-buttons">
          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="btn btn-primary"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="btn btn-secondary"
              >
                Sign Up
              </button>
            </>
          ) : (
            <div className="user-menu">
              {/* Cart Icon (only for regular users, not admin) */}
              {user?.role !== "admin" && (
                <div 
                  className="cart-icon"
                  onClick={() => navigate("/cart")}
                  style={{ cursor: "pointer" }}
                >
                  🛒
                  <span className="cart-badge">
                    {user?.cart?.length || 0}
                  </span>
                </div>
              )}

              {/* Profile clickable */}
              <div
                className="user-info"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{ cursor: "pointer" }}
              >
                👤 {user.name}
              </div>

              {/* Dropdown */}
              <div className={`dropdown ${dropdownOpen ? "show" : ""}`}>
                <button
                  className="dropdown-item profile-btn"
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/profile");
                  }}
                >
                  📄 My Profile
                </button>

                {user?.role === "admin" && (
                  <button
                    className="dropdown-item admin-btn"
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate("/admin");
                    }}
                  >
                    ⚙️ Admin Dashboard
                  </button>
                )}

                <button
                  className="dropdown-item logout-btn"
                  onClick={handleLogout}
                >
                  🚪 Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}