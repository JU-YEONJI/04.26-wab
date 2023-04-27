fetch('https://jsonplaceholder.typicode.com/photos/4')
.then(response => response.text())
.then(result =>{
  const str = JSON.parse(result);
  // console.log(str);
  // console.log(str.thumbnailUrl)
  document.write(
    `<img src="${str.thumbnailUrl}" alt="샘플">`
  )
})

// 50 - 11:00