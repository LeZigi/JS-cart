
if (document.readyState == 'loading') {

	document.addEventListener('DOMContentLoaded',ready);

}else{

	ready()
}

//enter engine function
function ready(data) {


// adding items to cart
var addToCartButtons = document.getElementsByClassName('item-addToCart')

    for (var i = 0; i < addToCartButtons.length; i++) {

	    var button = addToCartButtons[i];
  	    button.addEventListener('click',addToCartClicked);
    }

//showing cart contents when cart button clicked
var cartInfo = document.getElementById('inCart');
var cart = document.getElementsByClassName('cart')[0];

    cartInfo.addEventListener('click', function(){
    	cart.classList.toggle('show-cart');
    })

var removeCartItemButtons = document.getElementsByClassName('fa-times-circle');

	for (var i = 0; i < removeCartItemButtons.length; i++ ) {
		var button = removeCartItemButtons[i];
		button.addEventListener('click', removeCartItem);
		// console.log(removeCartItemButtons.length)
	}

var add = document.getElementsByClassName('qty-inc')
		
	for (var i = 0; i < add.length; i++) {
		var addBtn = add[i];
		addBtn.addEventListener('click', addVal)
	}


var minus = document.getElementsByClassName('qty-dec')
		
	for (var i = 0; i < minus.length; i++) {
		var minusBtn = minus[i];
		minusBtn.addEventListener('click', minusVal)
	}	
	
	updateCartTotal()

}


//called when delete button in the cart is clicked; removing cart items
function removeCartItem(event){

	var buttonClicked = event.target;
	buttonClicked.parentElement.parentElement.remove();

	updateCartTotal()

}

//called when add button in the cart is clicked; for increasing quantity
function addVal(event) {
	
	var btn = event.target;

	var x = parseInt(btn.previousElementSibling.innerText)
	    x = x+1;

	btn.previousElementSibling.innerText = x

    updateCartTotal()
		
}

//called when minus button in the cart is clicked; for reducing quantity
function minusVal(event) {
	
	var btn = event.target;

	var x = parseInt(btn.nextElementSibling.innerText)
	    x = x-1;

	if(x<=0){

	    btn.nextElementSibling.innerText = 1;

	}else{

		btn.nextElementSibling.innerText = x;
	}

	updateCartTotal()
	
}

//Called when add button is clicked, for adding items to cart
//?? I find it strange that each time ADD button is clicked, when the cart
//is not toggled open, the cart total comes back as 'is NaN' ontop of duplicating 
//items that already exist in the cart.
function addToCartClicked(event) {


	var button = event.target;

	var shopItem = button.parentElement;

	var title = shopItem.getElementsByClassName('item-title')[0].innerText;
	var price = shopItem.getElementsByClassName('item-price')[0].innerText;
	var imgSrc = shopItem.getElementsByClassName('item-image')[0].src;

	var cartItems = document.getElementsByClassName('cart-items')[0];
	var cartItemNames = cartItems.getElementsByClassName('cart-item-title');

//I don't understand why this loop does not work when cart is not toggled open,
//it should prevent duplication of items in the cart by returning the alert function
//when an item is already in the cart yet it only works when the cart is open
	for (var i = 0; i < cartItemNames.length; i++) {
		if (cartItemNames[i].innerText == title ) {
			alert('Item already added to cart');
			return
		}

	}

	var cartRow = document.createElement('div');
	cartRow.classList.add('cart-row')
	
	

	var cartRowContents = `

		         <div class="cart-item">
		 	        <i class="fa fa-times-circle" aria-hidden="true"></i>
			
			         <div class="cart-item-image"></div>
			        <span class="cart-item-title">${title}</span>
		         </div>

		         <span class="cart-item-price">${price}</span>

		         <div class="cart-item-qty">
		  	       <i class="fa fa-minus qty-dec" aria-hidden="true"></i>
		  	       <span class="item-quantity">1</span>
		  	       <i class="fa fa-plus qty-inc" aria-hidden="true"></i>
		         </div>					
								`
	
	
	cartRow.innerHTML = cartRowContents;
	cartItems.append(cartRow)

	cartRow.getElementsByClassName('fa-times-circle')[0].addEventListener('click', removeCartItem);
	cartRow.getElementsByClassName('qty-dec')[0].addEventListener('click', minusVal);
	cartRow.getElementsByClassName('qty-inc')[0].addEventListener('click', addVal);


updateCartTotal()
	
	  // <img class="cart-item-image" src="${imgSrc}">
}

//this is where all calculations associated with the cart total cost 
//and number of items in the cart happen;
//including determinantion of the number of items in the cart. And whenever
//quanity is increased, decreased or an item removed or added to the cart,
//it is called to perform the calculations suitably.
function updateCartTotal() {

	var all = document.getElementsByClassName('cart-items')[0];
	var tot = all.getElementsByClassName('cart-row');

	var total = 0;

	for (var i = 0; i < tot.length; i++) {

		var currentCartItem = tot[i];

		var priceElement = currentCartItem.getElementsByClassName('cart-item-price')[0];
		// console.log(priceElement)
		var quantityElement = currentCartItem.getElementsByClassName('cart-item-qty')[0];
		// console.log(quantityElement)
		var quantityEl = quantityElement.getElementsByClassName('item-quantity')[0];

		var price = parseInt(priceElement.innerText.replace('KES:',''));
		// console.log(price)

		var quantity = quantityEl.innerText;
		// console.log(quantity)

		total = total + (price * quantity);
		// console.log(total)

	}
		total = Math.round(total*100)/100;
		
		// console.log(total)
	    document.getElementsByClassName('cart-total-price')[0].innerText = 'KES' + " " + total;
	    document.getElementById('inCart').innerText = tot.length;

}