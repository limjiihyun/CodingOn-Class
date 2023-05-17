//배열 구조 분해
//특징 : 구조 분해 당시 순서가 중요 !
const lists = ["apple", "grape"];
console.log(lists[0]);
[item1, item2, item3 = "peach"] = lists;
console.log(item1, item2, item3);

function test() {
  return ["one", "two", "three"];
}

const [one, two, three, four] = ["one", "two", "three"];
console.log(one, two, three, four);

//swap
let a = 10;
let b = 20;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

// 객체 구조 분해
// 특징 : 키 값이 중요하다!
const obj = {
  key1: "one",
  key2: "two",
};
console.log(obj.key1);
console.log(obj["key1"]);
const { key1: newKey1, key2, key3 = "three" } = obj;
obj.key3 = "three";
console.log(obj);

const { key2: newKey2, key1, obj3 = "three" } = obj;
console.log(newKey2, key1, obj3);

function test2() {
  return { result: true, statuscode: 200, a: 10, b: 20 };
}
// const result = {result, statusCode, a:a2, b:b2}=test2()
// console.log(result, a2)

//spread연산자
const i = [10, 20, 30];
const j = [40, 50];
const x = [60, 70, 80, 90];
const concat = i.concat(j);
console.log(concat);
const spread = [...i, ...j];
console.log(spread);

const z = [..."Hello"];
console.log(z);

function spreadFunc(a, b, c) {
  console.log(a + b + c);
}

//spread는 함수를 호출할 떄!
spreadFunc(i[0], i[1], i[2]); //기존 방식
spreadFunc(...i); //spread연산자 사용 방식

//rest 파라미터
function restFunc(a, b, ...rest) {
  console.log(a, b);
  console.log(rest);
}
restFunc(...x);
