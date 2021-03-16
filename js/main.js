function memo(fn) {
  let cache = {};
  return function () {
    let strArg = JSON.stringify(arguments);
    if (!cache[strArg]) {
      cache[strArg] = fn(...arguments);
    }
    return cache[strArg];
  };
}

function range(min, max) {
  let sum = 0;

  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error("Argument isn't a number");
  }
  if (min > max) {
    sum = ((max + min) / 2) * (min - max + 1);
  } else {
    sum = ((min + max) / 2) * (max - min + 1);
  }
  if (sum > Number.MAX_SAFE_INTEGER || sum < Number.MIN_SAFE_INTEGER) {
    throw new Error("Unsafe result");
  }
  return sum;
}

const memoRange = memo(range);

console.log(memoRange(-1, 10));
console.log(memoRange(15, -10));
//console.log(memoRange({}, 1));
//console.log(memoRange(1, 99999999999999999999999999));
console.log(memoRange(15, -10));
console.log(memoRange(5436, 0));
console.log(memoRange(-15, -1000));
console.log(memoRange(-1, -1));
console.log(memoRange(-1, -1));