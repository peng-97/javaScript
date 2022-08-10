let obj={
        name:"张三",
        sex:1,
        age:25
}
Object.prototype.Remove=function (prefunc){
        console.log(this)
}
obj.Remove()