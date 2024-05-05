class MaxHeap{
    constructor(){
        this.heap=[]
    }

   getParantIndex(index){
    return Math.floor((index-1)/2)
   }

   getleftChildIndex(index){
    return 2*index+1
   }

   getRightIndex(index){
    return 2*index+2
   }

   maxHight(){
    return this.calculateHight(0)
   }

   minHight(){
    return this.calculateHight(0)
   }

   calculateHight(index){
    if(index>=this.heap.length||this.heap[index]===undefined){
        return 0;
    }

    const leftChildIndex=this.getleftChildIndex(index)
    const rightChildIndex=this.getleftChildIndex(index)

    const leftHight=this.calculateHight(leftChildIndex)
    const rightHight=this.calculateHight(rightChildIndex)

      return 1+Math.max(leftHight,rightHight)
    }
   


   swap(index1,index2){
    [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
   }

   insert(value){
    this.heap.push(value)

    this.heapifyUp()
   }

   heapifyUp(){
    let currentIndex=this.heap.length-1
    while(currentIndex>0){
        let parantIndex=this.getParantIndex(currentIndex)

        if(this.heap[currentIndex]>this.heap[parantIndex]){
            this.swap(currentIndex,parantIndex)
            currentIndex=parantIndex
        }else{
            break;
        }
    }
   }

   removeMax(){
    if(this.heap.length===0){
        return null
    }
    if(this.heap.length===1){
        return this.heap.pop()
    }else{
        const max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown()
        return max
    }
   }

   heapifyDown(){
    let currentIndex=0
    while(this.getleftChildIndex(currentIndex)<this.heap.length){
        let rightChildIndex=this.getRightIndex(currentIndex)
        let leftChildIndex=this.getleftChildIndex(currentIndex)

        let MaxIndex=leftChildIndex

        if(rightChildIndex<this.heap.length&&this.heap[rightChildIndex]>this.heap[leftChildIndex]){
          
            MaxIndex=rightChildIndex
        }

        if(this.heap[MaxIndex]>this.heap[currentIndex]){
            this.swap(MaxIndex,currentIndex)
            currentIndex=MaxIndex
        }else{
            break;
        }
     }
   }

   peekMax(){
    return this.heap.length>0?this.heap[0]:null
   }

   size(){
    return this.heap.length
   }

   isEmpty(){
    return this.heap.length===0
   }

   clear(){
    this.heap=[]
   }

   display(){
    console.log(this.heap)
   }

   heapSort(){
    let arr=[]
    while(this.heap.length>0){
     arr.push(this.removeMax())
    }
    this.heap=arr
   return arr
    
   }
}



const heap=new MaxHeap()

heap.insert(5);
heap.insert(50);
heap.insert(1);
heap.insert(13);
heap.insert(14);
heap.insert(9);
// heap.removeMax()
heap.display()

console.log(heap.minHight())
console.log(heap.maxHight())



// console.log(heap.heapSort());
