function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype = {
    constructor: BinarySearchTree,

    add: function(value) {
        var node = {
                value: value,
                left: null,
                right: null
            },
            current;

        if (this._root === null) {
            this._root = node;
        } else {
            current = this._root;

            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }
                } else {
                    break;
                }
            }
        }
    },

    contains: function(value) {
        var found = false,
            current = this._root;

        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }

        return node;
    },

    traverse: function(process) {

        //helper function
        function inOrder(node) {
            if (node) {
                //traverse the left subtree
                if (node.left !== null) {
                    inOrder(node.left);
                }
                //call the process method on this node
                process.call(this, node);

                //traverse the right subtree
                if (node.right !== null) {
                    inOrder(node.right);
                }
            }
        }

        //start with the root
        inOrder(this._root);
    },

    remove: function(value) {

        var found = false,
            parent = null,
            current = this._root,
            childCount,
            replacement,
            replacementParent;

        //make sure there's a node to search
        while (!found && current) {

            //if the value is less than the current node's, go left
            if (value < current.value) {
                parent = current;
                current = current.left;

                //if the value is greater than the current node's, go right
            } else if (value > current.value) {
                parent = current;
                current = current.right;

                //values are equal, found it!
            } else {
                found = true;
            }
        }

        //only proceed if the node was found
        if (found) {

            //figure out how many children
            childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);

            //special case: the value is at the root
            if (current === this._root) {
                switch (childCount) {

                    //no children, just erase the root
                    case 0:
                        this._root = null;
                        break;

                        //one child, use one as the root
                    case 1:
                        this._root = (current.right === null ? current.left : current.right);
                        break;

                        //two children, little work to do
                    case 2:

                        //new root will be the old root's left child...maybe
                        replacement = this._root.left;

                        //find the right-most leaf node to be the real new root
                        while (replacement.right !== null) {
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }

                        //it's not the first node on the left
                        if (replacementParent !== null) {

                            //remove the new root from it's previous position
                            replacementParent.right = replacement.left;

                            //give the new root all of the old root's children
                            replacement.right = this._root.right;
                            replacement.left = this._root.left;
                        } else {

                            //just assign the children
                            replacement.right = this._root.right;
                        }

                        //officially assign new root
                        this._root = replacement;

                        //no default
                }

                //non-root values
            } else {

                switch (childCount) {

                    //no children, just remove it from the parent
                    case 0:
                        //if the current value is less than its parent's, null out the left pointer
                        if (current.value < parent.value) {
                            parent.left = null;

                            //if the current value is greater than its parent's, null out the right pointer
                        } else {
                            parent.right = null;
                        }
                        break;

                        //one child, just reassign to parent
                    case 1:
                        //if the current value is less than its parent's, reset the left pointer
                        if (current.value < parent.value) {
                            parent.left = (current.left === null ? current.right : current.left);

                            //if the current value is greater than its parent's, reset the right pointer
                        } else {
                            parent.right = (current.left === null ? current.right : current.left);
                        }
                        break;

                        //two children, a bit more complicated
                    case 2:

                        //reset pointers for new traversal
                        replacement = current.left;
                        replacementParent = current;

                        //find the right-most node
                        while (replacement.right !== null) {
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }

                        replacementParent.right = replacement.left;

                        //assign children to the replacement
                        replacement.right = current.right;
                        replacement.left = current.left;

                        //place the replacement in the right spot
                        if (current.value < parent.value) {
                            parent.left = replacement;
                        } else {
                            parent.right = replacement;
                        }

                        //no default
                }

            }

        }

    },

    size: function() {
        var length = 0;

        this.traverse(function(node) {
            length++;
        });

        return length;
    },

    toArray: function() {
        var result = [];

        this.traverse(function(node) {
            result.push(node.value);
        });

        return result;
    },

    toString: function() {
        return this.toArray().toString();
    },
};
