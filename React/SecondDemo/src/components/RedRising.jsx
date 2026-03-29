import { MENU_ITEMS } from "../utils/data.js";

const RedRising = ({ weaponArray }) => {

    // FIX 1: pull index from map's second parameter
    let results = weaponArray.map((data, index) => {
        return <li key={index}>{data}</li>
    });

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    })

    // FIX 2: use the imported MENU_ITEMS array
    let menuCards = MENU_ITEMS.map((kitty, index) => {
        let theStyles = {
            border: "3px red solid",
            width: "50%",
            margin: "0 auto"
        }

        let {title, imgSrc, price} = kitty

        return (
            <div key={index} style={theStyles}>
                <h2>{title}</h2>
                <img src={imgSrc} alt={title} />
                <p>{formatter.format(price)}</p>
            </div>
        );
    });

    // FIX 3: actually return JSX
    return (
        <>
            <ul>{results}</ul>
            <div>{menuCards}</div>
        </>
    );
};

export default RedRising;