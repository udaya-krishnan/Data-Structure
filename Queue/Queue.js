class Queue{
    constructor(){
        this.items=[]
    }

    isEmpty(){
        return this.items.length===0
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        return this.items.shift()
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items);
    }
    peek(){
        if(this.items){
           return this.items[0]
        }else{
            return null
        }
    
    }

}

let q=new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.dequeue()
console.log(q.peek());
q.print()