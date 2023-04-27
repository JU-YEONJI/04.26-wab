
async function fetfn(){
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const result = await response.text();
    // console.log(result)
    // const basic = JSON.parse(result)
    // const data = basic.filter(item => item.albumId === 61)
    const data = await JSON.parse(result)
    const basic = data.filter(item => item.albumId === 61)
    // console.log(basic)
    for(let i in basic){
        document.write(
            `
            <figure>
            <img src = ${data[i].thumbnailUrl}> alt="${i.title}" 
            <figcaption>
            ${i.title}
            </figcaption>
            </figure>
            `
        )
    }
}



fetfn()