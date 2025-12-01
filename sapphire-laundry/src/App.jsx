import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Prices from "./components/Prices";
import CommercialLaundry from "./components/CommercialLaundry";
import WhyChooseUs from "./components/WhyChooseUs";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import FAQ from "./components/FAQ";
import DeliveryServices from "./components/DeliveryService";
import Cart from "./pages/Cart";
import SchedulePickup from "./pages/SchedulePickup";
import MobileStickyButtons from "./components/MobileStickyButtons";
import { CartProvider } from "./context/CartContext";
import CommercialServices from "./components/CommercialServices";
import ServicesPage from "./pages/ServicesPage";
import Services from "./components/Services";
import OrderForm from "./components/OrderForm";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />

        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/commercial" element={<CommercialLaundry />} />
          <Route path="/whyus" element={<WhyChooseUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/delivery-services" element={<DeliveryServices />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          

          {/* Services & Orders */}
          <Route path="/servicespage" element={<ServicesPage />} />
          <Route path="/commercial-services" element={<CommercialServices />} />
          <Route path="/orderform" element={<OrderForm />} />

          {/* Protected Pages (requires login/auth) */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/schedule-pickup"
            element={
              <ProtectedRoute>
                <SchedulePickup />
              </ProtectedRoute>
            }
          />
        </Routes>

        {/* Floating buttons */}
        <MobileStickyButtons />

        {/* Footer */}
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
