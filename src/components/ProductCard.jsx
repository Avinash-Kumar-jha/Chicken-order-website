import { useState } from "react";

export default function ProductCard({ product, user, setUser }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login to add items to cart 🔐");
      return;
    }

    // Get current user from localStorage
    let currentUser = JSON.parse(localStorage.getItem("currentUser")) || user;

    // Add product to cart
    const updatedCart = [...(currentUser.cart || []), product];
    const updatedUser = { ...currentUser, cart: updatedCart };

    // Update localStorage
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    
    // Update users array in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.map((u) =>
      u.email === currentUser.email ? updatedUser : u
    );
    localStorage.setItem("users", JSON.stringify(users));

    // Update UI state
    setUser(updatedUser);
    
    alert(`${product.name} added to cart successfully! 🛒`);
  };

  const handleWishlist = () => {
    if (!user) {
      alert("Please login to add to wishlist 💝");
      return;
    }
    setIsWishlisted(!isWishlisted);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push("⭐");
    }
    if (hasHalfStar) {
      stars.push("✨");
    }
    return stars.join("");
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.offer && <div className="offer-badge">{product.offer}</div>}
        <button 
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={handleWishlist}
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        {/* Rating */}
        <div className="rating">
          <div className="stars">{renderStars(product.rating)}</div>
          <span className="rating-count">({product.rating})</span>
        </div>
        
        {/* Price */}
        <div className="price-section">
          <span className="current-price">₹{product.price}</span>
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice}</span>
          )}
        </div>
        
        {/* Add to Cart Button - Hide for admin */}
        {user?.role !== "admin" && (
          <button className="order-btn" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
        )}
        
        {/* Admin buttons */}
        {user?.role === "admin" && (
          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <button
              className="order-btn"
              style={{ background: "#28a745", flex: 1 }}
              onClick={() => alert(`Edit ${product.name} - Coming Soon!`)}
            >
              ✏️ Edit
            </button>
            <button
              className="order-btn"
              style={{ background: "#dc3545", flex: 1 }}
              onClick={() => {
                if (window.confirm(`Delete ${product.name}?`)) {
                  alert("Delete functionality - Coming Soon!");
                }
              }}
            >
              🗑️ Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}