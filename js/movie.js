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