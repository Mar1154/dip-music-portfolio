import './styles/pricing.css';

const pricingCards = [
    {
        title: "Lorem Ipsum",
        price:30,
        features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
        title: "Lorem Ipsum",
        price: 70,
        features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
        title: "Lorem Ipsum",
        price: 120,
        features: ["Feature 1", "Feature 2", "Feature 3"],
    },
];

const Pricing = () => {
    return (
        <div className="pricing" id="pricing-section">
            <div className="pricing__header">
                <h1>Lorem Ipsum<br/>dolor amet</h1>
            </div>
            <div className="pricing-cards">
                {pricingCards.map((card, index) => (
                    <div className="card" key={index}>
                        <div className="card__header">
                            <h3>{card.title}</h3>
                            <span>${card.price}</span>
                        </div>
                        <div className="card__body">
                            {card.features.map((feature, index) => (
                                <p key={index}>{feature}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing;