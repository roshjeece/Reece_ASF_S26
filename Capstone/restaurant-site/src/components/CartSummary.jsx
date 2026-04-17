import { TAX_RATE } from "../data/menuData";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export default function CartSummary({ cart }) {

    // EMPTY CART STATE
    if (cart.length === 0) {
        return <p className="empty-cart-msg">Your cart is empty.</p>;
    }

    // CALCULATE SUBTOTAL
    const subtotal = cart.reduce(function(sum, entry) {
        return sum + entry.price * entry.quantity;
    }, 0);

    const taxAmount  = subtotal * TAX_RATE;
    const grandTotal = subtotal + taxAmount;

    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Line Total</th>
                </tr>
            </thead>
            <tbody>
                {/* LINE ITEM ROWS */}
                {cart.map(function(entry) {
                    return (
                        <tr key={entry.id}>
                            <td className="cart-item-name">{entry.name}</td>
                            <td>{money.format(entry.price)}</td>
                            <td>{entry.quantity}</td>
                            <td>{money.format(entry.price * entry.quantity)}</td>
                        </tr>
                    );
                })}

                {/* SUBTOTAL ROW */}
                <tr className="cart-summary-row">
                    <td colSpan={3} className="cart-summary-label">Subtotal</td>
                    <td>{money.format(subtotal)}</td>
                </tr>

                {/* TAX ROW */}
                <tr className="cart-summary-row">
                    <td colSpan={3} className="cart-summary-label">Tax (8.25%)</td>
                    <td>{money.format(taxAmount)}</td>
                </tr>

                {/* GRAND TOTAL ROW */}
                <tr className="cart-total-row">
                    <td colSpan={3} className="cart-total-label">Total</td>
                    <td id="cart-grand-total">{money.format(grandTotal)}</td>
                </tr>
            </tbody>
        </table>
    );
}
