fetch('https://jsonplaceholder.typicode.com/todos/10')
.then(item => item.text())
.then(result => {
   const str = JSON.parse(result);
   console.log(str);
   console.log(str.title)
})