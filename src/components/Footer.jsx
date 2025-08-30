
export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-section">
          <h3>ChickenFeed Express</h3>
          <p>Premium quality chicken feed delivered fresh to your doorstep.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <a href="#">FAQ</a>
          <a href="#">Shipping Info</a>
          <a href="#">Returns</a>
          <a href="#">Support</a>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@chickenfeed.com</p>
          <p>📍 Farm Street, Agricultural City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 ChickenFeed Express. All rights reserved.</p>
      </div>
    </footer>
  );
}
