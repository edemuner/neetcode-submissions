/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {

        if(!head){
            return head;
        }

        let currentNode = head;
        const nodesStorage = [];
        let newHead;
        while(currentNode){
            nodesStorage.push(currentNode);
            currentNode = currentNode.next;
        }
        
        for(let i = nodesStorage.length - 1; i >= 0; i--){
            let indexNode = nodesStorage[i];
            let previousNode = nodesStorage[i - 1];
            // console.log('index', i)
            // console.log('indexNode', indexNode)
            // console.log('previousNode', previousNode)
            // console.log('_______')

            if(i === nodesStorage.length - 1){
                newHead = indexNode;
            }
            
            if(previousNode) {
                indexNode.next = previousNode;
                continue;
            }
            indexNode.next = null;
            break;
        }

        //console.log(newHead)
        return newHead
    }
}
