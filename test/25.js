// // for문을 통한 풀이

// // function solution(N, stages) {
// //   // 모든 스테이지를 오름차순 형태로 정렬
// //   stages.sort((a, b) => (a > b ? 1 : -1));
// //   const infos = [];
// //   for (let i = 1; i <= N; i++) {
// //     infos.push({
// //       stage: i, // 현재 스테이지의 번호
// //       users: 0, // 스테이지를 플래이하고 있는 유저의 수
// //       fail: 0, // 현재 스테이지의 실패율
// //     });
// //   }

// //   let allUsers = stages.length; //전체 유저의 수를 저장
// //   for (let i = 0; i < stages.length; i++) {
// //     if (infos[stages[i] - 1]) {
// //       infos[stages[i] - 1].users++;

// //       // 현재 스테이지의 번호와 다음 스테이지의 번호가 일치하지 않는 경우
// //       // === 현재 스테이지의 번호의 합산이 끝나는 순간
// //       if (stages[i] !== stages[i + 1]) {
// //         const fail = infos[stages[i] - 1].users / allUsers;
// //         allUsers -= infos[stages[i] - 1].users;

// //         infos[stages[i] - 1].fail = fail;
// //       }
// //     }
// //   }

// //   return infos
// //     .sort((a, b) => {
// //       return a.fail > b.fail ? -1 : 1;
// //     })
// //     .map((el) => el.stage);
// // }

// // 메소드를 통한 풀이

// function solution(N, stages) {
//     // 모든 스테이지를 오름차순 형태로 정렬
//     stages.sort((a, b) => a > b ? 1 : -1);

//     let allUsers = stages.length; // 전체 유저의 수를 저장
//     return Array.from(new Array(N), (_, i) => 1 + i).map(stage => { // 해당 스테이지를 클리어하지 못한 유저들을 저장하는 배열
//         const result = stages.slice(
//             stages.indexOf(stage),
//             stages.lastIndexOf(stage) + 1
//         )
//         const fail = result.length / allUsers;
//         // 해당 스테이지를 클리어 하지 못한 유저를 전체 유저에서 제거
//         allUsers -= result.length;

//         return {stage, fail}
//     }).sort((a,b) => a.fail > b.fail ? -1 : 1).map(el => el.stage)
//     // new Array( N ).fill(1).map((num, i) => {
//     //     const stage = num + i;
//     //     console.log(stage)
//     // })

// }
