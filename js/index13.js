fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.text())
.then(result => {
  const users = JSON.parse(result);
  const {id} = users[2]
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
  .then(response => response.text())
  .then(album => console.log(album))
})

// JSON, 구조분해 할당, stroage, 배열, index기법