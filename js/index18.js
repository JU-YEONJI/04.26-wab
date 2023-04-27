
//async -> 함수에는 이동기 통신을 가지고 있다는 것을 알려줌
//                   await 비동기 명령어
// fetchStr 


// 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//.then(response => response.text())
//.then(result => console.log(result))


async function fetchStr(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const result = await response.text();
    console.log(result)
}

fetchStr();