document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');

  const inputLine = document.querySelector('.progress-line');
  const inputCircle = document.querySelector('.progress-circle');
  const inputText = document.getElementById('progressText');
  const inputUpload = document.getElementById('fileUpload');

  const progressLine = document.querySelector('.progress-line');
  const progressCircle = document.querySelector('.progress-circle');
  const progressText = document.querySelector('.progress-text');


  const inputs = form.querySelectorAll('.form-input');


  function myFunction322() {
    let filledFields = 0;
    let totalFields = inputs.length;

    inputs.forEach(input => {
      var valueToCheck = input.value.trim();
      if (valueToCheck !== '' && valueToCheck !== 'placeholder') {
        filledFields = filledFields + 1;
      }
    });

    const progress = (filledFields / totalFields) * 100;


    progressLine.style.width = `${progress}%`;
    progressCircle.style.left = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
  }

  inputs.forEach(input => {
    input.addEventListener('focusout', myFunction322);
  });

 myFunction322();
});
