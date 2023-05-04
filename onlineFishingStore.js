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
};  









