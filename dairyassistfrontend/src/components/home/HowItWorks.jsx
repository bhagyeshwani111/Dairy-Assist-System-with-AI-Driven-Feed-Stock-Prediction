import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: '🔍',
      title: 'Browse Products',
      description: 'Explore our wide range of fresh dairy products'
    },
    {
      step: 2,
      icon: '📦',
      title: 'Select Variant & Quantity',
      description: 'Choose your preferred size and quantity'
    },
    {
      step: 3,
      icon: '🛒',
      title: 'Add to Cart',
      description: 'Add selected items to your shopping cart'
    },
    {
      step: 4,
      icon: '💳',
      title: 'Checkout & Pay Securely',
      description: 'Complete your order with secure payment'
    },
    {
      step: 5,
      icon: '🚚',
      title: 'Get Home Delivery',
      description: 'Receive fresh products at your doorstep'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2>How It Works</h2>
          <p>Simple steps to get fresh dairy products delivered to your home</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.step} className="step-card">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;