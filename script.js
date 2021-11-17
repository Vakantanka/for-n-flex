const formatNumber = function (amount,actNumber) {
    let numberLength = String(amount).length;
    let formattedNumber = String(actNumber).padStart(numberLength,"0");
    return formattedNumber;
}

const generateArray = function(amount) {
    let returnArray = [];

    amount = parseInt(amount);
    console.log(amount);

    if (!Number.isNaN(amount)) {
        // console.log("Az amount egy szám: " + amount);
        for (let i = 0; i < amount; i++) {
            returnArray.push(`${formatNumber(amount,i)}`);
        }
    } else {
        returnArray.push("error");
    }

    return returnArray;
}

const loadEvent = function() {
    console.log("Load completed.");

    // console.log(generateArray(100));
    // console.log(generateArray(15));
    // console.log(generateArray("kiskutya"));
    // console.log(generateArray("33"));
    // console.log(generateArray([7]));

    const root = document.getElementById("root");
    const list = generateArray(200);

    if (list[0] !== "error") {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend",`<div class="card">${item}</div>`);
        }
    }

}

window.addEventListener("load", loadEvent);
/* 
window.addEventListener("load", function() {
    // ez is teljesen elfogadott
});
*/
/* 
window.addEventListener("load", () => {
    // ez is teljesen elfogadott
});
*/