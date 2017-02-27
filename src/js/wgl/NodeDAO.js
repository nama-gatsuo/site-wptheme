export default class NodeDAO {
    constructor(){
        this.data = [];
        this.objs = [];
    }
    addPost(obj, date, url){
        let _d = new Date(date);
        let y = _d.getFullYear();
        let m = _d.getMonth() + 1;

        let d = {
            obj: obj, type: 0, attr: { y: y, m: m }, isActive: false, isHover: false,
            index: this.objs.length, start: obj.position.clone(), url: url
        };
        this.data.push(d);
        this.objs.push(obj);
    }
    addPage(obj, cat, url){
        let d = {
            obj: obj, type: 1, attr: { categories: cat }, isActive: false, isHover: false,
            index: this.objs.length, start: obj.position.clone(), url: url
        };
        this.data.push(d);
        this.objs.push(obj);
    }
    findObj(obj) {
        let r = this.objs.findIndex(item => {
            return item == obj;
        });
        return r;
    }
    getLength() {
        return this.data.length;
    }
    getPostsByYear(y, isActive){
        let r = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].type == 0 && this.data[i].attr.y == y) {
                r.push(this.data[i].obj);
                if (isActive) this.data[i].isActive = true;
            } else {
                continue;
            }
        }
        return r;
    }
    getPostsByMonth(y, m, isActive){
        let r = [];
        for (let i = 0; i < this.data.length; i++) {
            let d = this.data[i];
            if (d.type == 0 && d.attr.y == y && d.attr.m == m) {
                r.push(d.obj);
                if (isActive) d.isActive = true;
            } else {
                continue;
            }
        }
        return r;
    }
    getAllPosts(isActive){
        let r = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].type == 0) {
                r.push(this.data[i].obj);
                if (isActive) this.data[i].isActive = true;
            } else {
                continue;
            }
        }
        return r;
    }
    getPagesByCategory(cat, isActive){
        let r = [];
        for (let i = 0; i < this.data.length; i++) {
            let d = this.data[i];
            if (!(d.type == 1)) continue;

            let c = d.attr.categories.filter(item => {
                return item == cat;
            });
            if (c.length > 0) {
                r.push(d.obj);
                if (isActive) d.isActive = true;
            }
        }
        return r;
    }
    getAllPages(isActive){
        let r = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].type == 1) {
                r.push(this.data[i].obj);
                if (isActive) this.data[i].isActive = true;
            } else {
                continue;
            }
        }
        return r;
    }
    getAll(isActive){
        return this.objs;
    }
    getByIndex(i, isActive){
        return this.objs[i];
    }
    getActiveIndex() {
        let r = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].isActive) {
                r.push(i);
            } else {
                continue;
            }
        }
        return r;
    }
    reset() {
        let is = this.getActiveIndex();
        for (let i = 0; i < is.length; i++) {
            this.data[is[i]].isActive = false;
        }
    }
}
