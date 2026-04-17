import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import SiteNavbar from "./components/SiteNavbar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ReservationsPage from "./pages/ReservationsPage";
import CartPage from "./pages/CartPage";

export default function App() {

    // CART STATE LIVES AT TOP LEVEL — PASSED DOWN VIA PROPS
    const [cart, setCart] = useState([]);

    // ADD ITEM TO CART OR INCREMENT QUANTITY (CAP AT 5)
    function addToCart(id, name, price, quantity) {
        setCart(function(prevCart) {
            const existing = prevCart.find(function(entry) { return entry.id === id; });

            if (existing) {
                // ITEM ALREADY IN CART — INCREMENT QUANTITY, MAX 5
                return prevCart.map(function(entry) {
                    if (entry.id === id) {
                        return { ...entry, quantity: Math.min(entry.quantity + quantity, 5) };
                    }
                    return entry;
                });
            } else {
                // NEW ITEM — APPEND TO CART
                return [...prevCart, { id, name, price, quantity }];
            }
        });
    }

    // CLEAR ALL ITEMS FROM CART
    function clearCart() {
        setCart([]);
    }

    return (
        <BrowserRouter>
            <SiteNavbar cart={cart} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
                <Route path="/reservations" element={<ReservationsPage />} />
                <Route path="/cart" element={<CartPage cart={cart} clearCart={clearCart} />} />
            </Routes>
        </BrowserRouter>
    );
}
