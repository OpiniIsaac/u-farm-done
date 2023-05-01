productName.style.border = "1px solid red";
const Validate = () => {
    // pick inputs
    let productName = document.getElementById("productName");
 
    let phoneNumber = document.getElementById("phoneNumber");
   
  
    let dateOfBirth = document.getElementById("dateOfBirth");
    let residenceType = document.getElementById("residenceType");
  
    let ward = document.getElementById("ward");
  
    let uniqueId = document.getElementById("uniqueId");
  
    let activities = document.getElementById("activities");
    let directions = document.getElementById("directions");
    let dateOfRegistration = document.getElementById("dateOfRegistration");
  
    let periodOfStay = document.getElementById("periodOfStay");
    // pick error sections
    let productNameError = document.getElementById("productNameError");
    let ninError = document.getElementById("ninError");
    let phoneNumberError = document.getElementById("phoneNumberError");
  
    let genderError = document.getElementById("genderError");
    let dateOfBirthError = document.getElementById("dateOfBirthError");
    let residenceTypeError = document.getElementById("residenceTypeError");
  
    let wardError = document.getElementById("wardError");
    let uniqueIdError = document.getElementById("uniqueIdError");
  
    let activitiesError = document.getElementById("activitiesError");
    let directionsError = document.getElementById("directionsError");
    let dateOfRegistrationError = document.getElementById(
      "dateOfregistrationError"
    );
  
    let periodOfStayError = document.getElementById("periodOfStayError");
  
    // validating first name input emptiness
    if (productName.value == "") {
      productName.style.border = "1px solid red";
      fullNameError.innerHTML = "Please full name can not be empty";
      fullNameError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      
      return false;
    }
    // validating first name for minimum length
    else if (productName.value.length < 5) {
      productName.style.border = "1px solid red";
      productNameError.innerHTML = "Please full name must be atleast 5 letters";
      productNameError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      
      return false;
    }
    // validating first name for maximum length
    else if (productName.value.length > 50) {
      productName.style.border = "1px solid red";
      productNameError.innerHTML = "Please full  name must be less than 50 letters";
      productNameError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      
      return false;
    } else {
      productName.style.border = "1px solid green";
      productNameError.innerHTML = "";
    }
    if (ward.value == "") {
        ward.style.border = "1px solid red";
        wardError.innerHTML = "Please ward name can not be empty";
        wardError.style =
          "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        
        return false;
      }
     else {
        ward.style.border = "1px solid green";
        wardError.innerHTML = "";
      }
 
 
  
    //validation for phone number
    if (phoneNumber.value == "") {
      phoneNumber.style.border = "1px solid red";
  
      phoneNumberError.innerHTML = "Phone number is required.";
      phoneNumberError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      
      return false;
    } else if (!phoneNumber.value.match(/^(\+256|0)\d{9}$/)) {
      phoneNumber.style.border = "1px solid red";
  
      phoneNumberError.innerHTML =
        "Please enter a valid Ugandan phone number (e.g. +256771234567 or 0777123456).";
      phoneNumberError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      
      return false;
    } else {
      phoneNumber.style.border = "1px solid green";
  
      phoneNumberError.innerHTML = "";
  
    }
  
  
  
   
    

    
    if (ward.value == "") {
      ward.style.border = "1px solid red";
      wardError.innerHTML = "Please ward name can not be empty";
      wardError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      
      return false;
    }
   else {
      ward.style.border = "1px solid green";
      wardError.innerHTML = "";
    }
  
  
 
  
 
  
  
  
  
  };
  