function generateUniqueNumber() {
    const unregex = /^FO-([0-9]{3})+$/;
    let randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    let uniqueNumber = "FO-" + randomNumber.toString().padStart(3, "0"); // Pad the number with leading zeros if necessary
    while (!unregex.test(uniqueNumber)) { // Check if the number already exists
      randomNumber = Math.floor(Math.random() * 1000);
      uniqueNumber = "FO-" + randomNumber.toString().padStart(3, "0");
    }
    return uniqueNumber;
  }
  

// Get a reference to the button element
const button = document.getElementById('generate-button');

// Add an event listener to the button
button.addEventListener('click', () => {
  // Call the function to generate the random number
  const uniqueNumber = generateUniqueNumber();
  
  // Display the random number on the page
 
  document.getElementById("uniqueId").value = uniqueNumber;

});

const currentDate = new Date().toISOString().substr(0, 10);
document.getElementById("currentDate").value = currentDate;