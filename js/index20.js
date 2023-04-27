
async function fetfn(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.text();
    const data = await JSON.parse(result);
    // console.log(data[1].address.geo.lat);
    document.write(`<p>
    ${data[1].address.geo.lat}
    </p>`)    
    // result => {
    //     const user = JSON.parse(result)
    // }
    // user => {const {address} = user;
    // return address
    // }
    // address => {const {geo} = address
    // return geo
    // }
    // geo => {const {lat} = geo;}
}

fetfn()
