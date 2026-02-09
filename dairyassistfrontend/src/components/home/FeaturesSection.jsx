import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🥛',
      title: 'Fresh Quality Products',
      description: 'Premium dairy products sourced from trusted farms with guaranteed freshness'
    },
    {
      icon: '💳',
      title: 'Secure Online Payments',
      description: 'Safe and secure payment processing with Razorpay integration'
    },
    {
      icon: '🚚',
      title: 'Reliable Delivery Tracking',
      description: 'Real-time delivery tracking with timely doorstep delivery'
    },
    {
      icon: '🛒',
      title: 'Easy Ordering & Checkout',
      description: 'Simple and intuitive shopping experience with quick checkout'
    },
    {
      icon: '🤖',
      title: 'AI Chatbot Assistance',
      description: '24/7 AI-powered support for all your queries and assistance'
    },
    {
      icon: '📱',
      title: 'User-Friendly Interface',
      description: 'Modern, responsive design that works seamlessly on all devices'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2>Why Choose Dairy Assist?</h2>
          <p>Experience the best in dairy shopping with our premium features</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;