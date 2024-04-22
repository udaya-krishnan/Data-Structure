function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = numberToInsert;
  }

  return arr;
}
let arr=[9,8,-2,4,-6,1]
let result=insertionSort(arr)

console.log(result);//[-6,-2,1,4,8,9]
