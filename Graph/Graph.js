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

    countEdge(){
        let count=0
        for(let vertex in this.adjacencyList){
            count+=this.adjacencyList[vertex].size
        }
        return count/2
    }

    searchVertex(vartex){
        if(this.adjacencyList[vartex]){
            return true
        }else{
            return false
        }
    }

    BFS(start){
        if(this.searchVertex(start)===false){
            return null
        }else{
            let visited={}
            let queue=[]
            queue.push(start)

            while(queue.length!==0){
                let currentVertex=queue.shift()
                if(!visited[currentVertex]){
                    visited[currentVertex]=true
                    console.log(currentVertex)

                    for(let vertex of this.adjacencyList[currentVertex]){
                        if(!visited[vertex]){
                            queue.push(vertex)
                        }
                    }

                }
            }
        }
    }

   
}

const graph=new Graph()

graph.addVertix(1)
graph.addVertix(2)
graph.addVertix(4)
graph.addVertix(3)

graph.addEdge(1,3)

graph.addEdge(2,4)
graph.addEdge(2,1)
graph.addEdge(1,4)

// graph.display()


// console.log(graph.hasEdge("A","C"))

// graph.removeEdge("A","B")
// console.log(graph.deleteVertex("B"))

// console.log(graph.countEdge())

graph.display()

graph.BFS(2)