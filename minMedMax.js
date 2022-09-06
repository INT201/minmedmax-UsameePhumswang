const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  if(n1<n2 && n1<n3 && n2<n3){
    return {min:n1,mid:n2,max:n3}//1
  }else if(n1<n2 && n1<n3 && n2>n3){
    return {min:n1,mid:n3,max:n2}//2
  }else if(n1>n2 && n1>n3 && n2>n3){
    return {min:n3,mid:n2,max:n1}//3
  }else if(n1>n2 && n1<n3 && n2>n3){
    return {min:n3,mid:n1,max:n2}//4
  }else if(n1>n2 && n1>n3 && n2<n3){
    return {min:n2,mid:n3,max:n1}//5
  }else if(n1>n2 && n1<n3 && n2<n3){
    return {min:n2,mid:n1,max:n3}//6
  }else if(n1==n2 && n1==n3 && n2==n3){
    return {min:n1,mid:n2,max:n3}//7
  }else if(n1==n2 && n1<n3){
    return {min:n1,mid:n2,max:n3}//8
  }else if(n1==n3 && n1<n2){
    return {min:n1,mid:n3,max:n2}//9
  }else if(n2==n3 && n3<n1){
    return {min:n2,mid:n3,max:n1}//10
  }else if(n2==n3 && n3>n1){
    return {min:n1,mid:n2,max:n3}//11
  }
}
module.exports = minMedMax
