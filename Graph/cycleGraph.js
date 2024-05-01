class CycleGraph{
    constructor(){
        this.cycleVertex={}
    }

    addVertex(vertex){
        if(!this.cycleVertex[vertex]){
            this.cycleVertex[vertex]=new Set
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.cycleVertex[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.cycleVertex[vertex2]){
            this.addVertex(vertex2)
        }

        this.cycleVertex[vertex1].add(vertex2)
        this.cycleVertex[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.cycleVertex){
            console.log(vertex+"=>"+[...this.cycleVertex[vertex]])
        }
    }
}

const cyclic=new CycleGraph()

cyclic.addVertex("A")
cyclic.addVertex("B")
cyclic.addVertex("C")


cyclic.addEdge("A","B")
cyclic.addEdge("B","C")
cyclic.addEdge("C","A")

cyclic.display()