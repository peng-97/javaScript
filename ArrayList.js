
let arr=[{name:"zhangsan",age:20},{name:"lisi",age:25},{name:"wanger",age:23}];
Array.prototype.ForEach=function (callback){
    for (let i = 0; i < this.length; i++) {
         callback(this[i],i,this)
    }
}
Array.prototype.Map=function (callback){
    let returnList=[];
    for (let i = 0; i < this.length; i++) {
        returnList.push(callback(this[i],i,this))
    }
    return returnList;
}
Array.prototype.Remove=function (prefunc){
    for (let i = 0; i <this.length ; i++) {
         let result=prefunc(this[i],i);
      //  if(result){
         if ( result && typeof (result)=="boolean"){
              this.splice(i,1);
              i--;
         }
    }
}

Array.prototype.Exists=function (prefunc){
    let flag=false;
    for (let i = 0; i <this.length ; i++) {
        let result=prefunc(this[i],i);
        if ( result && typeof (result)=="boolean") {
            flag = true;
            break;
        }
    }
    return flag;
}

Array.prototype.Sort=function (prefunc){
    if (this.length==0){
        return this;
    }
    for (var i = 0; i < this.length - 1; i++) {
        for (var j = 0; j <this.length - i - 1; j++) {
            let sort=(prefunc && typeof(prefunc)=="function") ? prefunc(this[j],this[j+1])>0 :this[j]>this[j+1]
            if (sort){
                var temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp
            }
        }
    }
}

// arr.Sort((a,b)=>{return a.age-b.age})
// console.log(arr)
