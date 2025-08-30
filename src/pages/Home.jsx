import { useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function HomePage({ user, setUser }) {
  const navigate = useNavigate();

  const handleShopNow = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            {/* Animated Chicken */}
            <div className="chicken-animation">
            </div>
            
            {/* Features */}
            

            <button
              className="btn btn-primary hero-btn"
              onClick={handleShopNow}
            >
              🛒 Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="products-section container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate("/products")}
          >
            View All Products
          </button>
        </div>

        <div className="product-grid">
          {products.slice(0, 6).map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              user={user} 
              setUser={setUser} 
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title text-center mb-4">Why Choose ChickenFeed Express?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-large">🏆</div>
              <h3>Premium Quality</h3>
              <p>Highest grade ingredients sourced from trusted suppliers worldwide</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">🌱</div>
              <h3>100% Natural</h3>
              <p>No artificial additives, just pure natural nutrition for healthy chickens</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">⚡</div>
              <h3>Quick Results</h3>
              <p>See improved health and egg production in just 2-3 weeks</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">💯</div>
              <h3>Satisfaction Guaranteed</h3>
              <p>30-day money back guarantee if you're not completely satisfied</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}