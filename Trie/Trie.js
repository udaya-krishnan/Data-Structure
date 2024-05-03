class TrieNode {
  constructor() {
    this.children = new Map();
    this.endWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }

      node = node.children.get(char);
    }
    node.endWord = true;
  }

  search(word) {
    let node = this.root
    for(let char of word){
        if(!node.children.has(char)){
            return false
        }

        node=node.children.get(char)
    }
    return node.endWord
  }

  remove(word){

    if(!this.search(word)){
        return false
    }
    this.removeHelper(this.root,word,0)
  }

  removeHelper(node,word,depth){
    if(word.length===depth){
        if(node.endWord){
            node.endWord=false
        }
    }

    let char=word[depth]
    if(!node.children.has(char)){
        return false
    }
    

    let nodeNext=node.children.get(char)
    this.removeHelper(nodeNext,word,depth+1)
  }

  display(){
    console.log(this.root.children);
  }
}

const trie=new Trie()

trie.insert("udayan")
trie.insert("ashik")
trie.insert("sameen")

trie.display() 