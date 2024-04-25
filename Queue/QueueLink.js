class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Queue{
    constructor(){
        this.front=null
        this.rear=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }

    size(){
        return this.size
    }

    peek(){
        return this.rear.value
    }

    enqueue(value){
        let node=new Node(value)

        if(this.isEmpty()){
            this.front=node
            this.rear=node
        }else{
            node.next=this.rear
            this.rear=node
        }

        this.size++;

    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }else{
            let curr=this.rear

            while(curr.next.next){
                curr=curr.next
            }
           curr.next=null
           this.front=curr
        }

        this.size--;
    }

    print(){
        if(this.isEmpty()){
            return null
        }else{
            let curr=this.rear
            let print=''
            while(curr){
               print+=`${curr.value}=>` 
               curr=curr.next
            }

            console.log(print);
        }


    }
}

let q=new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.dequeue()
q.print()