const button = document.getElementById('button')
const message = document.getElementById('message')
const acc = document.getElementsByClassName('content-container')

button.addEventListener('click', function () {
  const hobby = prompt('What is you hobby?')
  message.innerText = `My hobby is ${hobby}!`
})

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
    console.log(this.classList)
  })
}
