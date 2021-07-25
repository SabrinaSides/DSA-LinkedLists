class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    //head indicates the beginning of the list, always contains the 1st node, null b/c starting with empty list
    this.head = null;
  }

  // There can be 3 different implementations of the insert operation in a list. An item can be inserted
  // at the beginning of the list (insertFirst).
  // at the end of the list (insertLast).
  // anywhere in the list, between 2 nodes (insert, insertAt)

  insertFirst(item) {
    //create new node and point head to that new node
    this.head = new _Node(item, this.head);
  }

  // Inserting at the end of the list:
  //     Create a new node item
  //     Check to see if the list is empty, if it is, then insert the new item as the only item in the list
  //     Start at the beginning of the list and move through the list until you reach the end of the list
  //     Set the end node's next pointer to the new node
  //     The new node's next pointer is null (indicating that the new node now is the last node on the list)
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  // Retrieving values from the linked list is straightforward.
  // You can just traverse the list, comparing the value stored in each node with the value you are searching.
  // When the item is found, return the node.
  find(item) {
    //start at the head
    let currNode = this.head;
    //if list is empty:
    if (!this.head) {
      return null;
    }
    //check for the item
    while (currNode.value !== item) {
      //end of list and item wasn't found, return null
      if (currNode.next === null) {
        return null;
      } else {
        //otherwise, keep looking
        currNode = currNode.next;
      }
    }
    //found it and returned
    return currNode;
  }

  // When deleting an item, there are 3 cases that you need to consider. You can
  //     delete from the beginning of the list.
  //     delete from the end of the list.
  //     delete a node between 2 other nodes.
  remove(item){
      //if list is empty
      if(!this.head){
          return null
      }

      //if node to removed is head, make the next node head
      if(this.head === item){
          this.head = this.head.next
          return
      }

      //start at the head
      let currNode = this.head
      //keep track of previous node
      let previousNode = this.head

      while((currNode !== null) && (currNode.value !== item)){
          //save previous node
          previousNode = currNode
          currNode = currNode.next
      }
      if(currNode === null){
          console.log('Item not found')
          return
      }
      previousNode.next = currNode.next
  }

}
