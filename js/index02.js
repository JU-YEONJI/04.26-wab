fetch('https://jsonplaceholder.typicode.com/todos/10')
.then(item => item.text())
.then(a => console.log(a))