var check = 0

function login() {
    if (check == 1) {
        window.location.replace(href="home.html")
    }
    else {
        window.location.replace(href="login.html")
    }
}

function acessar() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if (user == "1234" && password =="1234") {
        var check = 1
        window.location.replace(href="home.html")
    }
    else{
        window.location.replace(href="login.html")
    }

if (check == 1){
    var container = document.getElementById("user-conected");
    container.innerHTML = "user1924";
}
else {

}
    
}