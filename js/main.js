const formInput = document.querySelector('.form');
const displayStrong = document.getElementById('captured-email');
const emailInput = document.getElementById('sign-in-email');
const errorContainer = document.getElementById('email-error');
const inputs = document.querySelectorAll('input');
const forms =document.querySelector(".field-group");

// inert and success 
const imageContent = document.querySelector('.image-container');
const formContent = document.querySelector('.form-container');
const successHeading = document.getElementById('success-heading');



// Immediately fires upon page loading, ensures 'has-error' class has been removed. 
inputs.forEach((input) => {
  input.addEventListener('input', () => {
  forms.classList.remove('has-error');
  });
});

// -----------------
// Validation function - uses validity.valid check 
// if true, remove aria-invalid and hide errorContainer and return true
// if false (i.e. not true)
// check if error message is present, set aria-invalid to true error hidden to false and return false
function validateEmail() {
  const validity = emailInput.validity;

  // set customValidity message
  emailInput.setCustomValidity('');

  if (validity.valid) {
    emailInput.removeAttribute('aria-invalid');
    errorContainer.textContent = '';
    errorContainer.hidden = true;
    return true;
  }

  // check if error message is present
  // ensure if error message from html does not appear this message will appear
  // This can happen if multiple user errors and screen does not re-load
   if (!errorContainer.textContent) {
      emailInput.setCustomValidity("Valid email required")
      errorContainer.textContent = emailInput.validationMessage;
    }

  emailInput.setAttribute('aria-invalid', 'true');
  errorContainer.hidden = false;
  return false;
}

// ----------------------------------
// Fires when submit button clicked
// uses checkValidity method
// if false add class list false
// if true
//  set inert so screen readers do not read images or form page
//  make success screen active
// remove / ensure any has-error message/settings removes
// capture email input and add to success page message
document.getElementById('signup-form').addEventListener('submit', function (e) {
 
e.preventDefault(); // Stop form submission
  if (!emailInput.checkValidity()) {
      forms.classList.add('has-error');
  } else {
      // Freeze background interaction & screen reader access
      imageContent.inert = true;
      formContent.inert = true;

      successView.classList.add('active');
      successHeading.focus();
      forms.classList.remove('has-error');
      const usernameValue = e.target.elements.email.value;
       // Inject it into the span inside the sentence
      displayStrong.textContent = usernameValue;
  }
});

// ---------------------------------
// While user is in email input prevents constant error message
emailInput.blur();


// Submit handler for check validation -----------------------------
// calls validEmail function
// if false calls focus() and place user cursor in email field
formInput.addEventListener('submit', (event) => {
  event.preventDefault();
  const isEmailValid = validateEmail();
  if (!isEmailValid) {
    emailInput.focus();
  }
});

// ---------------------------------------
// Fires when "dismiss" is clicked on success page
// Hide success message & restore background
// removes inerts so screen reader can read main page
function resetForm() {
  formInput.reset();
  successView.classList.remove('active');
  imageContent.inert = false;
  formContent.inert = false;
}

