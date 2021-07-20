

// Carousel

const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')
let counter = 1
var size = 1220
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; // will show second set of 4 slides when refreshed


// previous button to show previous 4 slides

function prev(){
    if(counter >= 3) return
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// next button to show next 4 slides

function frd(){
    if(counter<=0) return
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// End of Carousel


// Stick Navigation bar
window.addEventListener("scroll",function(){
    var header = document.querySelector('.whole-div')
    header.classList.toggle("sticky", window.scrollY > 275);
})
//end of sticky nav bar



// search bar clicked


function search() {
    var element = document.getElementById("search");
  
  
      element.classList.toggle("mystyle");
    var input = document.createElement("input");

    input.classList.toggle('input')
    var btn = document.createElement('button')
    input.placeholder = "Search";
    var iTag = document.createElement('i')
    iTag.innerHTML = '<i class="fa fa-search"></i>'
    iTag.style.color = "black"
    iTag.style.cursor = "pointer"
    iTag.addEventListener('click', function(){
        window.location.href ="#"   // product link to be searched manually
    })
    btn.innerHTML = "&#215"
    btn.setAttribute('class',"btn")
    element.append(btn,input,iTag)
    btn.addEventListener('click', function(){
        element.remove()          
    })
}


/// login popup


const open = document.getElementById('login-popup')
const modal_container = document.querySelector('.modal-container')
const close = document.querySelector('fa fa-times')

function loginModal(){
    modal_container.classList.add('showModal');
}

function closeModal(){
    modal_container.classList.remove('showModal');
}

function register(e) {
    e.preventDefault()
    window.location.href = "register.html"
    console.log("hello")
}
function login(e) {
    e.preventDefault()
    
    var users = JSON.parse(localStorage.getItem('users'))
    console.log(users)

    var username = document.getElementById('email-login').value
    var password = document.getElementById('password-login').value
   
     var c = 0;
    for (i = 0; i < users.length; i++){
        
        if (users[i].email == username && users[i].password == password) {
            c++
            window.location.href="loggedin-home-page.html"
        }
        
    }
    if (c == 0) {
        alert("Invalid")
    }
}


// ------------------logged in home


var users = JSON.parse(localStorage.getItem('users'))
var login_user = document.getElementById('after-login')
login_user.style.fontWeight = 700
login_user.style.color = "black"
login_user.style.fontSize = "10px"
login_user.style.letterSpacing="1px"
login_user.style.fontFamily="Open Sans, sans-serif"
login_user.innerHTML = `<span>HELLO</span>,&nbsp;${users[0].firstname.toUpperCase()} &nbsp;${users[0].lastname.toUpperCase()}.&nbsp;`


// -----------------cart----------
function header_cart() {
    var cart_box = document.getElementById('cart-box')
    console.log(cart_box);
    cart_box.style.display = "block"
}

