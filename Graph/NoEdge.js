class NoEdgeGraph{
    constructor(){
        this.noEdgeVertex={}
    }

    addVertex(vertex){
        if(!this.noEdgeVertex[vertex]){
            this.noEdgeVertex[vertex]=new Set
        }
    }

    removeVertex(vertex){
        if(this.noEdgeVertex[vertex]){
            delete this.noEdgeVertex[vertex]
        }
    }

    countVertex(){
        let count=0
        for(let vertex in this.noEdgeVertex){
            count++
        }

        return count
    }

    vertexExist(vertex){
        if(this.noEdgeVertex[vertex]) {
            return true
        }else{
            return false
        }
    }


    display(){
        for(let vertex in this.noEdgeVertex){
            console.log(vertex)
        }
    }


}

const neg=new NoEdgeGraph()

neg.addVertex("A")
neg.addVertex("B")
neg.addVertex("C")
neg.addVertex("D")

// neg.removeVertex("B")
console.log(neg.vertexExist("R"));

console.log(neg.countVertex())

neg.display()