// for문을 사용한 풀이

// function solution(n) {
//     // 피보나치 수열의 결과들이 담겨있는 배열
//     // 0번째 인덱스값은 0번째 피보나치 수의 결과
//     // 1번째 인덱스값른 1번째 피보나치 수의 결과
//     // n번째 인덱스값은 n번째 피보나치 수의 결과
//     const answer = [0, 1];
    
//     for (let i = 2; i <= n; i ++){
//         answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
//     }
//     return answer[n];
// }


// 메소드를 사용한 풀이
// function solution(n) {
//     let prev = 0; // n-2의 피보타치 수 결과가 저장 (최초값: 0번째 피보나치)
    
//     return new Array(n - 1).fill(1).reduce(acc => {
//         const sum = (acc + prev) % 1234567;
//         prev = acc;
        
//         return sum;
//     }, 1) // 1번째 피보나치 수의 결과를 초기값으로 사용
// }