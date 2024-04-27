class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }   

    set(key,value){

        let index=this.hash(key)

        let bucket=this.table[index]

        if(!bucket){
            this.table[index]=[[key,value]]

        }else{
            let sameitem=bucket.find(item=>item[0]===key)
            if(sameitem){
                sameitem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index=this.hash(key)

        let bucket=this.table[index]
        if(bucket){
            let sameItem=bucket.find(item=>item[0]===key)
            if(sameItem){
                return sameItem[1]
            }
        }

        return undefined
    }

    remove(key){
        let index=this.hash(key)

        let bucket=this.table[index]
        if(bucket){
            let sameItem=bucket.find(item=>item[0]===key)
            if(sameItem){
                bucket.splice(bucket.indexOf(sameItem),1)
            }
        }
    }
    
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,  this.table[i]);
            }
        }
    }

}

let Hash=new HashTable(20)

Hash.set("name","ajmal")
Hash.set("mane","who")
Hash.remove("mane")
Hash.set("age",20)
console.log(Hash.get("age"));


Hash.display()