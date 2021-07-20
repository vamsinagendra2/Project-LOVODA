 var your_cart_out = document.getElementById("your-cart-items-div-out")
        var your_cart_div = document.getElementById('your-cart-items-div-in')
        console.log(your_cart_out);
        
        var cart = JSON.parse(localStorage.getItem('cart'))
        for (i = 0; i < cart.length; i++) {
            var quantity = 0;
            cart.forEach(element => {
                if (element.name == cart[0].name) {
                    quantity++;
                }
            });
            your_cart_div.innerHTML = `<img src="${cart[i].url}" alt="">
        <p id="your-cart-name-p">${cart[i].name}</p>
        <h4 id="your-cart-price-h4">${"$ " + cart[i].price}</h4>
        <p id="your-cart-quantity-p">${quantity}</p>
        <h4 id="your-cart-total-h4">${"$ " + cart[i].price * quantity}</h4>
    `
            your_cart_out.appendChild(your_cart_div)
        }
        console.log(your_cart_div)

        function proceedToCheckout(){
            window.location.href="checkout.html"
        }