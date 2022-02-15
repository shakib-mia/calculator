let inputField = document.getElementById('input');

document.querySelector('#keypad').addEventListener('click', function (event) {
      inputField.value = inputField.value + event.target.value
})

document.getElementById('equals').addEventListener('click', function () {
      inputField.value = eval(inputField.value).toFixed(10);

})

document.getElementById('clear').addEventListener('click', function () {
      inputField.value = ''
})

document.getElementById('sqrt').addEventListener('click', function () {
      inputField.value = Math.sqrt(eval(inputField.value)).toFixed(12)
})