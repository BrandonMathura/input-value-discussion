// Set the variables that are needed for our functionality.
var userInputBox = document.querySelector("#user-name");
var submitUserInput = document.querySelector('#submit-user-name');
var outputContainer = document.querySelector('#user-name-output');

// Check to make sure elements exist before targeting them.
if (userInputBox && submitUserInput && outputContainer)
submitUserInput.addEventListener('click', function() {
  // Capture the value of the input element and store it as a variable.
  var userName = userInputBox.value;
  // var outputMessage = 'Welcome ' + userName + "!";
  // Dynamically build a string message based on user input
  var outputMessage = 'Welcome ';
  outputMessage += userName;
  outputMessage += '!';
  // Put the output message in the paragraph element to display it on the page 
  outputContainer.textContent = outputMessage;
});
