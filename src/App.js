import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductPage from './pages/productpage'; // Fixed import name
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import products from './data/products';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [allProducts, setAllProducts] = useState(products);

  // Check if user is already logged in
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Header user={user} setUser={setUser} />
        
        <main>
          <Routes>
            <Route 
              path="/" 
              element={<HomePage user={user} setUser={setUser} />} 
            />
            <Route 
              path="/login" 
              element={<Login setUser={setUser} />} 
            />
            <Route 
              path="/signup" 
              element={<Signup setUser={setUser} />} 
            />
            <Route 
              path="/products" 
              element={<ProductPage user={user} setUser={setUser} />} 
            />
            <Route 
              path="/profile" 
              element={<Profile user={user} setUser={setUser} />} 
            />
            <Route 
              path="/admin" 
              element={<Admin products={allProducts} setProducts={setAllProducts} />} 
            />
            {/* Add more routes as needed */}
            <Route 
              path="/cart" 
              element={<div className="container" style={{padding: '50px', textAlign: 'center'}}>
                <h2>🛒 Shopping Cart</h2>
                <p style={{marginTop: '20px', color: '#666'}}>Cart functionality coming soon!</p>
              </div>} 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;