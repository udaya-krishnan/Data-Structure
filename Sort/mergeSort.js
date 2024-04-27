

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let index = Math.floor(arr.length / 2);

  let left = arr.slice(0, index);

  let right = arr.slice(index);

  return merge(mergeSort(left), mergeSort(right));
}





function merge(left, right) {
  let sortArr = [];
    
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortArr.push(left.shift());
    } else {
      sortArr.push(right.shift());
    }
  }

  return [...sortArr, ...left, ...right];
}

let arr = [9, 0, 4, 2, 8, 6];

let result = mergeSort(arr);

console.log(result);//[0,2,4,6,8,9]
