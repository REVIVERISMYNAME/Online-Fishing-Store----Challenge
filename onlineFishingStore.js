console.log("-- My Fishing Store Page Loaded --");
/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

    // code here...
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded' , ready)
      } else { ready()
      
      } 
      function ready() {

        updateCartTotal()
        
    


    // Function for "Remove" buttons
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    console.log(removeCartItemButtons);
    for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', function(Event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()

        console.log("-- Item Removed --");
        updateCartTotal()
      })
      
    }

    // Function for changing the Quantity input
    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged) 
    }
    function quantityChanged(event) {
      var input = event.target
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
      }
      updateCartTotal()
    
    }
    function updateCartTotal() {
      var cartItemContainer = document.getElementsByClassName('cart-items')[0]
      var cartRows = cartItemContainer.getElementsByClassName('cart-row')
      var total = 0
      for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
        [0]
        var price = parseFloat(priceElement.innerText.replace('R', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
      }
      
      total = Math.round(total * 1000) / 1000
      document.getElementsByClassName('cart-total-price')[0].innerText = "R " + total
      
      console.log(" -- Total Amount Updated --")
    }

    // Funtion for "ADD" buttons
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
        
    }    
    

    console.log('Page still works');

        function addToCartClicked(event) {
             var button = event.target
             var shopItem = button.parentElement.parentElement
             var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
             var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
             var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
             console.log(title);
             console.log(price);
             console.log(imageSrc);
             addItemToCart(title, price, imageSrc);
            };

            function addItemToCart(title, price, imageSrc) {
              var cartRow = document.createElement('div');
              cartRow.classList.add('cart-row');
              var cartItems = document.getElementsByClassName('cart-items')[0];
              // Loop to prevent the same Item to be added more than once to the Cart
                  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
                  for (var i = 0; i < cartItemNames.length; i++) {
                    if (cartItemNames[i].innerText == title) {
                      alert(" Item" + title + " is Already in your cart ");
                      return
                    }
                   
                  }
              var cartRowContents =
               `
                  <div class="cart-item cart-column">
                  <img src="${imageSrc}" class="cart-item-image" style="width:160px" alt="Image">
                  <span class="cart-item-title">${title}</span>
                 </div>

                 <span class="cart-price cart-colomn">${price}</span>

                 <div class="cart-quantity cart-column">
                  <input class="cart-quantity-input" type="number" value="1">
                  <button class="btn btn-danger" type="buton">REMOVE</button>
                </div>
              `

              cartRow.innerHTML = cartRowContents;
              cartItems.append(cartRow);

    // Function for "Remove" buttons after appended to Cart
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    console.log(removeCartItemButtons);
    for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', function(Event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()

        console.log("-- Item Removed --");
        updateCartTotal()
      })
      
    }

     // Function for changing the Quantity input
     var quantityInputs = document.getElementsByClassName('cart-quantity-input');
     for (var i = 0; i < quantityInputs.length; i++) {
       var input = quantityInputs[i]
       input.addEventListener('change', quantityChanged) 
     }
     function quantityChanged(event) {
       var input = event.target
       if (isNaN(input.value) || input.value <= 0) {
         input.value = 1
       }
       updateCartTotal()
     
     }
     function updateCartTotal() {
       var cartItemContainer = document.getElementsByClassName('cart-items')[0]
       var cartRows = cartItemContainer.getElementsByClassName('cart-row')
       var total = 0
       for (var i = 0; i < cartRows.length; i++) {
         var cartRow = cartRows[i]
         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
         [0]
         var price = parseFloat(priceElement.innerText.replace('R', ''))
         var quantity = quantityElement.value
         total = total + (price * quantity)
       }
       
       total = Math.round(total * 1000) / 1000
       document.getElementsByClassName('cart-total-price')[0].innerText = "R " + total
       
       console.log(" -- Total Amount Updated --")
     }
              
              updateCartTotal();

           }

 };
      

    










