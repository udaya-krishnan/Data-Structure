//Ascending Order

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
let arr = [9, 8, -2, 4, -6, 1];
let result = insertionSort(arr);

console.log(result); //[-6,-2,1,4,8,9]



//Dscending Order

function DscendingInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] < numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }

  return arr;
}
let array = [9, 8, -2, 4, -6, 1];
let dscending = DscendingInsertionSort(arr);
console.log(dscending); //[9,8,-2,4,-6,1]


//Srting Ascending Order Insertion Sort 


function SrtingAscending(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert=arr[i]
        let j=i-1

        while(j>=0&&arr[j]>=numberToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }

        arr[j+1]=numberToInsert
    }
    return arr
}

let str=['E','G','D','A','S','B']

let AscendingOrder=SrtingAscending(str)

console.log(AscendingOrder);// [ 'A', 'B', 'D', 'E', 'G', 'S' ]




//String Dscending Order Insertion Sort

function StringDscending(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert=arr[i]

        let j=i-1

        while(j>=0&&arr[j]<numberToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }

        arr[j+1]=numberToInsert
    }

    return arr
}

let Dscending=['E','G','D','A','S','B']

let DscendingStr=StringDscending(Dscending)

console.log(DscendingStr);// [ 'S', 'G', 'E', 'D', 'B', 'A' ]
