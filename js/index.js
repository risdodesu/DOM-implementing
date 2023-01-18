// submit Contact Us
function popSubmit(){
alert ("Thanks for your comments!");
}

document.getElementById("submit").onmouseover = () => {
    document.getElementById("submit").style.backgroundColor = 'green'
}

document.getElementById("submit").onmouseout = () => {
    document.getElementById("submit").style.backgroundColor = '#0d6efd'
}

// login
let username = document.getElementById("user");
let password = document.getElementById("pass");

function validateLogin(){
    if (!username.value || !password.value) {
        alert ("Field tidak boleh ada yang kosong!");
    }else{
        alert(`Welcome ${username.value} happy watching!`);
        window.location.href = "index.html"
    }
}

// Parallax 1
document.getElementsByTagName("h1")[0].onmouseover = () => {
    document.getElementsByTagName("h1")[0].style.transition = "300ms ease"
    document.getElementsByTagName("h1")[0].style.scale = "1.1"
    document.getElementsByTagName("h1")[0].style.display = "flex"
    document.getElementsByTagName("h1")[0].style.letterSpacing = "5px"
}
document.getElementsByTagName("h1")[0].onmouseout = () => {
    document.getElementsByTagName("h1")[0].style.transition = "300ms ease"
    document.getElementsByTagName("h1")[0].style.scale = "1"
    document.getElementsByTagName("h1")[0].style.letterSpacing = "0px"
}

// Parallax 2
document.getElementsByTagName("h1")[1].onmouseover = () => {
    document.getElementsByTagName("h1")[1].style.transition = "300ms ease"
    document.getElementsByTagName("h1")[1].style.scale = "1.1"
    document.getElementsByTagName("h1")[1].style.display = "flex"
    document.getElementsByTagName("h1")[1].style.letterSpacing = "5px"
}
document.getElementsByTagName("h1")[1].onmouseout = () => {
    document.getElementsByTagName("h1")[1].style.transition = "300ms ease"
    document.getElementsByTagName("h1")[1].style.scale = "1"
    document.getElementsByTagName("h1")[1].style.letterSpacing = "0px"
}

// Parallax 3
document.getElementsByTagName("h1")[2].onmouseover = () => {
    document.getElementsByTagName("h1")[2].style.transition = "300ms ease"
    document.getElementsByTagName("h1")[2].style.scale = "1.1"
    document.getElementsByTagName("h1")[2].style.display = "flex"
    document.getElementsByTagName("h1")[2].style.letterSpacing = "5px"
}
document.getElementsByTagName("h1")[2].onmouseout = () => {
    document.getElementsByTagName("h1")[2].style.transition = "300ms ease"
    document.getElementsByTagName("h1")[2].style.scale = "1"
    document.getElementsByTagName("h1")[2].style.letterSpacing = "0px"
}