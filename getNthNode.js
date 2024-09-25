function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  for(let i=0; i < index; i++){
    node = node.next;
  }
  if (node==null) throw new Error;
  return node;
}
