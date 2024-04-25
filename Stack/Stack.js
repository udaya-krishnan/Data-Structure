class Stack{
    constructor(){
        this.items=[]
    }

    push(value){
        this.items.push(value)
    }

    pop(){
        this.items.pop()
    }

    size(){
        return this.items.length
    }

    isEmpty(){
        return this.items.length===0
    }

    print(){
        console.log(this.items);
    }

    peek(){
        return this.items[0]
    }

}


let s=new Stack()

s.push(1)
s.push(2)
s.push(3)
s.pop()
s.print()
