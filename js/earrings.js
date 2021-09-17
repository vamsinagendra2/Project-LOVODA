 // filter divs hide and show
    var i = 0;
    function show(a) {
        var div = document.getElementsByClassName('filter-list');
        var plus = document.getElementsByClassName('+');
        if (i % 2 == 0) {
            div[a].style.display = 'block';
            plus[a].innerHTML = "-";
            i++;
        } else {
            div[a].style.display = 'none';
            plus[a].innerHTML = "+";
            i++;
        }
    }
    show(0);
    show(1);
    show(2);

    

    // products appending from the ojects

    productsList = JSON.parse(localStorage.getItem('productsList'));


    function display(list) {
        let main = document.getElementsByClassName('product-elements');
        main = main[0];
        let i = 1;

        list.forEach(function (ele) {
            if(ele.category=="earrings" && i <16){
            let eleDiv = document.createElement('div');
            eleDiv.setAttribute('class', 'product-ele-div')

            let pcont = document.createElement('div');
            pcont.setAttribute('class', 'product-cont')
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

    

    function sort() {
        let main = document.getElementsByClassName('product-elements');
        main = main[0];
        main.innerHTML = "";
        let op = document.getElementById('sort').value;
        let prod = JSON.parse(localStorage.getItem('productsList'));
        if (op == "priceasc") {
            prod = prod.sort(function (a, b) {
                return a.price - b.price;
            });
            display(prod);
        }
        if (op == "pricedesc") {
            prod = prod.sort(function (a, b) {
                return b.price - a.price;
            });
            display(prod);
        }
        if (op == "alphaasc") {
            prod = prod.sort(function (a, b) {
                return a.name - b.name;
            });
            display(prod);
        }
        if (op == "alphadesc") {
            prod = prod.sort(function (a, b) {
                return b.name - a.name;
            });
            display(prod);
        } else {
            display(prod);
        }

    }

    let arr = [];

    function colorGold() {
        let main = document.getElementsByClassName('product-elements');
        main = main[0];
        main.innerHTML = "";
        let prod = JSON.parse(localStorage.getItem('productsList'));

        prod = prod.filter(function (a) {
            if (a.color == "Gold" ) {
                arr.push(a);
            }
        });
        display(arr);
        let div = document.getElementsByClassName('filter-space-div')[0];
        div.style.display = "none";
    }
    function colorBlack() {
        let main = document.getElementsByClassName('product-elements');
        main = main[0];
        main.innerHTML = "";
        let prod = JSON.parse(localStorage.getItem('productsList'));
        prod = prod.filter(function (a) {
            if (a.color == "Black") {
                arr.push(a);
            }
        });
        display(arr);

        let div = document.getElementsByClassName('filter-space-div')[0];
        div.style.display = "none";
    }
    function colorClear() {
        let main = document.getElementsByClassName('product-elements');
        main = main[0];
        main.innerHTML = "";
        let prod = JSON.parse(localStorage.getItem('productsList'));
        prod = prod.filter(function (a) {
            if (a.color == "Clear") {
                arr.push(a);
            }
        });
        display(arr);
        let div = document.getElementsByClassName('filter-space-div')[0];
        div.style.display = "none";
    }

    function mat14k() {
        let main = document.getElementsByClassName('product-elements');
        main = main[0];
        main.innerHTML = "";
        let prod = JSON.parse(localStorage.getItem('productsList'));
        prod = prod.filter(function (a) {
            if (a.material == "14k Gold Plating") {
                arr.push(a);
            }
        });
        display(arr);
        let div = document.getElementsByClassName('filter-space-div')[0];
        div.style.display = "none";
    }
    function matSilver() {
        let main = document.getElementsByClassName('product-elements');
        main = main[0];
        main.innerHTML = "";
        let prod = JSON.parse(localStorage.getItem('productsList'));
        prod = prod.filter(function (a) {
            if (a.material == "Sterling Silver Post") {
                arr.push(a);
            }
        });
        display(arr);
        let div = document.getElementsByClassName('filter-space-div')[0];
        div.style.display = "none";
    }
    function price() {
        let main = document.getElementsByClassName('product-elements');
        main = main[0];
        main.innerHTML = "";
        let min = Number(document.getElementById('min').value);
        let max = Number(document.getElementById('max').value);

        let prod = JSON.parse(localStorage.getItem('productsList'));
        let pricearr = [];
        console.log(min, max)
        prod = prod.filter(function (a) {
            let p = Number(a.price);
            if (p >= min && p <= max) {
                pricearr.push(a);
            }
        });
        console.log(pricearr)
        display(pricearr);
        let div = document.getElementsByClassName('filter-space-div')[0];
        div.style.display = "none";
    }
