let display = document.getElementById("landing");
let email = localStorage.getItem("isLoggedIn");
let password = localStorage.getItem(email);
display.innerHTML = ` <h1> Hi, Your email is "${email}" </h1>
<h1> your password is ****${password}****`

function logout(){
    localStorage.removeItem("isLoggedIn");
    alert('Logged out successfully!');
    window.location.href="index.html";
}