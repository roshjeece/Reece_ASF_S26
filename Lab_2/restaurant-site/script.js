const MENU_ITEMS = [
    // BREAKFAST
    {
        id: 1,
        name: "Boilermaker's Dawn Plate",
        description: "Cast-iron eggs, smoked coal-cured bacon, and ember-roasted potatoes with a drizzle of copper-kettle hot sauce.",
        price: 11.00,
        category: "Breakfast"
    },
    {
        id: 2,
        name: "Clockwork Oats",
        description: "Steel-cut oats slow-cooked in spiced steam, topped with candied brass-root and a pat of smoked butter.",
        price: 8.50,
        category: "Breakfast"
    },
    {
        id: 3,
        name: "Piston Press Toast",
        description: "Thick sourdough pressed under iron weight, served with whipped bone marrow butter and bitter marmalade.",
        price: 9.00,
        category: "Breakfast"
    },
    // LUNCH
    {
        id: 4,
        name: "Contraband Bone Marrow Toast",
        description: "Roasted marrow, cracked black pepper, shallot relish, and charred sourdough. Rich enough to make you reconsider your loyalties.",
        price: 11.00,
        category: "Lunch"
    },
    {
        id: 5,
        name: "Underground Short Rib Sliders",
        description: "Slow-braised beef, molasses glaze, smoked cheddar, and pickled brassica on toasted brioche. Built for backroom negotiations.",
        price: 12.00,
        category: "Lunch"
    },
    {
        id: 6,
        name: "Gutter-Fried Steam Dumplings",
        description: "Crisp-edged pork dumplings with black garlic soy glaze and ember-roasted scallions. Best enjoyed while pretending you're not here.",
        price: 10.00,
        category: "Lunch"
    },
    {
        id: 7,
        name: "Exhaust Pipe Soup",
        description: "Rich smoked bone broth with shredded short rib, scallion oil, and a soft-cooked egg. Warms from the inside out.",
        price: 9.50,
        category: "Lunch"
    },
    // DINNER
    {
        id: 8,
        name: "Clockwork Widow",
        description: "Gin infused with lavender steam, absinthe mist, lemon oil, and a drop of honeyed bitters. Floral at first sip — devastating by the last.",
        price: 14.00,
        category: "Dinner"
    },
    {
        id: 9,
        name: "Boiler Room Burn",
        description: "Spiced rye, smoked chili tincture, dark cherry reduction, and a spark of ginger. Warms like industrial heat — lingers like regret.",
        price: 13.00,
        category: "Dinner"
    },
    {
        id: 10,
        name: "The Brass Knuckle Old Fashioned",
        description: "Smoked bourbon, blackstrap molasses syrup, charred orange peel, and a whisper of clove. Served over a single iron-cut cube. Hits first. Asks questions later.",
        price: 14.00,
        category: "Dinner"
    },
    {
        id: 11,
        name: "Gear-Braised Duck Leg",
        description: "Slow-rendered duck in a dark molasses and juniper reduction, served over smoked parsnip mash with crispy shallots.",
        price: 22.00,
        category: "Dinner"
    },
    {
        id: 12,
        name: "Ironworks Lamb Chops",
        description: "Charcoal-seared lamb chops with a smoked chili crust, coal-roasted beets, and a drizzle of aged balsamic reduction.",
        price: 26.00,
        category: "Dinner"
    }
];

// RENDER MENU ITEMS TO PAGE AS BOOTSTRAP CARDS
function renderMenuCards() {

    const container = document.getElementById("menu-cards");

    // IF NO CONTAINER EXISTS, EXIT EARLY (NOT ON MENU PAGE)
    if (!container) return;

    // GET UNIQUE CATEGORIES IN ORDER
    const categories = ["Breakfast", "Lunch", "Dinner"];

    categories.forEach(function(category) {

        // FILTER ITEMS BELONGING TO THIS CATEGORY
        const items = MENU_ITEMS.filter(function(item) {
            return item.category === category;
        });

        // BUILD CATEGORY HEADING
        const heading = document.createElement("h2");
        heading.classList.add("cinzel");
        heading.textContent = category;
        container.appendChild(heading);

        // BUILD BOOTSTRAP ROW TO HOLD CARDS
        const row = document.createElement("div");
        row.classList.add("row", "row-cols-1", "row-cols-md-2", "row-cols-lg-3", "g-3", "mb-4");

        items.forEach(function(item) {

            // OUTER COLUMN DIV
            const col = document.createElement("div");
            col.classList.add("col");

            // FORMAT PRICE AS USD
            const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
            const formattedPrice = money.format(item.price);            // BUILD CARD HTML

            col.innerHTML =
                '<div class="menu-card h-100">' +
                '<div class="menu-card-body">' +
                '<h5 class="menu-card-title">' + item.name + '</h5>' +
                '<p class="menu-card-text">' + item.description + '</p>' +
                '</div>' +
                '<div class="menu-card-footer">' +
                '<span class="menu-card-category">' + item.category + '</span>' +
                '<span class="menu-card-price">' + formattedPrice + '</span>' +
                '</div>' +
                '</div>';

            row.appendChild(col);
        });

        container.appendChild(row);
    });
}

