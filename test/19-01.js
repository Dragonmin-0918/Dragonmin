// function solution(array, commands) {
//     const answer = [];
    
//     for (let idx = 0; idx < commands.length; idx ++) {
//         const i = commands[idx][0] // i번째 숫자를 저장
//         const j = commands[idx][1] // j번째 숫자를 저장
//         const k = commands[idx][2] // k번째 숫자를 저장
        
//         const result = array.slice(i - 1, j).sort((a, b) => {
//             // 자를 배열을 오름차순으로 정렬
//             return a > b ? 1 : -1; // return a - b;
            
//         })
//         answer.push(result[k - 1])
//         // console.log( i, commands[i], commands[i][0], commands[i][1], commands[i][2])
//     }
//     return answer
// }

// function solution(array, commands) {
//     const answer = commands.map(el => {
//         const result = array.slice(el[0] - 1, el[1]).sort((a, b) => {
//             return a > b ? 1 : -1;
//         })
//         return result[el[2] -1];
//     })
//     return answer
// }