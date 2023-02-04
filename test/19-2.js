// 메소드 풀이

// function solution(a, b) {
//     let day = new Date(2016, a-1, b);
//     let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//     let answer = week[day.getDay()];
//     return answer
// }


// 또다른 메소드 풀이

// const month = {
//     1 : 31,
//     2 : 29,
//     3 : 31,
//     4 : 30,
//     5 : 31,
//     6 : 30,
//     7 : 31,
//     8 : 31,
//     9 : 30,
//     10 : 31,
//     11 : 30,
//     12 : 31
// }

// const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

// function solution(a, b) {
//   const days = Array.from(new Array(a), (el, i) => i + 1)
//        // new Array(a).fill(1)
//   .reduce((acc, cur) => {
//   return acc + (cur !== a 
//                 // a월이 아닐 경우 = 이전 월일 경우 (지나간 경우) 
//                 ? month[cur]
//                 // a월이 맞는 경우 = 현재 월일 경우
//                 : b - 1
//                )
//   }, 0)
//   return week[days% 7];
//   }


// for 문 풀이

// const month = {
//     1 : 31,
//     2 : 29,
//     3 : 31,
//     4 : 30,
//     5 : 31,
//     6 : 30,
//     7 : 31,
//     8 : 31,
//     9 : 30,
//     10 : 31,
//     11 : 30,
//     12 : 31
// }

// const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

// function solution(a, b) {
//   let days = 0;
  
//   for (let i = 1; i < a; i ++) {
//     days += month[i];
//   }
//     days += (b - 1);
//     return week[days % 7];
// }
