/* Store input elements */
const fullNameEl = document.getElementById('fullName');
const routeKmEl = document.getElementById('routeKm');
const ageGroupEl = document.getElementById('ageGroup');

/* Button */
const generateBtn = document.getElementById("generateTicketBtn");

/* Config variables */
const costPerKm = 0.21;
const discountMinors = 20 / 100;
const discountOver65 = 40 / 100;

/* Output Display Elements */
const ticketOwnerEl = document.getElementById('ticketOwner');
const rateTypeEl = document.getElementById('rateType');
const coachNumberEl = document.getElementById('coachNumber');
const cpCodeEl = document.getElementById("cpCode");
const ticketPriceEl = document.getElementById('ticketPrice');

/* console.log(fullNameEl, routeKmEl, ageGroupEl, generateBtn); */

/* Button click listener */
generateBtn.addEventListener("click", function(e) {

    /* Prevent default refresh */
    e.preventDefault();

    /* Retrive input values */
    const fullName = fullNameEl.value;
    const routeKm = routeKmEl.value;
    const ageGroup = ageGroupEl.value;

    /* Data to show */
    let rateType = "Biglietto Standard";

    /* Calculate final price */
    let price = costPerKm * routeKm;
    
    if (ageGroup === "minorenne") {
        price = price - (price * discountMinors);
        rateType = "Biglietto Minorenni";
    } else if (ageGroup == "over65") {
        price = price - (price * discountOver65);
        rateType = "Biglietto Over 65";
    }

    /* Round price to 2 decimals  */
    price = price.toFixed(2);

    /* Output */
    console.log(price);

    /* Output to Card */
    ticketOwnerEl.innerHTML = fullName;
    rateTypeEl.innerHTML = rateType;
    coachNumberEl.innerHTML = Math.floor(Math.random() * 7) + 1;
    cpCodeEl.innerHTML = Math.floor(Math.random() * 99999) + 12345;
    ticketPriceEl.innerHTML = price + "€";
})