// CALL ON PAGE LOAD
renderMenuCards();

// RESERVATION FORM VALIDATION
// RESERVATION FORM VALIDATION
function validateReservationForm() {

    const form = document.getElementById("reservation-form");

    // IF NO FORM EXISTS, EXIT EARLY (NOT ON RESERVATIONS PAGE)
    if (!form) return;

    form.addEventListener("submit", function(event) {

        // PREVENT DEFAULT BROWSER SUBMISSION
        event.preventDefault();

        // COLLECT ALL VALIDATION ERRORS
        const errors = [];

        // VALIDATE NAME: REQUIRED, MAX 20 CHARACTERS
        const name = document.getElementById("name").value.trim();
        if (name === "") {
            errors.push("An alias is required.");
        } else if (name.length > 20) {
            errors.push("Alias must be 20 characters or fewer.");
        }

        // VALIDATE EMAIL: REQUIRED, MUST MATCH EMAIL PATTERN
        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            errors.push("An email address is required.");
        } else if (!emailPattern.test(email)) {
            errors.push("Please enter a valid email address.");
        }

        // VALIDATE PARTY SIZE: REQUIRED, MUST SELECT AN OPTION
        const partySize = document.getElementById("party-size-select").value;
        if (partySize === "") {
            errors.push("Please select a party size.");
        }

        // VALIDATE DATE: REQUIRED, MUST BE TODAY OR FUTURE
        const dateInput = document.getElementById("date").value;
        if (dateInput === "") {
            errors.push("A reservation date is required.");
        } else {
            const selectedDate = new Date(dateInput);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                errors.push("Date must be today or in the future.");
            }
        }

        // VALIDATE TIME: REQUIRED
        const time = document.getElementById("time").value;
        if (time === "") {
            errors.push("A reservation time is required.");
        }

        // VALIDATE SEATING: ONE RADIO MUST BE SELECTED
        const seatingChoice = document.querySelector('input[name="seatingChoice"]:checked');
        if (!seatingChoice) {
            errors.push("Please select a seating preference.");
        }

        // VALIDATE DIETARY NOTES: OPTIONAL, MAX 30 CHARACTERS IF PROVIDED
        const dietary = document.getElementById("dietaryNotes").value.trim();
        if (dietary.length > 30) {
            errors.push("Dietary notes must be 30 characters or fewer.");
        }

        // GET ALERT CONTAINER
        const alertBox = document.getElementById("form-alert");

        // CLEAR PREVIOUS ALERT
        alertBox.innerHTML = "";

        if (errors.length > 0) {

            // BUILD DANGER ALERT WITH ERROR LIST
            const alert = document.createElement("div");
            alert.classList.add("alert", "alert-danger");
            alert.setAttribute("role", "alert");

            const heading = document.createElement("strong");
            heading.textContent = "Please correct the following:";
            alert.appendChild(heading);

            const list = document.createElement("ul");
            list.classList.add("mb-0", "mt-1");

            errors.forEach(function(errorMessage) {
                const item = document.createElement("li");
                item.textContent = errorMessage;
                list.appendChild(item);
            });

            alert.appendChild(list);
            alertBox.appendChild(alert);

        } else {

            // BUILD RESERVATION OBJECT FROM FORM VALUES
            const reservation = {
                name: name,
                email: email,
                partySize: partySize,
                date: dateInput,
                time: time,
                seating: seatingChoice.value,
                dietaryNotes: dietary,
                newsletter: document.getElementById("newsletterOptIn").checked
            };

            // LOG COMPLETED RESERVATION TO CONSOLE
            console.log("Reservation submitted:", reservation);

            // BUILD SUCCESS ALERT
            const alert = document.createElement("div");
            alert.classList.add("alert", "alert-success");
            alert.setAttribute("role", "alert");
            alert.textContent = "Your request has been received. Watch for the knock.";
            alertBox.appendChild(alert);
            form.reset();
        }
    });
}

validateReservationForm();