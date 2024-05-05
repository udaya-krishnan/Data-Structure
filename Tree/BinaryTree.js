class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root===null
    }

    insert(value){
        const node=new Node(value)

        if(this.isEmpty()){
            this.root=node
        }else{
            this.Insertion(this.root,node)
        }
    }

    Insertion(root,node){
        if(root.value>node.value){
            if(root.left===null){
                root.left=node
            }else{
                this.Insertion(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.Insertion(root.right,node)
            }
        }
    }


    search(root,value){

        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(root.value>value){
               return this.search(root.left,value)
            }else{
               return this.search(root.right,value)
            }
        }

    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        const queue=[]

        queue.push(this.root)

        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

   dalete(value){
    this.root=this.daleteValue(this.root,value)
   }

   daleteValue(root,value){
    if(!root){
        return root
    }
    if(root.value>value){
        root.left=this.daleteValue(root.left,value)
    }else if(root.value<value){
        root.right=this.daleteValue(root.right,value)
    }else{
        if(!root.left&&!root.right){
            return null
        }
        if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }
        root.value=this.min(root.right)
        root.right=this.daleteValue(root.right,root.value)
    }
    
    return root

   }

   
}


const bst=new BinarySearchTree()

bst.insert(8)
bst.insert(3)   
bst.insert(10)
bst.insert(1)
bst.insert(6)
bst.insert(14)
bst.insert(4)

bst.insert(7)
bst.insert(13)

// console.log(bst.search(bst.root,15))

bst.preOrder(bst.root)

console.log("In order")

bst.inOrder(bst.root)

console.log("post order")

bst.postOrder(bst.root)


console.log("level Order")

bst.levelOrder()
// console.log("Minimum value",bst.min(bst.root))
// console.log("Maximum value",bst.max(bst.root))


// bst.dalete(3)
// console.log("level");
// bst.levelOrder()

console.log("closest value",bst.closeestValue(9));