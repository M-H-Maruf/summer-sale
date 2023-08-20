// initial values
discount = getTextElementValueById("discount");
total = getTextElementValueById("total");
totalPrice = getTextElementValueById("total-price");

// disabled buttons
var couponButton = document.getElementById("coupon");
var purchaseButton = document.getElementById("make-purchase");
couponButton.disabled = true;
purchaseButton.disabled = true;

// copy to clipboard button
let text = document.getElementById("p1").innerHTML;
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Content copied to clipboard");
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
};

// add to cart
function addThisToCart(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    const price = parseFloat(
        target.childNodes[3].childNodes[5].childNodes[0].innerText
    );
    totalPrice = getTextElementValueById("total-price");
    totalPrice += price;
    setTextElementValueById("total-price", totalPrice.toFixed(2));
    setTextElementValueById("total", totalPrice.toFixed(2));
    // button enabling
    if (totalPrice > 0) {
        purchaseButton.disabled = false;
    }
    if (totalPrice >= 200) {
        couponButton.disabled = false;
    }
}

// apply coupon
ci = 1;
function applyDiscount() {
    promoCode = getInputFieldValueById("promo");
    if (promoCode == "SELL200" && ci == 1) {
        discount = getTextElementValueById("discount");
        total = getTextElementValueById("total");
        discount = ((totalPrice * 20) / 100).toFixed(2);
        setTextElementValueById("discount", discount);
        total = (totalPrice - discount).toFixed(2);
        setTextElementValueById("total", total);
        ci--;
    } else if (ci != 1) {
        alert("You have already used the promo code!");
    } else {
        alert("You have entered a wrong promo code!");
    }
}
