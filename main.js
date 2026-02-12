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

/* console.log(fullNameEl, routeKmEl, ageGroupEl, generateBtn); */

/* Button click listener */
generateBtn.addEventListener("click", function() {

    /* Retrive input values */
    const fullName = fullNameEl.value;
    const routeKm = routeKmEl.value;
    const ageGroup = ageGroupEl.value;

    /* Calculate final price */
    let price = costPerKm * routeKm;
    
    if (ageGroup === "minorenne") {
        price = price - (price * discountMinors);
    } else if (ageGroup == "over65") {
        price = price - (price * discountOver65);
    }

    /* Output */
    console.log(price);
})