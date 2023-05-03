const range = require("range"); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  // TODO

  // range 사용법:
  //1: range.range(x, y) === x부터 y이전까지 나열
  //2: range.range(x, y, z) === x부터 y이전까지 나열 + 증가값z
  //3: const range = require('range') 일 경우에는 return range.range();
  //4: const range = require('range').range 일 경우에는 return range();
  //5: const { range } = require('range) 일 경우에는 return range();
  return range.range(2, upTo + 2, 2);
}

module.exports = getListMultiplesOfTwo;
