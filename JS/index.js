let inputField = document.getElementById('input');

document.getElementById('keypad').addEventListener('click', function (event) {
      inputField.value = inputField.value + event.target.value
})

document.getElementById('equals').addEventListener('click', function () {
      inputField.value = eval(inputField.value);
})

document.getElementById('clear').addEventListener('click', function () {
      inputField.value = ''
})