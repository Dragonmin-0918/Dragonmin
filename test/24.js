// // // // 기존 풀이

// // // unction solution(n, lost, reserve) {
// // //     const losted = [...lost];
// // //     console.log("변경 전 : ", lost )
// // //     lost = lost.filter(student => !reserve.includes(student))
// // //     .sort((a, b) => a > b ? 1 : -1); // a - b;
// // //     reserve = reserve.filter(student => !losted.includes(student))
// // //     .sort((a, b) => a > b ? 1 : -1); // a - b;
// // //     console.log("변경 후 : ", lost, reserve)
    
    
// // //     // 전체 학생의 수 - 체육복을 잃어버린 학생의 수
// // //     let answer = n - lost.length;
    
// // //     for(let i = 0; i < lost.length; i ++) {
// // //         if (reserve.includes(lost[i] - 1)) {
// // //             // 자신의 번호 앞에 있는 학생이 여벌 체육복을 가지고 있는지를 찾는다
// // //             reserve.splice(reserve.indexOf(lost[i] - 1), 1);
// // //             answer++;
                        
// // //         } else if(reserve.includes(lost[i] + 1)){
// // //             // 자신의 번호 뒤에 있는 학생이 여벌 체육복을 가지고 있는지 찾는다
// // //             reserve.splice(reserve.indexOf(lost[i] + 1), 1);
// // //             answer++;
// // //         }
// // //     }
// // //     return answer;
// // // }

// // // 메소드 풀이

// // function solution(n, lost, reserve) {
//     const losted = [...lost];
//     lost = lost.filter(student => !reserve.includes(student))
//     .sort((a, b) => a > b ? 1 : -1); // a - b;
//     reserve = reserve.filter(student => !losted.includes(student))
//     .sort((a, b) => a > b ? 1 : -1); // a - b;
    
    
//     const temp = [...reserve]
//     return lost.reduce((acc, cur) => {
//         // 앞에 있는 학생의 인덱스 값을 저장
//         const prev = temp.indexOf(cur - 1);
//         // 뒤에 있는 학생의 인덱스 값을 저장
//         const next = temp.indexOf(cur + 1);
        
//         if (prev !== -1) {
//             temp.splice(prev, 1);
//             acc++;
//         } else if (next !== -1) {
//             temp.splice(next, 1);
//             acc++;
//         }
//         return acc;
//     }, n - lost.length)
// }