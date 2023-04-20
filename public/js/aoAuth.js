
const Validate = () => {
   



// picking values

let fullName= document.getElementById('fullName')
let uniqueId= document.getElementById('uniqueId')
let ward= document.getElementById('ward')
let username= document.getElementById('username')
let password= document.getElementById('password')
let confirmPassword= document.getElementById('confirmPassword')







    // picking errors
let fullNameError= document.getElementById('fullNameError')
let uniqueIdError= document.getElementById('uniqueIdError')
let wardError= document.getElementById('wardError')
let usernameError= document.getElementById('usernameError')
let passwordError= document.getElementById('passwordError')
let confirmPasswordError= document.getElementById('confirmPasswordError')


// validating first name input emptiness
if (fullName.value == "") {
    fullName.style.border = "1px solid red";
    fullNameError.innerHTML = "Please farmer one name can not be empty";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  }
  // validating first name for minimum length
  else if (fullName.value.length < 5) {
    fullName.style.border = "1px solid red";
    fullNameError.innerHTML =
      "Please the farmer one name must be atleast 3 letters";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  }
  // validating first name for maximum length
  else if (fullName.value.length > 50) {
    fullName.style.border = "1px solid red";
    fullNameError.innerHTML =
      "Please the farmer one  name must be less than 11 letters";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    fullName.style.border = "1px solid green";
    fullNameError.innerHTML = "";
  }
  
  if (ward.value == "") {
    ward.style.border = "1px solid red";
    wardError.innerHTML = "Please ward name can not be empty";
    wardError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  }
  // validating first name for minimum length
  else if (ward.value.length < 3) {
    ward.style.border = "1px solid red";
    wardError.innerHTML = "Please the ward name must be atleast 3 letters";
    wardError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  }
  // validating first name for maximum length
  else if (ward.value.length > 50) {
    ward.style.border = "1px solid red";
    wardError.innerHTML = "Please the ward  name must be less than 50 letters";
    wardError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    ward.style.border = "1px solid green";
    wardError.innerHTML = "";
  }
  const unregex = /^AO-([0-9]{3})+$/;
  const ufregex = /^UF-([0-9]{3})+$/;
  const foregex = /^FO-([0-9]{3})+$/;
  if (uniqueId.value == "") {
    uniqueId.style.border = "1px solid red";
    uniqueIdError.innerHTML = "Unique number is required";
    uniqueIdError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else if (
    !(
      uniqueId.value.match(unregex) ||
      uniqueId.value.match(ufregex) ||
      uniqueId.value.match(foregex)
    )
  ) {
    uniqueId.style.border = "1px solid red";
    uniqueIdError.innerHTML = "Unique number must follow this formart AO-000";
    uniqueIdError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    uniqueId.style.border = "1px solid green";
    uniqueIdError.innerHTML = "";
  }

  if (username.value == "") {
    username.style.border = "1px solid red";
    usernameError.innerHTML = "Please username name can not be empty";
    usernameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  }
  // validating first name for minimum length
  else if (username.value.length < 3) {
    username.style.border = "1px solid red";
    usernameError.innerHTML = "Please the username name must be atleast 3 letters";
    usernameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  }
  // validating first name for maximum length
  else if (username.value.length > 50) {
    username.style.border = "1px solid red";
    usernameError.innerHTML = "Please the username  name must be less than 50 letters";
    usernameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    username.style.border = "1px solid green";
    usernameError.innerHTML = "";
  }

  if (password.value == "") {
    password.style.border = "1px solid red";
    passwordError.innerHTML = "Please password name can not be empty";
    passwordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  }
  // validating first name for minimum length
  else if (password.value.length < 3) {
    password.style.border = "1px solid red";
    passwordError.innerHTML = "Please the password name must be atleast 3 letters";
    passwordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  }
  // validating first name for maximum length
  else if (password.value.length > 50) {
    password.style.border = "1px solid red";
    passwordError.innerHTML = "Please the password  name must be less than 50 letters";
    passwordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    password.style.border = "1px solid green";
    passwordError.innerHTML = "";
  }

  if (confirmPassword.value == ''){
    confirmPassword.style.border = "1px solid red";
    confirmPasswordError.innerHTML = "Please confirmPassword name can not be empty";
    confirmPasswordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  }
  else if (password.value !== confirmPassword.value) {
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid red";
    passwordError.textContent = "Passwords do not match";
    confirmPasswordError.textContent = "Passwords do not match";
    return false;
  }
else{
  // The passwords match
  password.style.border = "1px solid green";
  confirmPassword.style.border = "1px solid green";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
}




  
};


