let arr=[-6,3,8,-5,2]
// Pick last element as pivot


function QuickSortLastPivot(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...QuickSortLastPivot(left),pivot,...QuickSortLastPivot(right)]
}



let result1=QuickSortLastPivot(arr)

console.log(result1);//[-6,-5,2,3,8]



// Pick first element as pivot


function quickSortFirstPivot(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[0]
    let left=[]
    let right=[]

    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSortFirstPivot(left),pivot,...quickSortFirstPivot(right)]
}

let result2=quickSortFirstPivot(arr)
console.log(result2);


// Pick a random Element as pivot

function quickSortRandomPivot(arr){
    if(arr.length<2){
        return arr
    }
    let index=Math.floor(Math.random()*arr.length)
    let pivot=arr[index]
    let left=[]
    let right=[]

    for(let i=0;i<arr.length;i++){
        if(i==index){
            continue;
        }
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSortRandomPivot(left),pivot,...quickSortRandomPivot(right)]
}

let result3=quickSortRandomPivot(arr)
console.log(result3);



// Pick Median as Pivot


function quickSortMedianPivot(arr){
    if(arr.length<2){
        return arr
    }
    let index=Math.floor(arr.length/2)
    let pivot=arr[index]
    let left=[]
    let right=[]

    for(let i=0;i<arr.length;i++){
        if(i===index){
            continue;
        }
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSortMedianPivot(left),pivot,...quickSortMedianPivot(right)]
}

let result4=quickSortMedianPivot(arr)

console.log(result4);