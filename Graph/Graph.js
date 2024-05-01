class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertix(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set
        }
    }//Constant Time Complexity

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertix(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertix(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }//Constant Time Complexity

    hasEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1].has(vertex2)&&
                this.adjacencyList[vertex2].has(vertex1))
    }//Constant Time Complexity

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }//Constant Time Complexity

    deleteVertex(vertex){
        if(this.adjacencyList[vertex]){
            for(let adjecentVertex in this.adjacencyList){
                this.removeEdge(vertex,adjecentVertex)
            }
           return delete this.adjacencyList[vertex]
        }else{
            return null
        }
        
    }//Depends of Adjecent vertex

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+"->"+[...this.adjacencyList[vertex]])
         }
    }
}

const graph=new Graph()

graph.addVertix("A")
graph.addVertix("B")
graph.addVertix("C")

graph.addEdge("A","B")

graph.addEdge("B","C")

graph.display()


console.log(graph.hasEdge("A","C"))

graph.removeEdge("A","B")
console.log(graph.deleteVertex("B"))


graph.display()