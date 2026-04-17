import { NavLink } from "react-router";
import logo from "../assets/logo.png";

export default function SiteNavbar({ cart }) {

    // TOTAL ITEM COUNT FOR CART BADGE
    const cartCount = cart.reduce(function(sum, entry) { return sum + entry.quantity; }, 0);

    return (
        <nav className="gg-navbar">
            <div className="gg-navbar-inner">

                {/* BRAND */}
                <NavLink to="/" className="gg-brand">
                    <img src={logo} alt="Gear & Gutter Logo" height={50} />
                    Gear &amp; Gutter
                </NavLink>

                {/* NAV LINKS */}
                <ul className="gg-nav-links">
                    <li>
                        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/reservations" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Reservations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Cart
                            {/* CART ITEM COUNT BADGE */}
                            {cartCount > 0 && (
                                <span className="cart-badge">{cartCount}</span>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}