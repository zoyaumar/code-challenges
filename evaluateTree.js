var evaluateTree = function(root) {
    if(!root.left)
        return root.val==1
    
    if(root.val == 2){
        root.val = evaluateTree(root.left) || evaluateTree(root.right) ? 1:0
    }
    if(root.val == 3){
        root.val = evaluateTree(root.left) && evaluateTree(root.right) ? 1:0
    }

    return root.val == 1
};
