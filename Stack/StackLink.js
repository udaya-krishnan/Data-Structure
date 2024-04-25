class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
   constructor(){
    this.top=null
    this.size=0
   } 

   isEmpty(){
    return this.size===0
   }

   Push(value){
    let node=new Node(value)

    if(this.isEmpty()){
        this.top=node
        
    }else{
       node.next=this.top
       this.top=node
    }

    this.size++;
   }

   pop(){
    if(this.isEmpty()){
        return null
    }else{
        let curr=this.top
        this.top=this.top.next
        this.size--;
        return curr.value
    }

   }

   print(){
    if(this.isEmpty()){
        return null
    }else{
        let curr=this.top
        let print=``
        while(curr){
            print+=`${curr.value}=>`
            curr=curr.next
        }

        console.log(print);
    }
   }


}

let s=new Stack()

s.Push(1)
s.Push(2)
s.Push(3)
s.pop()

s.print()