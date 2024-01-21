const input = "Hello, World!";
const logStringCallback = manipulateString(input);

function manipulateString(inputString) {
    const manipulatedString = inputString.toUpperCase();
  
    function logString() {
      console.log("The manipulated string is: " + manipulatedString);
    }
    return logString;
  }

  logStringCallback();
  