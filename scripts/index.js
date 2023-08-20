// disabled buttons
var couponButton = document.getElementById("coupon");
var purchaseButton = document.getElementById("make-purchase");
couponButton.disabled = true;
purchaseButton.disabled = true;

// add to cart
function addThisToCart(target) {
    console.log(target.childNodes[3].childNodes[3].innerText);
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    console.log(target.childNodes[3].childNodes[5].childNodes[0].innerText);
    const price = parseFloat(
        target.childNodes[3].childNodes[5].childNodes[0].innerText
    );
    totalPrice = getTextElementValueById("total-price");
    totalPrice += price;
    setTextElementValueById ('total-price',totalPrice);
    setTextElementValueById ('total',totalPrice);
    // button enabling
    if (totalPrice > 0) {
        purchaseButton.disabled=false;
    }
    if (totalPrice >= 200) {
        couponButton.disabled=false;
    }
}
discount = getTextElementValueById('discount')
total = getTextElementValueById('total')
