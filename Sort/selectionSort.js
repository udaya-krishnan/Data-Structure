

function selectionSort(arr){
    let n=arr.length

    for(let i=0;i<n-1;i++){
        let miniIndex=i

        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[miniIndex]){  // Dscending order arr[j]>arr[miniIndex]
                miniIndex=j
            }
        }


        if(miniIndex!==i){
            [arr[i],arr[miniIndex]]=[arr[miniIndex],arr[i]]
        }
    }

    return arr
}


let arr=[0,6,9,2,8,-4]

let result=selectionSort(arr)

console.log(result);