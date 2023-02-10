// for 문과 if 문을 통한 풀이

// function solution(participant, completion) {
//     const obj = {};
    
//     // 1. 참가자 명단을 구성 (key: 참가자 이름, value: 참가자 수)
//     for(let i = 0; i < participant.length; i++) {
//         if (obj[participant[i]] === undefined) {
//             obj[participant[i]] = 0;
//         }
//         obj[participant[i]] ++;
//     }
    
//     // 2. 참가자 명단에서 완주자의 수만큼 제거
//     for(let i = 0; i < completion.length; i++) {
//         obj[completion[i]]--;
//     }
    
//     // 3. 참가자 명단에는 있지만, 완주자 명단에 없는 사람을 찾는다. (value 값이 0이 아닌 경우)
//     for (let key in obj) {
//         if(obj[key] !== 0) {
//             return key
//         }
//     }
// }	

// for문과 메소드를 통한 풀이

// function solution(participant, completion) {
//     // 참가자와 완주자 명단을 오름차순으로 정렬
//     participant.sort((a, b) => a > b ? 1 : -1);
//     completion.sort((a, b) => a > b ? 1 : -1);
    
//     for (let i = 0; i < participant.length; i ++) {
//         if (participant[i] !== completion[i]) {
//             answer = participant[i];
//             break;
//         }
//     }
//     return answer
// }	


// 메소드를 통한 풀이

// function solution(participant, completion) {
//     // 참가자와 완주자 명단을 오름차순으로 정렬
//     participant.sort((a, b) => a > b ? 1 : -1);
//     completion.sort((a, b) => a > b ? 1 : -1);

//     const answer = participant.filter((name, i) => {
//        // console.log(name, i, completion[i])
//         return name !== completion[i];
//     })
//     return answer[0]
// }	