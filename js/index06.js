fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.text())
.then(result => {
  const data = JSON.parse(result);
  // console.log(data);
  const basic = data.filter( item => item.albumId === 1);
  // console.log(basic)
  for(let i of basic){
    document.write(
      `
      <figure>
      <img src="${i.thumbnailUrl}" alt="${i.title}">
      <figcaption>${i.title}</figcaption>
      </figure>
      `
    )
  }
})
// 39 - 49