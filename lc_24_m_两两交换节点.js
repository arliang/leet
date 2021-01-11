function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapNodes = function (swapHead, swapTail, swapParent) {
  // if (swapTail.next) {
    swapHead.next = swapTail.next
  // } else {
  //   swapHead.next = null
  // }
  swapTail.next = swapHead
  if (swapParent) {
    swapParent.next = swapTail
  }
  return swapHead
}
var travel = function (head) {
  let swapHead = head
  let swapTail = head.next
  let swapParent = null
  head = swapHead.next
  do {
    swapParent = swapNodes(swapHead, swapHead.next, swapParent)

    // swapHead.next = swapTail.next
    // swapTail.next = swapHead
    // if (swapParent) {
    //   swapParent.next = swapTail
    // }
    // // set next loop swapParent
    // swapParent = swapHead
  } while (swapParent && (swapHead = swapParent.next) && swapParent.next.next)
  return head
}
var creatLink = function (...args) {
  let i = 0
  let head = new ListNode(args[i])
  let tmp = head
  while (args[++i]) {
    tmp.next = new ListNode(args[i])
    tmp = tmp.next
  }
  tmp.next = null
  return head
}

var printListNode = ln => {
  let a = []
  let h = ln
  while (h) {
    a.push(h.val)
    h = h.next
  }
  console.log(a.join(' -> '))
  return a
}

printListNode(travel(creatLink(1, 2, 3, 8)))
