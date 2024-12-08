let loginbtn = document.getElementById("login_btn");
 let signUpPage = document.getElementById("signup");
 let logInPage = document.getElementById("login");
 let signupSubmit = document.getElementById("signupbtn");
 let signupbtn = document.getElementById("signup_btn");
 let loginSubmit=document.getElementById('loginbtn');

 loginbtn.addEventListener('click', (e) =>{
 signUpPage.style.display = 'none';
 logInPage.style.display = 'block';
 })

 signupbtn.addEventListener('click', (e) =>{
 signUpPage.style.display = 'block';
 logInPage.style.display = 'none';
 })

 signupSubmit.addEventListener('click', (e) => {
 let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;
 let firstname = document.getElementById('firstName').value;
 let lastname = document.getElementById('lastName').value;

  if( !email || !password || !firstname || !lastname){
    alert(" fill all values");
    return;
  }

 if(localStorage.getItem(email)){
 alert("User registered already");
 return;
 }

 let newuser = {firstname,lastname,password,email};

 localStorage.setItem(email,JSON.stringify(newuser));
//  localStorage.setItem(email,newuser);
 alert("New user Registered");
 loginbtn.click();
 })

 // for --> login page

 loginSubmit.addEventListener('click',(e) => {

      e.preventDefault();

    let email = document.getElementById('email_login').value;
    let password = document.getElementById('password_login').value;
    let savedPassword =  localStorage.getItem(email); 

    if( !email || !password ){
        alert(" fill all values");
        return;
      }
    
     if( !(savedPassword == password)){
          alert('wrong combination of email and password');
          return;
     }
     alert( 'User succesfully logged In! ' );
     localStorage.setItem("isLoggedIn",email);
     window.location.href = "landing.html";

 })