const Validate = () => {
  // pick inputs
  let fullName = document.getElementById("fullName");
  let nin = document.getElementById("nin");
  let phoneNumber = document.getElementById("phoneNumber");
  let female = document.getElementById("female");
  let male = document.getElementById("male");

  let dateOfBirth = document.getElementById("dateOfBirth");
  let residenceType = document.getElementById("residenceType");

  let ward = document.getElementById("ward");

  let uniqueId = document.getElementById("uniqueId");

  let activities = document.getElementById("activities");
  let directions = document.getElementById("directions");
  let dateOfRegistration = document.getElementById("dateOfRegistration");

  let periodOfStay = document.getElementById("periodOfStay");
  // pick error sections
  let fullNameError = document.getElementById("fullNameError");
  let ninError = document.getElementById("ninError");
  let phoneNumberError = document.getElementById("phoneNumberError");

  let genderError = document.getElementById("genderError");
  let dateOfBirthError = document.getElementById("dateOfBirthError");
  let residenceTypeError = document.getElementById("residenceType");

  let wardError = document.getElementById("wardError");
  let uniqueIdError = document.getElementById("uniqueIdError");

  let activitiesError = document.getElementById("activitiesError");
  let directionsError = document.getElementById("directionsError");
  let dateOfRegistrationError = document.getElementById(
    "dateOfregistrationError"
  );

  let periodOfStayError = document.getElementById("periodOfStayError");

  // validating first name input emptiness
  if (fullName.value == "") {
    fullName.style.border = "1px solid red";
    fullNameError.innerHTML = "Please full name can not be empty";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    
    return false;
  }
  // validating first name for minimum length
  else if (fullName.value.length < 5) {
    fullName.style.border = "1px solid red";
    fullNameError.innerHTML = "Please full name must be atleast 5 letters";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    
    return false;
  }
  // validating first name for maximum length
  else if (fullName.value.length > 50) {
    fullName.style.border = "1px solid red";
    fullNameError.innerHTML = "Please full  name must be less than 50 letters";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    
    return false;
  } else {
    fullName.style.border = "1px solid green";
    fullNameError.innerHTML = "";
  }

  // validating nin input

  if (nin.value == '') {
    nin.style.border = "1px solid red";

    ninError.innerHTML = "NIN is required.";
    ninError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    
    return false;
  } else if (!nin.value.match(/^[A-Z]{2}\d{8}[A-Z]$/)) {
    nin.style.border = "1px solid red";

    ninError.innerHTML =
      "Please enter a valid Ugandan National Identification Number (e.g. CM12345678D).";
    ninError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    
    return false;
  } else {
    nin.style.border = "1px solid green";

    ninError.innerHTML = "";

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

  // gender validations
  if (female.checked == false && male.checked == false) {
    genderError.innerHTML = "Please select gender";
    genderError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    
    return false;
  } else {
    phoneNumber.style.border = "1px solid green";

    genderError.innerHTML = "";
  }

  if (dateOfBirth.value == "") {
    dateOfBirthError.innerHTML = "please enter date of birth";
    dateOfBirthError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    dateOfBirthError.innerHTML = "";
  }

  
  if (residenceType.value == "") {
    residenceType.style.border = "1px solid red";
    residenceTypeError.innerHTML = "Please residenceType name can not be empty";
    residenceTypeError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    
    return false;
  }
  // validating first name for minimum length
  else if (residenceType.value.length < 3) {
    residenceType.style.border = "1px solid red";
    residenceTypeError.innerHTML = "Please the residenceType name must be atleast 3 letters";
    residenceTypeError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    
    return false;
  }
  // validating first name for maximum length
  else if (residenceType.value.length > 50) {
    residenceType.style.border = "1px solid red";
    residenceTypeError.innerHTML = "Please the residenceType  name must be less than 50 letters";
    residenceTypeError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    
    return false;
  } else {
    residenceType.style.border = "1px solid green";
    residenceTypeError.innerHTML = "";
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

  // unique number validations
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

  if (activities.value == "") {
    activitiesError.innerHTML = "please enter activities";
    activitiesError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    activitiesError.innerHTML = "";
    activities.style.border = "1px solid green";
  }
  if (directions.value == "") {
    directionsError.innerHTML = "please enter directions";
    directionsError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    directionsError.innerHTML = "";
    directions.style.border = "1px solid green";
  }

  if (dateOfRegistration.value == "") {
    dateOfRegistrationError.innerHTML = "please enter date of registration";
    dateOfRegistrationError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    dateOfRegistrationError.innerHTML = "";
  }

  if (periodOfStay.value <= 10) {
    periodOfStayError.innerHTML =
      "the farmer should have stayed here for more than 10years";
    periodOfStayError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    periodOfStayError.innerHTML = "";
  }


};
