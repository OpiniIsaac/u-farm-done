productName.style.border = "1px solid red";
const Validate = () => {
    // pick inputs
    let productName = document.getElementById("productName");
 
    let phoneNumber = document.getElementById("phoneNumber");
   
  
    let date = document.getElementById("date");
    let residenceType = document.getElementById("residenceType");
  
    let ward = document.getElementById("ward");
  
    let unitPrice = document.getElementById("unitPrice");
  
    let quantity = document.getElementById("quantity");
    let payment = document.getElementById("payment");
    let directions = document.getElementById("directions");
  
    let delivery = document.getElementById("delivery");
    
    let produceType= document.getElementById("produceType");

    // pick error sections
    let productNameError = document.getElementById("productNameError");
    let productimageError = document.getElementById("productimageError");
    let phoneNumberError = document.getElementById("phoneNumberError");
  
    // let wardError = document.getElementById("wardError");
    // let date = document.getElementById("date");
    let unitPriceError = document.getElementById("unitPriceError");
  
    let wardError = document.getElementById("wardError");
    let quantityError = document.getElementById("quantityError");
  
    let paymentError = document.getElementById("paymentError");
    let directionsError = document.getElementById("directionsError");
    let deliveryError = document.getElementById(
      "deliveryError"
    );
  
    let produceTypeError = document.getElementById("produceTypeError");
  
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
  