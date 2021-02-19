// Display User Data with the Alert. Also Make sure the user enters the data.
let showUserData = () => {
  let ssn = document.getElementById("ssn").value;
  let dob = document.getElementById("dateOfBirth").value;

  if (ssn == '' || dob == '') {
    alert(`Please enter both your SSN and DOB!`);
  } else {
    alert(`Your last 4 digits of your Social Security Number is ${ssn} and Date of Birth is ${dob}.`);
  }

}

// When user clicks on the input field, change the color of the button
let switchBgColor = document.getElementById('ssn');
switchBgColor.addEventListener('click', hoverChange);

// This function handles the hover changes
function hoverChange() {
  let btn = document.querySelector('.btn-submit');
  btn.style.cssText = 'background-color: #a8c369; box-shadow: -1px 5px 0px 0px rgba(0,0,0,0.5); cursor: pointer;';
}
