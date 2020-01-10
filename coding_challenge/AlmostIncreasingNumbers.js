const checker = arr => {
  let i = 0;
  for (i; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
};

const AlmostIncreasinNumbers = arrObj => {
  if (checker(arrObj)) {
    return true;
  }

  if (!checker(arrObj) && arrObj.length === 2) {
    return false;
  }

  let k = 0;
  for (k; k < arrObj.length; k++) {
    let temp = arrObj;
    temp = temp.filter((value, index) => index !== k);
    if (checker(temp)) {
      return true;
    }
  }
  return false;
};

const arr = [3, 5, 67, 98, 3];

console.log(AlmostIncreasinNumbers(arr));
