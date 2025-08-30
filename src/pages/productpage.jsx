import { useState } from "react";
import products from "../data/products";  // ✅ ensure named export
import ProductCard from "../components/ProductCard";

export default function ProductPage({ user, setUser }) {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 1500]);

  // ✅ Filter + Sort Logic
  const getFilteredProducts = () => {
    let filtered =
      filter === "all"
        ? [...products] // copy array
        : products.filter((p) => p.category === filter);

    // Price Range
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sorting
    switch (sortBy) {
      case "price-low":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "rating":
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case "name":
        return [...filtered].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      default:
        return filtered;
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="products-section">
      <div className="container">
        {/* Page Hero */}
        <div className="page-hero">
          <h1>🛒 Our Premium Products</h1>
          <p>Choose from our wide range of high-quality chicken feeds</p>
        </div>

        {/* Filters + Sort */}
        <div className="section-header">
          <h2 className="section-title">
            Available Products ({filteredProducts.length})
          </h2>

          <div className="filters">
            {/* Category Filter */}
            <select
              className="filter-select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="premium">Premium</option>
              <option value="organic">Organic</option>
              <option value="starter">Starter</option>
              <option value="grower">Grower</option>
              <option value="finisher">Finisher</option>
              <option value="supplement">Supplement</option>
              <option value="economy">Economy</option>
            </select>

            {/* Sort By */}
            <select
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
            </select>

            {/* Price Range */}
            <div className="price-filter">
              <label>
                Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max="1500"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                user={user}
                setUser={setUser}
              />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h3>🔍 No products found</h3>
            <p>Try adjusting your filters to see more products.</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setFilter("all");
                setPriceRange([0, 1500]);
                setSortBy("default");
              }}
              style={{ marginTop: "20px" }}
            >
              Show All Products
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>🌟 Need Help Choosing?</h2>
            <p>
              Our experts are here to help you select the perfect feed for your
              chickens!
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">📞 Call Expert</button>
              <button className="btn btn-secondary">💬 Live Chat</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
