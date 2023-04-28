// promise 객체 -> 나의 객체를 만들기
//                 new Promise() -> return -> .then() -> .then()
//                    resolve -> 실행
//                    reject

// function 함수이름(){return new Promise()}
//              함수.then()
//        new Promise().then().then()
// ▩▩ =
//       ▩.then()


new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(1);
    },200)
    })
.then(
    function (result){
        console.log(result);
        return result + 10;
    })
.then(function(data){
    console.log(data);
})