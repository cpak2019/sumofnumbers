function sumFor(list) {
  let temp = 0;
  for (const num of list) {
    temp += num;
  }
  return temp;
}

function sumWhile(list) {
  let temp = 0;
  let i = 0;
  while (i < list.length) {
    temp += list[i];
    i++;
  }
  return temp;
}

function sumRecursion(list) {
  if (list[0] == null) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (mem, num) { return mem + num; }, 0);
}
const testList = [1, 2, 3, 4, 5];

console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList));
console.log(sumTheSimpleWay(testList));
