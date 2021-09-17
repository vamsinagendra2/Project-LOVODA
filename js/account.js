   // login
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
    

    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    console.log(password)
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