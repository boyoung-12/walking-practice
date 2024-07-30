//문제 4. 배열 메서드 활용하기: filter()
//4.js 파일을 만들어 아이스 전용 커피 데이터를 만들어주세요.

let starbucks = [
    {
      name: '카페 라떼',
      icedOnly: false,
    },
    {
      name: '콜드 브루',
      icedOnly: true,
    },
    {
      name: '돌체 라떼',
      icedOnly: false,
    },
    {
      name: '돌체 콜드 브루',
      icedOnly: true,
    },
  ];
  const icedOnly = starbucks.filter(function(condition){
    return condition.icedOnly===true
       
    })
  
  console.log(icedOnly);

// 스타벅스 안에 객체드을 하나씩 검사하면서 
// 아이스온리가 트루인것만 빠져나와 아이스온리 변수에 담기기 


  // 여기에 코드를 작성하세요.
  // 아이스 전용 커피 배열을 만듭니다.
  