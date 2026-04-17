import { useState } from "react";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export default function MenuItemCard({ item, addToCart }) {

    const [quantity, setQuantity] = useState(1);
    const [feedback, setFeedback] = useState(false);

    // DECREMENT QUANTITY — MINIMUM 1
    function handleDecrement() {
        setQuantity(function(prev) { return Math.max(prev - 1, 1); });
    }

    // INCREMENT QUANTITY — MAXIMUM 5
    function handleIncrement() {
        setQuantity(function(prev) { return Math.min(prev + 1, 5); });
    }

    // ADD TO CART AND FLASH CONFIRMATION
    function handleAddToCart() {
        addToCart(item.id, item.name, item.price, quantity);
        setFeedback(true);
        setTimeout(function() { setFeedback(false); }, 1200);
    }

    return (
        <div className="menu-card">
            <div className="menu-card-body">
                <h5 className="menu-card-title">{item.name}</h5>
                <p className="menu-card-text">{item.description}</p>
            </div>

            <div className="menu-card-footer">
                <span className="menu-card-category">{item.category}</span>
                <span className="menu-card-price">{money.format(item.price)}</span>
            </div>

            <div className="menu-card-actions">
                {/* QUANTITY SPINNER */}
                <div className="qty-spinner">
                    <button
                        className="qty-btn"
                        onClick={handleDecrement}
                        aria-label="Decrease quantity"
                    >
                        −
                    </button>
                    <span className="qty-value">{quantity}</span>
                    <button
                        className="qty-btn"
                        onClick={handleIncrement}
                        aria-label="Increase quantity"
                    >
                        +
                    </button>
                </div>

                {/* ADD TO CART BUTTON */}
                <button
                    className="add-to-cart-btn"
                    onClick={handleAddToCart}
                    disabled={feedback}
                >
                    {feedback ? "✓ Added" : "Add to Cart"}
                </button>
            </div>
        </div>
    );
}
