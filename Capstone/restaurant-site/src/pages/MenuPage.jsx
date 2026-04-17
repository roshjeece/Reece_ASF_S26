import { useState } from "react";
import { MENU_ITEMS } from "../data/menuData";
import MenuFilter from "../components/MenuFilter";
import MenuItemCard from "../components/MenuItemCard";
import specialsImg from "../assets/img2.png";
import secretImg from "../assets/img3.png";

const CATEGORIES = ["Breakfast", "Lunch", "Dinner"];

export default function MenuPage({ addToCart }) {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [secretRevealed, setSecretRevealed] = useState(false);

    // DETERMINE WHICH CATEGORIES TO RENDER BASED ON FILTER SELECTION
    const categoriesToRender = selectedCategory === "All"
        ? CATEGORIES
        : [selectedCategory];

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">

                    {/* INTRO CARD */}
                    <div className="card">
                        <h2>Illicit Provisions</h2>
                        <p>
                            At The Gear &amp; Gutter Speakeasy, the menu is a carefully guarded collection
                            of indulgences designed for those who live just slightly outside the lines.
                            Expect bold, spirit-forward cocktails, smoky infusions, and unapologetically
                            rich flavors inspired by back-alley ingenuity and industrial-age decadence.
                            Every pour, plate, and pairing feels a bit illicit — crafted with precision,
                            served with attitude, and intended to linger long after the last gear stops turning.
                        </p>
                    </div>

                    {/* SPECIALS CARD */}
                    <div className="card">
                        <h2 className="cinzel">Tonight's Specials</h2>
                        <p>
                            Indulge in our house favorites, from craft cocktails to savory bites,
                            with a few backroom temptations worth lingering over.
                        </p>
                        <img
                            src={specialsImg}
                            alt="Steampunk specials board with cocktails and smoked meats inside the Gear & Gutter Speakeasy"
                            className="menu-image"
                        />
                    </div>

                    {/* CATEGORY FILTER */}
                    <MenuFilter selected={selectedCategory} onChange={setSelectedCategory} />

                    {/* MENU CARDS — GROUPED BY CATEGORY */}
                    <div id="menu-cards" className="card">
                        {categoriesToRender.map(function(cat) {
                            const items = MENU_ITEMS.filter(function(item) {
                                return item.category === cat;
                            });
                            return (
                                <div key={cat}>
                                    <h2 className="cinzel">{cat}</h2>
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-4">
                                        {items.map(function(item) {
                                            return (
                                                <div className="col" key={item.id}>
                                                    <MenuItemCard item={item} addToCart={addToCart} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* COMBO TABLE */}
                    <div className="table-container card">
                        <table className="center-table">
                            <caption>House Pairings for Evenings Best Kept Off the Record</caption>
                            <thead>
                                <tr>
                                    <td>COMBO</td>
                                    <td>INCLUDES</td>
                                    <td>PRICE</td>
                                    <td>NOTES</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Brass Knuckle Nightcap</td>
                                    <td>The Brass Knuckle Old Fashioned, Contraband Bone Marrow Toast</td>
                                    <td>$21</td>
                                    <td>Popular</td>
                                </tr>
                                <tr>
                                    <td>The Clockwork Pairing</td>
                                    <td>Clockwork Widow, Gutter-Fried Steam Dumplings</td>
                                    <td>$19</td>
                                    <td>House Favorite</td>
                                </tr>
                                <tr>
                                    <td>Boiler Room Deal</td>
                                    <td>Boiler Room Burn, Underground Short Rib Sliders</td>
                                    <td>$20</td>
                                    <td>Spicy</td>
                                </tr>
                                <tr>
                                    <td>The Backroom Plate</td>
                                    <td>Contraband Bone Marrow Toast, Gutter-Fried Steam Dumplings</td>
                                    <td>$16</td>
                                    <td>Popular</td>
                                </tr>
                                <tr>
                                    <td>Negotiator's Special</td>
                                    <td>Underground Short Rib Sliders, Brass Knuckle Old Fashioned</td>
                                    <td>$22</td>
                                    <td>Hearty</td>
                                </tr>
                                <tr>
                                    <td>The Underground Trio</td>
                                    <td>Gutter-Fried Steam Dumplings, Short Rib Slider, Clockwork Widow</td>
                                    <td>$23</td>
                                    <td>Popular</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* SECRET OFF-MENU SECTION */}
                    <section className="secret card">
                        <h2 className="section-title">Off the Record</h2>
                        <p className="secret-hint">
                            Rumor says if you whisper the password to the right lock…
                        </p>

                        {/* KEYHOLE LOCK TOGGLE */}
                        <button
                            className="keyhole-lock"
                            onClick={function() { setSecretRevealed(function(prev) { return !prev; }); }}
                            aria-expanded={secretRevealed}
                            aria-label="Reveal secret menu item"
                        >
                            <span className="keyhole"></span>
                            <span className="lock-text">Tap the lock</span>
                        </button>

                        {/* SECRET ITEM — SHOWN WHEN REVEALED */}
                        {secretRevealed && (
                            <article className="secret-item" style={{ display: "block" }}>
                                <img
                                    src={secretImg}
                                    alt="A glowing green absinthe cocktail with curling smoke and a candied serpent garnish on a tarnished brass tray."
                                    className="secret-img"
                                />
                                <h3>Viper's Gambit</h3>
                                <p>
                                    Absinthe elixir over serrano ice with hickory smoke, finished with a charred
                                    lemon and a candied serpent twist. Served only to those who know which door to knock on.
                                </p>
                            </article>
                        )}
                    </section>

                </div>
            </div>
        </div>
    );
}
