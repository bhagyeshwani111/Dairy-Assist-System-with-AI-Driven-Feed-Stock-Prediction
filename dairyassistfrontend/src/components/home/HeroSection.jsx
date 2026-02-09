import { Link } from 'react-router-dom';
import './HeroSection.css';
import heroImage from '../../assets/images/Hero page.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Fresh Dairy Products Delivered to Your Doorstep
          </h1>
          <p className="hero-subtitle">
            Smart dairy shopping with secure payments and reliable delivery
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn-primary-large">Browse Products</Link>
            <Link to="/login" className="btn-secondary-large">Login / Register</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Dairy Products" className="hero-main-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;