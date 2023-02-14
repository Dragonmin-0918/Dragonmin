// // // 객체를 통한 풀이

// // // const strList = {
// // //     zero : 0,
// // //     one : 1,
// // //     two : 2,
// // //     three : 3,
// // //     four: 4,
// // //     five: 5,
// // //     six: 6,
// // //     seven: 7,
// // //     eight: 8,
// // //     nine: 9
// // // }

// // // function solution(s) {
// // //     let answer = "";
// // //    let str = "";
    
// // //     for (let i = 0; i < s.length; i++) {
// // //         // console.log(i, s[i], str, strList[str], answer)
// // //         if (Number.isNaN(Number(s[i]))) {
// // //             // 숫자가 아닌 경우 (영단어인 경우)
// // //             str += s[i];
            
// // //         } else {
// // //             // 숫자가 맞는 경우
// // //             answer += s[i];
// // //         }
        
// // //         if( strList [str] !== undefined) {
// // //             answer += strList[str];
// // //             str = "";
// // //         }
// // //     }
// // //     return Number(answer);
        
// // // }

// // // 배열을 통한 풀이

// // const strList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

// // function solution(s) {
// //     for(let i = 0; i < strList.length; i ++) {
// //         while(s.includes(strList[i])) {
// //          s = s.replace(strList[i], i);
            
// //         }
// //     }   
// //      return Number(s);   
// // }

// // 메소드를 통한 풀이

// const strList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

// function solution(s) {
//     strList.forEach((str, i) => {
//         s = s.split(str).join(i)
//     })
//     return Number(s)
// }