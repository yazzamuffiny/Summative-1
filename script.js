

//pop out cart

let openCart = document.getElementById('openCart');
let closeCart = document.getElementById('closeCart');
let cartItems = document.getElementById('cart');

const cartEvent = (open, close, cart) => {
    openCart.style.display = open;
    closeCart.style.display = close;
    cartItems.style.display = cart;
}

openCart.addEventListener('click', () => cartEvent("none", "block", "flex"));
closeCart.addEventListener('click', () => cartEvent("block", "none", "none"));

//pop out cart ends

const openStaff = document.getElementById("openStaff");
const closeStaff = document.getElementById("closeStaff");
const modalStaff = document.getElementById("modalStaff");

openStaff.addEventListener('click', function() {
    modalStaff.showModal();
});
closeStaff.addEventListener('click', function() {
    modalStaff.close();
});



