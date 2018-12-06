interface INode {
    data: any,
    next: object | null
}
type nodeWithNull = LinkNode | null;
// 这里Node和JS DOM中声明的Node重复了
class LinkNode implements INode {
    data: any;
    next: nodeWithNull;
    constructor(data: any, next: nodeWithNull) {
        this.data = data;
        this.next = next;
    }
}
class SingleLinkList {
    head: LinkNode;
    constructor() {
        this.head = new LinkNode(null, null);
    }
    // 这里的长度没有算上头结点
    get length(): number {
        let i: number = 0,
            p: nodeWithNull = this.head;
        while(p.next !== null) {
            p = p.next;
            ++i;
        }
        return i;
    }
    find(data: any): nodeWithNull {
        let p: nodeWithNull = this.head;
        while(p && p.data !== data) {
            p = p.next;
        }
        if(!p) {
            throw new Error(`${data}不存在`);
        }
        return p;
    }
    // 这里除去了头结点，从第一个结点开始查找
    findAt(position: number): nodeWithNull {
        let i: number = 0, 
            p: nodeWithNull = this.head;
        if (position <= 0) {
            throw new Error("position不能为非正值");
        }
        while(i < position && p) {
            p = p.next;
            ++i;
        }
        if(!p) {
            throw new Error(`${position}不存在节点`);
        }
        return p;
    }
    // 这里不在循环的时候比较长度，只在循环结束后判断p是否为null
    // todo: 需要判断是否在尾部
    insert(position: number, data: any): LinkNode {
        if (position < 0) {
            throw new Error("position不能取负值");
        }
        const newNode = new LinkNode(data, null);
        let i: number = 0,
            p: nodeWithNull = this.head; 
        while(i < (position-1) && p) {
            p = p.next;
            ++i;
        }
        // 如果p是null，那么就超出单链表长度
        if (p === null) {
            throw new Error("超出链表长度");
        }
        newNode.next = p.next;
        p.next = newNode;
        return newNode;
    }
    delete() {

    }
}