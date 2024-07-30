// 문제 2. 배열 메서드 활용하기: forEach()
//2.js 파일을 만들어 '걷기반 튜터님'만 출력되도록 해주세요.

let tutorNames = ['최원장', '김르탄', '윤창식', '박가현', '김병연', '내배캠'];

tutorNames.forEach(function(tutorName){
    if(tutorName==='최원장'||tutorName==='윤창식'||tutorName==='박가현'||tutorName==='김병연'){
        console.log(tutorName);
    }
})
// 여기에 코드를 작성하세요.
// forEach 메서드를 사용해 배열을 순회하세요.
// '걷기반 튜터님'만 콘솔에 출력되도록 조건문을 사용하세요. -> 논리합연산자(||)를 활용해보세요.
// '걷기반 튜터님'이 누군지는 다 알고 계시죠? 🥹
