class _Node {
    constructor(value, next){
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    insertFirst(item){
        this.head = new _Node(item, this.head)
    }

    insertLast(item){
        if(this.head === null){
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while(tempNode !== null){
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    remove(item){
        if(!this.head){
            return null
        }

        if(this.head === item){
            this.head = this.head.next
            return
        }

        let currNode= this.head
        let previousNode = this.head
        while((currNode !== null) && (currNode.value !== item)){
            previousNode = currNode
            currNode = currNode.next
        }
        if(currNode === null){
            console.log('Item not found')
            return
        }
        previousNode.next = currNode.next
    }

    find(item){
        let currNode = this.head
        if(!this.head){
            return null
        }

        while(currNode.value !== item){
            if(currNode.next === null){
                return null
            }
            else{
                currNode = currNode.next
            }
        }
        return currNode
    }
}

// display: displays the linked list
function display(list) {
    let currentNode = list.head;
    let output = "";
  
    if (!list.head) {
      return null;
    }
    while (currentNode.next !== null) {
      output += currentNode.value + ", ";
      currentNode = currentNode.next;
    }
    output += currentNode.value;
    console.log(output);
  }

function main(){

    //create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
    let SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertFirst('Boomer')
    SLL.insertFirst('Helo')
    SLL.insertFirst('Husker')
    SLL.insertFirst('Starbuck')

    //Add Tauhida to the list
    SLL.insertFirst('Tauhida')

    // Remove Husker from the list.
    SLL.remove('Husker')

    display(SLL)
}

main()