function pow (number,index) {
  // alert('Эта программа возводит введенное вами число в указанную степень.'); ругается на alert,prompt(?!)
  // var number = prompt('Введите целое число:', '');
  // var index = prompt('Введите целый показатель степени:','');
  var result=number;
if (index > 0) {
  for (var i=0;i<index-1;i++){
    result*=number;
  }
}
else if (index==0) {
  result=1;
}
else if(index<0){
  for (var i=-1;i>index;i--){
    result*=number;
  }
  result=1/result;
}
return result;
}
var result=pow();
// console.log(result);

module.exports = pow;
