var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCartDescription() {
  var cartDescription = 'In your cart, you have ';
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`;
  }
  if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = '';
    for (var i=1; i<getCart().length -1; i++) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;
    }
    cartDescription += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`;
  }

  return `${cartDescription}.`;
}

function generateCartItem(itemName) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  };
}

function addToCart(item) {
  var item = generateCartItem(item)
  getCart().push(item);
  return `${item.itemName} has been added to your cart.`;
}



function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription();
}

function total() {
  var sum = sumUpPrices();
  return sum;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
