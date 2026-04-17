import { useState } from "react";
import { useNavigate } from "react-router";
import CartSummary from "../components/CartSummary";
import ConfirmModal from "../components/ConfirmModal";

export default function CartPage({ cart, clearCart }) {

    const navigate = useNavigate();

    // MODAL VISIBILITY STATE
    const [cancelModalOpen, setCancelModalOpen] = useState(false);
    const [thankYouModalOpen, setThankYouModalOpen] = useState(false);
    const [thankYouMessage, setThankYouMessage] = useState("");

    // CANCEL FLOW: OPEN CONFIRMATION MODAL
    function handleCancelClick() {
        setCancelModalOpen(true);
    }

    // CONFIRMED CANCEL: CLEAR CART → SHOW THANK YOU WITH CANCEL MESSAGE
    function handleConfirmCancel() {
        setCancelModalOpen(false);
        clearCart();
        setThankYouMessage("Your order has been cancelled. Come back when the steam clears.");
        setThankYouModalOpen(true);
    }

    // SUBMIT FLOW: CLEAR CART → SHOW THANK YOU WITH SUBMIT MESSAGE
    function handleSubmitOrder() {
        clearCart();
        setThankYouMessage("Your order has been submitted. The kitchen has been notified. Watch for the knock.");
        setThankYouModalOpen(true);
    }

    // THANK YOU MODAL CLOSE: REDIRECT TO MENU
    function handleThankYouClose() {
        setThankYouModalOpen(false);
        navigate("/menu");
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">

                    {/* PAGE HEADER */}
                    <div className="card">
                        <h2 className="cinzel">Your Order</h2>
                        <p>
                            A carefully assembled collection of tonight's contraband. Review
                            your selections before the deal is sealed.
                        </p>
                    </div>

                    {/* CART TABLE */}
                    <div className="card" id="cart-wrapper">
                        <CartSummary cart={cart} />
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="cart-actions">
                        <button
                            className="cart-btn cart-btn-cancel"
                            onClick={handleCancelClick}
                            disabled={cart.length === 0}
                        >
                            Cancel Order
                        </button>
                        <button
                            className="cart-btn cart-btn-submit"
                            onClick={handleSubmitOrder}
                            disabled={cart.length === 0}
                        >
                            Submit Order
                        </button>
                    </div>

                </div>
            </div>

            {/* CANCEL CONFIRMATION MODAL */}
            <ConfirmModal
                open={cancelModalOpen}
                onOpenChange={setCancelModalOpen}
                title="Cancel Your Order?"
                body="Are you sure you want to cancel your order? All selections will be cleared."
                actions={
                    <>
                        <button className="cart-btn cart-btn-cancel" onClick={handleConfirmCancel}>
                            Yes, Cancel Order
                        </button>
                        <button
                            className="cart-btn cart-btn-submit"
                            onClick={function() { setCancelModalOpen(false); }}
                        >
                            Keep My Order
                        </button>
                    </>
                }
            />

            {/* THANK YOU MODAL */}
            <ConfirmModal
                open={thankYouModalOpen}
                onOpenChange={handleThankYouClose}
                title="Order Received"
                body={thankYouMessage}
            />

        </div>
    );
}
