 let one = JSON.parse(localStorage.getItem('one'));

        let single =[];
        single.push(one[0]);
        single=single[0];

        let track = document.getElementsByClassName('prodname')[0];
        track.innerHTML=single.name;

        function replace(){
            let large = document.getElementsByClassName('main-img')[0];
            large.style.backgroundImage = `url(${single.url})`;

            let images = document.getElementsByClassName('images')[0];

            let s1 =document.createElement('div');
            s1.style.backgroundImage = `url(${single.url})`;
            s1.onclick=function(){
                large.style.backgroundImage = `url(${single.url})`;
            }
            let s2 = document.createElement('div');
            s2.style.backgroundImage = `url(${single.url2})`;
            s2.onclick = function () {
                large.style.backgroundImage = `url(${single.url2})`;
            }
            let s3 = document.createElement('div');
            s3.style.backgroundImage = `url(${single.url})`;
            s3.onclick = function () {
                large.style.backgroundImage = `url(${single.url})`;
            }
            images.append(s1,s2,s3);

            let info = document.getElementsByClassName('prod-info')[0];
            let h1 = document.createElement('H1');
            h1.textContent=`${single.name}`;

            let price = document.getElementsByClassName('price')[0];
            info.insertBefore(h1,price)
            
            let value = document.getElementById('value');
            value.innerHTML = "$" + single.price;

            let sku = document.getElementById('sku');
            sku.innerHTML = single.sku;
            let color = document.getElementById('color');
            color.innerHTML =  single.color;
            let material = document.getElementById('material');
             material.innerHTML =single. material;

        }
        replace();


        let products =JSON.parse(localStorage.getItem('productsList'));

        function cart(){
            let cart = localStorage.getItem('cart');

            if(cart==null){
                cart=[];
            }else{
                cart = JSON.parse(localStorage.getItem('cart'));
            }

            let count=document.getElementById('count').value;
            count=Number(count);

            for(i=0;i<count;i++){
                cart.push(single);
            }
            localStorage.setItem('cart',JSON.stringify(cart));
            addDiv1();
            
        }

        function wish() {
                let wishlist = localStorage.getItem('wishlist');

                if (wishlist == null) {
                    wishlist = [];
                    wishlist.push(single);
                } else {
                    wishlist = JSON.parse(localStorage.getItem('wishlist'));
                    wishlist.forEach(function (a) {
                        if (a.name == single.name) {
                            alert('already in cart')
                        } else {
                            wishlist.push(single);
                        }
                    })
                }
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
            }
        
        function details(){
            let div = document.getElementsByClassName('mid2')[0];
            div.style.display='block';
            div.style.backgroundcolor="white";
            let div2 = document.getElementsByClassName('mid21')[0];
            div2.style.display = 'none';

            let s1 = document.getElementsByClassName('active')[0];
            s1.setAttribute('class', 'inactive');
            let s = document.getElementsByClassName('inactive')[0];
            s.setAttribute('class', 'active');
        }    
         function ship() {
                let div = document.getElementsByClassName('mid2')[0];
                div.style.display = 'none';
                div.style.backgroundcolor = "white";
                let div2 = document.getElementsByClassName('mid21')[0];
                div2.style.display = 'block';

                let s=document.getElementsByClassName('inactive')[0];
                s.setAttribute('class','active');
                let s1 = document.getElementsByClassName('active')[0];
             s1.setAttribute('class', 'inactive');
            }


             var productsList = JSON.parse(localStorage.getItem('productsList'))
       // products appending from the ojects


        function display(list) {
            let main = document.getElementsByClassName('product-elements');
            main = main[0];
            let i=1;
            
            list.forEach(function (ele) {
                if(i<4 && ele.category==single.category){
                let eleDiv = document.createElement('div');
                eleDiv.setAttribute('class', 'product-ele-div')

                let pcont = document.createElement('div');
                pcont.setAttribute('class', 'product-content')
                let imgDiv = document.createElement('div');
                imgDiv.setAttribute('class', 'product-img-div')
                imgDiv.style.backgroundImage = `url(${ele.url})`;

                let btn = document.createElement('button');
                btn.innerHTML = "QUICK VIEW";

                imgDiv.append(btn);

                let pcap = document.createElement('div');
                pcap.setAttribute('class', 'product-cap')
                let a = document.createElement('a');
                a.innerHTML = ele.name;

                let price = document.createElement('div');
                price.innerHTML = "$" + ele.price;
                price.setAttribute('class', 'price');

                pcap.append(a, price);

                pcont.append(imgDiv, pcap);

                eleDiv.append(pcont);

                imgDiv.onmouseenter = function () {
                    imgDiv.style.backgroundImage = `url(${ele.url2})`;
                    btn.style.display = "block";
                }
                imgDiv.onmouseleave = function () {
                    imgDiv.style.backgroundImage = `url(${ele.url})`;
                    btn.style.display = "none";
                }
                pcont.onclick = function () {
                    window.location.href = 'single-prod.html';
                    let one = [];
                    one.push(ele);
                    localStorage.setItem('one', JSON.stringify(one));
                }
                
                main.append(eleDiv);
                i++;
            }
            });
        }

        display(productsList);  

        function up(){
            let v = document.getElementById('count').value;
            v=Number(v);
                document.getElementById('count').value = v + 1;
        }
        function down() {
                let v = document.getElementById('count').value;
                v = Number(v);
                if (v > 1) {
                document.getElementById('count').value = v - 1;
            }
        }

    // -----------------header_cart----------
    function header_cart() {
        var cart_box = document.getElementById('cart-box')
        console.log("hello");
        cart_box.style.display = "block"
    }
    // -----------------------------lodded in username-------------------
        var users = JSON.parse(localStorage.getItem('users'))
        var login_user = document.getElementById('after-login')
        console.log(users);
        login_user.style.fontWeight = 700
        login_user.style.color = "black"
        login_user.style.fontSize = "10px"
        login_user.style.letterSpacing = "1px"
        login_user.style.fontFamily = "Open Sans, sans-serif"
        login_user.innerHTML = `<span>HELLO</span>,&nbsp;${users[0].firstname.toUpperCase()} &nbsp;${users[0].lastname.toUpperCase()}.&nbsp;`


        function addDiv1(){
            
            var cart_div = document.getElementById('item-added')
            var products = JSON.parse(localStorage.getItem('cart'))
            console.log(products);
            var quantity = 0;
            products.forEach(element => {
                if (element.name == products[0].name) {
                    quantity++;
                }
            });
            cart_div.innerHTML = `<div id="items-div-out">
                <div id="items-div-in">
                    <img src="${products[0].url}" alt="">
                    <p id="name-p">${products[0].name}</p>
                    <h4 id="price-h4">${"$ " + products[0].price}</h4>
                    <p id="quantity-p">${quantity}</p>
                    <h4 id="total-h4">${"$ " + products[0].price * quantity}</h4>

                </div>`
        }
        
        function view_cart(){
            window.location.href="your_cart.html"
        }