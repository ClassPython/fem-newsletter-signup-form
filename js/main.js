// const form = document.querySelector('.main-container');
const formInput = document.querySelector('.form');
 const displayStrong = document.getElementById('captured-email');
// const successView = document.getElementById('successView');


document.getElementById('signup-form').addEventListener('submit', function (e) {
  const input = document.getElementById('sign-in-email');
  const group = input.closest('.field-group');
  // const group = input.closest('.form-label');
  
  if (!input.checkValidity()) {
    e.preventDefault(); // Stop form submission
    // console.log("top", input.checkValidity())
    // console.log("class list", group)
    group.classList.add('has-error');
    // input.classList.add('has-error');
  } else {
    e.preventDefault(); // Stop form submission
      // successView.classList.add('active');
      group.classList.remove('has-error');
      const usernameValue = e.target.elements.email.value;
      // console.log('target',usernameValue )
       // Inject it into the span inside the sentence
      displayStrong.textContent = usernameValue;
    //   console.log("top", input.checkValidity())   
  }
});



// const inputs = document.querySelector(".form-label");
// const inputs = form.querySelectorAll('input');
// const forms =document.querySelector(".field-group");

// inputs.forEach((input) => {
  // input.addEventListener('input', () => {
    // input.classList.remove('error');
    // input.classList.remove('active');
    // forms.classList.remove('has-error');
    // console.log('bottom', input, forms)
  // });
// });


// Remove the error class and ARIA state

// document.querySelectorAll('.field-group').forEach((input) => {
//   input.addEventListener('input', () => {
//     const field = input.closest('.field-group');
//     console.log("hello", input)
    
//     field.classList.remove('has-error');
//     input.removeAttribute('aria-invalid');
//   });
// });


// const form = document.getElementById('myForm');
// const form = document.querySelector('.main-container');
// const successView = document.getElementById('successView');

// form.addEventListener('submit', function(e) {
//   e.preventDefault(); // Stop normal form submission

//   Optional: Send data via fetch() or AJAX here first...

//   Show the full-screen mobile success message
//   successView.classList.add('active');
// });


// ? ========================================
// const form = document.getElementById('signup-form');
// const emailInput = document.getElementById('email');
// const errorContainer = document.getElementById('email-error');
const form = document.querySelector('.form');
const emailInput = document.getElementById('sign-in-email');
const errorContainer = document.getElementById('email-error');

function validateEmail() {
  const validity = emailInput.validity;

  if (validity.valid) {
    emailInput.removeAttribute('aria-invalid');
    errorContainer.textContent = '';
    errorContainer.hidden = true;
    return true;
  }

  // let message = '';
  // if (validity.valueMissing) {
  //   message = 'Enter an email address.';
  // } else if (validity.typeMismatch) {
  //   message = 'Enter a valid email address, like name@example.com.';
  // }

  emailInput.setAttribute('aria-invalid', 'true');
  // errorContainer.textContent = message;
  errorContainer.hidden = false;
  return false;
}

// Validate when the user leaves the field
// emailInput.addEventListener('blur', validateEmail);
// document.activeElement.blur()
// document.emailInput.blur()
emailInput.blur()

// Re-validate while typing only if an error is already displayed
emailInput.addEventListener('input', () => {
  if (emailInput.getAttribute('aria-invalid') === 'true') {
    validateEmail();
  }
});



// const inputs = document.querySelector(".form-label");
const inputs = form.querySelectorAll('input');
const forms =document.querySelector(".field-group");

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    // input.classList.remove('error');
    // input.classList.remove('active');
    forms.classList.remove('has-error');
    // console.log('bottom', input, forms)
  });
});


// Validate on form submission and move focus to the invalid field
form.addEventListener('submit', (event) => {
  const isEmailValid = validateEmail();

  if (!isEmailValid) {
    event.preventDefault();
    emailInput.focus();
  }
});





// ? ==========================================

// reset the input area
// function resetForm() {
      // formInput.reset();
    // successView.classList.remove('active');
// }

