class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
    }

    insertLast(data) {
        let node = new Node(data)
        let current

        if (!this.head) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return
        }

        if (index === 0) {
            this.head = new Node(data, this.head)
            return
        }

        let node = new Node(data, this.head)
        let current, prev

        // set current to first
        current = this.head
        let count = 0

        while (count < index) {
            // node before index
            prev = current
            count++
            // node after index
            current = current.next
        }

        node.next = current
        prev.next = node
        this.size++
    }

    getAt(index) {
        let current = this.head
        let count = 0

        while (current) {
            if (count === index) {
                console.log(current.data)
            }
            count++
            current = current.next
        }
        return null
    }

    removeAt(index) {
        if (index > 0 && index > this.size) {
            return
        }
        let current = this.head
        let prev
        let count = 0

        // remove first
        if (index === 0) {
            this.head = current.next
        } else {
            while (count < index) {
                count++
                prev = current
                current = current.next
            }
            prev.next = current.next
        }
        this.size--
    }

    clearList() {
        this.head = null
        this.size = 0
    }

    printListData() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const ll = new LinkedList()
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
ll.insertAt(500, 2)
ll.printListData()
ll.getAt(2)

// let obj3 = {
//     head: {
//         data: 300,
//         size: 2,
//         next: {
//             head: {
//                 data: 200,
//                 next: {
//                     data: 100,
//                     head: null
//                 }
//             }
//         }
//     }
// }
