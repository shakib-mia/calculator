let inputField = document.getElementById('input');

document.querySelector('#keypad').addEventListener('click', function (event) {
      if (event.target.value != undefined)
            inputField.value = inputField.value + event.target.value;
})

document.getElementById('equals').addEventListener('click', function () {
      inputField.value = eval(inputField.value);
      if (inputField.value.includes('.') && inputField.value.length > 12) {
            inputField.value = eval(inputField.value).toFixed(11);
      }
})

document.getElementById('clear').addEventListener('click', function () {
      inputField.value = ''
})

document.getElementById('sqrt').addEventListener('click', function () {
      if (inputField.value != "") {
            inputField.value = Math.sqrt(eval(inputField.value));
            if (inputField.value.includes('.') && inputField.value.length > 12) {
                  inputField.value = eval(inputField.value).toFixed(11);
            }
      } else {
            alert('Input field cannot be empty')
      }
})
