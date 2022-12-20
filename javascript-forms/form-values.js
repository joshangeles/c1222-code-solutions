function submitHandler(event) {
  event.preventDefault();
  submittedForm.name = $contactForm.elements.name.value;
  submittedForm.email = $contactForm.elements.email.value;
  submittedForm.message = $contactForm.elements.message.value;
  console.log(submittedForm);
  $contactForm.reset();
}
var $contactForm = document.querySelector('#contact-form');
var submittedForm = {};
$contactForm.addEventListener('submit', submitHandler);
