//async function 이름(){
//   선언 데이터 = await 비동기 작업
//   선언 데이터 = await 비동기 작업
//}


//async function 이름(){
// try{실행}
// catch(){}
// finalley{}
// }


// async function sta(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const result = await response.text();
//         console.log(result)
//     }
//     catch(error){
//         console.log('에러입니다')
//     }
//     finally{
//         console.log('작업이 끝났습니다.')
//     }
// }

// sta();

async function str(){
    // 실행
    try{
        alert('시작입니다.')
        console.log('welcome')
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.text();
        console.log(result);
    }
    // error
    catch(error){
        alert('에러가났습니다.')
    }
    // final
    finally{
        console.log('작업이완료되었습니다')
    }
}


str();