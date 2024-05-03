class MinHeap{
    constructor(){
        this.heap=[]
    }

    getParantIndex(index){
        return Math.floor((index-1)/2)
    }
    
    getLeftChildIndex(index){
        return 2*index+1
    }

    getRightChildIndex(index){
        return 2*index+2
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

            if(this.heap[parantIndex]>this.heap[currentIndex]){
                this.swap(parantIndex,currentIndex)
            }else{
                break;
            }
        }
    }

    remove(){
        if(this.heap.length===0){
            return null
        }

        if(this.heap.length===1){
            return this.heap.pop()
        }else{
            let min=this.heap[0]
            this.heap[0]=this.heap.pop()
            this.heapifyDown()

            return min
        }
    }

    heapifyDown(){
        let currentIndex=0

        while(this.getLeftChildIndex(currentIndex)<this.heap.length){
            let leftChildIndex=this.getLeftChildIndex(currentIndex)
            let rightChildIndex=this.getRightChildIndex(currentIndex)

            let minIndex=leftChildIndex
            if(rightChildIndex<this.heap.length&&this.heap[rightChildIndex]<this.heap[leftChildIndex]){
                minIndex=rightChildIndex
            }

            if(this.heap[minIndex]<this.heap[currentIndex]){
                this.swap(minIndex,currentIndex)

                currentIndex=minIndex
            }else{
                break;
            }
            
        }
    }

    display(){
        console.log(this.heap)
    } 

    Sort(){
        let arr=[]
        while(this.heap.length>0){
            arr.push(this.remove())
        }

        this.heap=arr

        return arr
    }
}


const heap=new MinHeap()


heap.insert(2)
heap.insert(8)
heap.insert(5)
heap.insert(10)
heap.insert(7)
heap.insert(14)
heap.insert(9)
// heap.remove()
console.log(heap.Sort());

heap.display()