document.addEventListener('DOMContentLoaded', function() {

  console.log('Script loaded!');
  handleFloatingLabel();
  handlePwdInputShow();
});


function handleFloatingLabel() {
  let input = document.querySelector('.js-name-input'),
    label = document.querySelector('.js-floating-label');

  input.addEventListener('blur', function() {
    console.log(event);
    if (input.value) {
      label.classList.add('is-floating');
    } else {
      label.classList.remove('is-floating');
    }
  });
}

function handlePwdInputShow() {
  let txtfield = document.querySelector('.js-password-input'),
    toggle = document.querySelector('.js-password-toggle'),
    svg_hidden = document.querySelector('.js-svg-pwd-hidden'),
    svg_shown = document.querySelector('.js-svg-pwd-shown');

  toggle.addEventListener('click', function() {
    if (txtfield.type === "text") {
      console.log("Text hidden");
      txtfield.type = "password";
    } else {
      console.log("Text shown");
      txtfield.type = "text";
    }
  });


}