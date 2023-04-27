const todo = {
  userId : 1,
  title:"title01",
  body: "내용101"
}

fetch('https://jsonplaceholder.typicode.com/posts',{
  method:'POST',
  body:JSON.stringify(todo)
})
.then(response => response.text())
.then(result => console.log(result))