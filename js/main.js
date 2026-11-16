const formInput = document.querySelector('.form');
const displayStrong = document.getElementById('captured-email');

document.getElementById('signup-form').addEventListener('submit', function (e) {
  const input = document.getElementById('sign-in-email');
  const group = input.closest('.field-group');
  
  if (!input.checkValidity()) {
    e.preventDefault(); // Stop form submission
    console.log("top", input.checkValidity())
    group.classList.add('has-error');
  } else {
    e.preventDefault(); // Stop form submission
      successView.classList.add('active');
      group.classList.remove('has-error');
      const usernameValue = e.target.elements.email.value;
       // Inject it into the span inside the sentence
      displayStrong.textContent = usernameValue;
  }
});

//  -------------------------------
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

  emailInput.setAttribute('aria-invalid', 'true');
  errorContainer.hidden = false;
  return false;
}

// ------------------------------------

// Validate when the user leaves the field
emailInput.blur()


// -----------------------------------------

// Re-validate while typing only if an error is already displayed
emailInput.addEventListener('input', () => {
  if (emailInput.getAttribute('aria-invalid') === 'true') {
    validateEmail();
  }
});


// --------------------------------------------

const inputs = form.querySelectorAll('input');
const forms =document.querySelector(".field-group");

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    input.classList.remove('active');
    forms.classList.remove('has-error');
  });
});

// ---------------------------------------------------------
form.addEventListener('submit', (event) => {
  const isEmailValid = validateEmail();

  if (!isEmailValid) {
    event.preventDefault();
    emailInput.focus();
  }
});

// ---------------------------------------

// reset the input area
function resetForm() {
      formInput.reset();
    successView.classList.remove('active');
}

