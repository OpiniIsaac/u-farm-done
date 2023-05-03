function toggleSignup(){
    document.getElementById("login-toggle").style.backgroundColor="#fff";
     document.getElementById("login-toggle").style.color="#222";
     document.getElementById("signup-toggle").style.backgroundColor="#57b846";
     document.getElementById("signup-toggle").style.color="#fff";
     document.getElementById("login-form").style.display="none";
     document.getElementById("signup-form").style.display="block";
 }
 
 function toggleLogin(){
     document.getElementById("login-toggle").style.backgroundColor="#57B846";
     document.getElementById("login-toggle").style.color="#fff";
     document.getElementById("signup-toggle").style.backgroundColor="#fff";
     document.getElementById("signup-toggle").style.color="#222";
     document.getElementById("signup-form").style.display="none";
     document.getElementById("login-form").style.display="block";
 }
 
 const Validate =()=>{
    let username = document.getElementById('username')

    let usernameError = document.getElementById('usernameError')
    if (username.value == "") {
        username.style.border = "1px solid red";
        usernameError.innerHTML = "Please username can not be empty";
        usernameError.style =
          "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        
        return false;
      }
      // validating first name for minimum length
      else if (username.value.length < 5) {
        username.style.border = "1px solid red";
        usernameError.innerHTML = "Please username must be atleast 5 letters";
        usernameError.style =
          "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        
        return false;
      }
      // validating first name for maximum length
      else if (username.value.length > 50) {
        username.style.border = "1px solid red";
        usernameError.innerHTML = "Please username  must be less than 50 letters";
        usernameError.style =
          "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        
        return false;
      } else {
        username.style.border = "1px solid green";
        usernameError.innerHTML = "";
      }

 }
 

 const ValidateSign =()=>{
    let username = document.getElementById('username')

    let usernameError = document.getElementById('usernameError')
    if (username.value == "") {
        username.style.border = "1px solid red";
        usernameError.innerHTML = "Please username can not be empty";
        usernameError.style =
          "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        
        return false;
      }
      // validating first name for minimum length
      else if (username.value.length < 5) {
        username.style.border = "1px solid red";
        usernameError.innerHTML = "Please username must be atleast 5 letters";
        usernameError.style =
          "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        
        return false;
      }
      // validating first name for maximum length
      else if (username.value.length > 50) {
        username.style.border = "1px solid red";
        usernameError.innerHTML = "Please username  must be less than 50 letters";
        usernameError.style =
          "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        
        return false;
      } else {
        username.style.border = "1px solid green";
        usernameError.innerHTML = "";
      }

 }
 