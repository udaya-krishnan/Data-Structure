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

    delete(value){
        this.root=this.deleteValue(this.root,value)
    }

    deleteValue(root,value){
        if(root===null){
            return null
        }
        if(value<root.value){
            root.left=this.deleteValue(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteValue(root.right,value)
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

            root.right=this.deleteValue(root.right,root.value)
        }
        return root
    }

}



const bst=new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.search(bst.root,15))

bst.preOrder(bst.root)

console.log("In order")

bst.inOrder(bst.root)

console.log("post order")

bst.postOrder(bst.root)


console.log("level Order")

bst.levelOrder()
console.log("Minimum value",bst.min(bst.root))
console.log("Maximum value",bst.max(bst.root))
