const button = document.getElementById('button')
const message = document.getElementById('message')
const newMessage = document.getElementById('new-messagee')

button.addEventListener('click', function () {
  const name = prompt('What is your name?')
  message.innerText = `Welcome to my page ${name}!`
})
