
// fetch() 
// .then(()=>{},()=>{})
//        실행   error

// Promise 객체 -> 대기 -> 초기상태       pending
//                이행  -> 성공적으로 완성 fulfilled 
//                거부  -> 실패           rejuected

// fetch()
// .then(()=>{})
// .then(()=>{})
// .then(()=>{})
// .catch(()=>{})       -> rejected
// .finally(()=>{})     -> 작업이 종료가 됐을 때

// fetch('https://jsonplaceholder.typicode123.com/posts/1')
// .then(response => response.text(),(error)=>{console.log(error)})
// .then(result=>{
//     console.log('welcome');
//     console.log(result)
// })

// fetch의 링크가 틀렷을 경우 response의 연결이 실패됐지만
// 그로 인해 기입된 error가 실행돼서 console.log(result)는 undefind파일로  처리된다
// 덕분에 다음 작업을 이어할 수 있음

// .then(() => console.log('작업완'))

fetch('http://jsonplaceholder.typicode123.com/posts/1')
.then(response => response.text())
.then(result => {
    console.log('welcome');
    console.log(result)
})
.catch(()=>{console.log('error가 발생되었습니다')})
.finally(()=>{console.log('작업이끝났습니다')})
