<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet"  href="css/all.min.css" />
	<link rel="stylesheet"  href="css/fontawesome.min.css" />
	<link rel="stylesheet" type="text/css" href="store.css" />
</head>
<body>
	<nav>

		<button id="inCart">Items</button>

	</nav>
	<div class="container">

		<h3>ITEMS</h3>

		<div class="items">

			<div class="item">
				<div class="item-image">
					
				</div>
				<span class="item-title">Jack Daniels 1L</span>
				<span class="item-price">KES: 3850</span>
				<button class="item-addToCart">ADD</button>
			</div>

			<div class="item">
				<div class="item-image">
					
				</div>
				<span class="item-title">Southern Comfort 1L</span>
				<span class="item-price">KES: 13000</span>
				<button class="item-addToCart">ADD</button>
			</div>

			<div class="item">
				<div class="item-image">
					
				</div>
				<span class="item-title">Famous Grouse 1L</span>
				<span class="item-price">KES: 1450</span>
				<button class="item-addToCart">ADD</button>
			</div>

			<div class="item">
				<div class="item-image">
					
				</div>
				<span class="item-title">Remy Martins 750ml</span>
				<span class="item-price">KES: 14700</span>
				<button class="item-addToCart">ADD</button>
			</div>

			<div class="item">
				<div class="item-image">
					
				</div>
				<span class="item-title">Hennessy 1L</span>
				<span class="item-price">KES: 8500</span>
				<button class="item-addToCart">ADD</button>
			</div>

			<div class="item">
				<div class="item-image">
					
				</div>
				<span class="item-title">Grey Goose 2L</span>
				<span class="item-price">KES: 15000</span>
				<button class="item-addToCart">ADD</button>
			</div>

			<div class="item">
				<div class="item-image">
					
				</div>
				<span class="item-title">Johnnie Walker 1L</span>
				<span class="item-price">KES: 9270</span>
				<button class="item-addToCart">ADD</button>
			</div>

			<div class="item">
				<div class="item-image">
					
				</div>
				<span class="item-title">Double Black 750ml</span>
				<span class="item-price">KES: 12600</span>
				<button class="item-addToCart">ADD</button>
			</div>

		</div>

	</div>

	<section>

	 <div class="cart">

       <div class="cart-items-header">
	     <div class="cart-item-h ">ITEM</div>
	     <div class="cart-price-h ">PRICE</div>
	     <div class="cart-quantity-h ">QTY.</div>
       </div>

       <div class="cart-items"><!--start of cart contents-->
       		<!-- populated with javascript addToCartClicked() function -->
       </div><!--end of cart contents-->

       <div class="cart-total">
 	      <strong class="cart-total-title">Total :</strong>
 	      <span class="cart-total-price"> 0</span>	
       </div>

       <button class="btn-purchase" type="button">PURCHASE</button>

    </div>

	</section>

</body>
 <script src="js/store.js"></script>
</html>