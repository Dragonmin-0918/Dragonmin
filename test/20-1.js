// 내 재귀함수 퓰이

// function solution(n, m) {
//     let answer = [];
//     let BigNum = 0;
//     let MinNum = 0;
    
//     if (n > m) {
//         BigNum = n;
//         MinNum = m;
//     } else {
//         BigNum = m;
//         MinNum = n;
//     }
//     function reSolution(BigNum, MinNum) {
//         if (BigNum % MinNum === 0) {
//             return answer.push(MinNum);
//         } else {
//             reSolution(MinNum, BigNum % MinNum);
//         }
//     }
//     reSolution(BigNum, MinNum);
//     answer.push(BigNum * MinNum / answer[0]);
//     return answer
// }


// 유클리드 호재법 풀이


// function solution(n, m) {
    // 최대공약수 구하는 공식
    // 유클리드 호재법
    
    // a를 b로 나눴을 때 (a 가 b보다 클 경우) === 큰 수를 작은 수로 나눴을 때
    // 나머지(r) 값이 0이 되면, 나눴던 작은 수(b)가 최대공약수가 된다.
    // 나머지(r) 값이 0이 되지 않으면, 큰 수(a)에 작은 수 (b)가 들어오고
    // 작은 수(b)에는 나머지 (r) 값이 들어간다.
    // 나누기를 반복했을 때에 나머지 값이 0이 되면 나눴던 작은 수(b)가 최대공약수가 된다.
    
    // let a = Math.max(n, m); // 큰 수
    // let b = Math.min(n, m); // 작은 수
    // let r = 0; // a와 b를 나눈 나머지 값
    
    // while(a % b > 0) {
        // r = a % b; // 큰 수에서 작은 수를 나눴을 때 나온 나머지 값
        // a = b; // 큰 수에 작은 수를 재할당
        // b = r; // 작은 수에 나머지 값 재할당
    // }    
    // 최소공배수는 두 수를 곱한 값에 최대공약수를 나눠준 몫의 값
    // return [b, (n * m) / b]
    
// }