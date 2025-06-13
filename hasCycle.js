/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let store = new Set()
    while(head){
        store.add(head, 1)
        if(store.has(head.next))
            return true
        head=head.next
    }
    return false
};
