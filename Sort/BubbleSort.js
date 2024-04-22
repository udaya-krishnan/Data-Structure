//Ascending Order
let arr = [3, -1, 9, -6, 2, 8, 0];

function bubbleSortAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  return arr;
}

let result = bubbleSortAscending(arr);
console.log(result); //[  -6, -1, 0, 2, 3,  8, 9]




//Dscending Order

function bubbleSortDscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  return arr;
}

let result1 = bubbleSortDscending(arr);

console.log(result1); //[9,8,3,2,0,-1,-6]




//String Ascending Order

let str = ["E", "G", "D", "A", "S", "B"];

function SrtingAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  return arr;
}

let result2 = SrtingAscending(str);
console.log(result2); //[ 'A', 'B', 'D', 'E', 'G', 'S' ]




//String Dscending Order

function SrtingDscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  return arr;
}

let result3 = SrtingDscending(str);
console.log(result3); //[ 'S', 'G', 'E', 'D', 'B', 'A' ]
