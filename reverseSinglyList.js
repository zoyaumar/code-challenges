function reverseSinglyList(head) {
        let h = head
        let arr = []
        while(h != null){
            arr.push(h.val)
            h = h.next
        }
        h = head
        for(let i = arr.length-1; i >= 0; i--){
            h.val = arr[i]
            h = h.next
        }
        return head
}
