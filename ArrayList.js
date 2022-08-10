
let arr=[1,2,3];
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