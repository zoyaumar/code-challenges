function getIntersectionNode(headA, headB) {
    let mA = new Map()
    while(headA){
        mA.set(headA, true)
        headA = headA.next
    }
    while(headB){ 
        if(mA.has(headB))
            return headB
        headB = headB.next
    } 
    return null 
};
 
/* without map

    while(headB){
        let i = headA
        while(headA){
            if(headA === headB){
                return headA
            }
            headA = headA.next
        }
        headB = headB.next
        headA = i
    }
    return null  
*/ 
