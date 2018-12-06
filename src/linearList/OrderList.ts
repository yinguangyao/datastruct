// 线性表的顺序储存结构
// 线性表读取数据时，时间复杂度为O(1)，删除插入的时候为O(n);
class OrderList {
    private MAXSIZE: number = 20;
    private listLen: number;
    public list: any[] = Array(this.MAXSIZE);

    public constructor(listLen: number) {
        this.listLen = listLen;
    }
    public init(items: any[] = []): any[] {
        items.forEach((item: any, index: number): void => {
            this.list[index] = item;
        })
        return this.list;
    }
    public findItem = (item: any): number => {
        let i;
        if ((i = this.list.indexOf(item)) >= 0) {
            return i;
        }
        return -1;
    }
    public clearList = () => {
        this.list = [];
        this.listLen = 0;
    }
    public getItem = (i: number): any[] => {
        return this.list[i];
    }
    public insert = (i: number, item: any): void => {
        let j = i;
        if (this.listLen === this.MAXSIZE) {
            throw new Error("线性表已满");
        }
        if (i < 0 || i > this.listLen) {
            throw new Error("i is illegal")
        }
        this.listLen++;
        while(j < this.listLen-1) {
            this.list[j+1] = this.list[j];
            j++;
        }
        this.list[i] = item;
        console.log("insert success!", this.list);
    }
    public delete = (i: number): void => {
        if (i < 0 || i > this.listLen) {
            throw new Error("删除位置不合理");
        }
        this.list[i] = undefined;
        while(i < this.listLen-1) {
            this.list[i] = this.list[i+1];
            i++;
        }
        delete this.list[i];
        this.listLen--;
        console.log("delete success", this.list);
    }
}
export default OrderList;