export default function Admin({ products, setProducts }) {
  const editProduct = (id) => {
    alert(`Edit product ${id} functionality coming soon`);
  };

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="container" style={{ padding: "40px" }}>
      <h2>⚙️ Admin Dashboard</h2>
      <button className="btn btn-primary" style={{ margin: "20px 0" }}>
        ➕ Add Product
      </button>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <div className="product-image">
              <img src={p.image} alt={p.name} />
              <div className="offer-badge">{p.offer}</div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{p.name}</h3>
              <p className="product-description">{p.description}</p>
              <div className="rating">
                <div className="stars">{"★".repeat(Math.floor(p.rating))}</div>
                <span className="rating-count">({p.rating})</span>
              </div>
              <div className="price-section">
                <span className="current-price">₹{p.price}</span>
                <span className="original-price">₹{p.originalPrice}</span>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                <button
                  className="order-btn"
                  style={{ background: "#28a745" }}
                  onClick={() => editProduct(p.id)}
                >
                  ✏️ Edit
                </button>
                <button
                  className="order-btn"
                  style={{ background: "#dc3545" }}
                  onClick={() => deleteProduct(p.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
