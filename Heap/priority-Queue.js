class Heap{
    constructor(){
        this.heap=[]
    }

    getParantIndex(index){
        return Math.floor((index-1)/2)
    }

    getRightChildIndex(index){
        return 2*index+2
    }

    getLeftChildIndex(index){
        return 2*index+1
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }

    insert(value,priority){
        this.heap.push({value,priority})

        this.heapifyUp()
    }

    heapifyUp(){
        let currentIndex=this.heap.length-1

        while(currentIndex>0){
            let parantIndex=this.getParantIndex(currentIndex)

            if(this.heap[parantIndex].priority<this.heap[currentIndex].priority){
                this.swap(parantIndex,currentIndex)
                currentIndex=parantIndex
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
            let priorityValue=this.heap[0].value
                this.heap[0]=this.heap.pop()
            this.heapifyDown()
                return priorityValue
        }
    }

    heapifyDown(){
        let currentIndex=0

        while(this.getLeftChildIndex(currentIndex)<this.heap.length){
            let leftChildIndex=this.getLeftChildIndex(currentIndex)
            let rightChildIndex=this.getRightChildIndex(currentIndex)

            let index=leftChildIndex
            if(rightChildIndex<this.heap.length&&this.heap[rightChildIndex].priority>this.heap[leftChildIndex].priority){
                index=rightChildIndex
            }

            if(this.heap[index].priority>this.heap[currentIndex].priority){
                this.swap(index,currentIndex)

                currentIndex=index
            }else{
                break;
            }
        }

        
    }
    display(){
        console.log(this.heap);
    }
}

const heap=new Heap()

heap.insert("A",7)
heap.insert("B",8)
heap.insert("C",2)
heap.insert("D",0)
heap.insert("E",10)

heap.display()
