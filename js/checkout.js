 var users = JSON.parse(localStorage.getItem('users'))
    var email = document.getElementById('checkout-email')
    email.innerHTML=`${users[0].email}`
    

    var order_summary = document.getElementById('order-summary-div')
    console.log(order_summary)
    var div = document.createElement('div')
    var cart = JSON.parse(localStorage.getItem('cart'))
    div.innerHTML=`<div id="order_summry_outer-div">
        <img src="${cart[cart.length-1].url}" alt="" id="order-summary-img">
        <p id="your-cart-name-p">${cart[cart.length - 1].name}</p>
        <h4 id="your-cart-price-h4">${"$ " + cart[cart.length - 1].price}</h4>
        </div> `
        order_summary.append(div)




    var sum = document.getElementById('sum')
     sum.innerHTML=`<div>
                    <p>Subtotal <span>$ ${cart[cart.length-1].price}</span></p>
                </div>
                <div>
                    <p>Shipping<span>$ 10</span></p>
                </div>
                <div>
                    <p>Tax <span>$ 0.00</span></p>
                </div>
                <div></div>
                <div>
                    <p>Total (USD) <span>$ ${Number(cart[cart.length - 1].price) + 10}</span> </p>
                </div>`
    function billing(){
        var country = document.getElementById('country').value
        var first_name = document.getElementById('first-name').value
        var last_name = document.getElementById('last-name').value
        var address =document.getElementById('address').value
        var city = document.getElementById('city').value
        var state = document.getElementById('state').value
        var pin_code = document.getElementById('pin-code').value
        var phone_number = document.getElementById('phone-number').value

        var arr=[];
        var obj={
            country,
            first_name,
            last_name,
            address,
            city,
            state,
            pin_code,
            phone_number
        }
        arr.push(obj)
        localStorage.setItem('checkout-address',JSON.stringify(arr))
        var checkout_address = JSON.parse(localStorage.getItem('checkout-address'))
        var address_apend = document.getElementById('address-apend')
        address_apend.innerHTML=`<span>${checkout_address[0].first_name} ${checkout_address[0].last_name}</span><br>
    <span>${checkout_address[0].address} ${checkout_address[0].city},${checkout_address[0].state}</span><br>
    <span>${checkout_address[0].pin_code} ${checkout_address[0].country}</span><br>
    <span>${checkout_address[0].phone_number}</span>`
    }
    function redirectToOrders(){
        window.location.href='loggedin-home-page.html'
        alert("Order Placed")
    }
    