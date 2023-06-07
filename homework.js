'use strict';

function BinarioADecimal(num) {
   var numStrign = num.toString();
   var listString = numStrign.split("");
   var listNums = listString.map((letra) => {
      return Number(letra);
   })
   var listNumsRevers = listNums.reverse();
   var result = 0;
   for(var i = 0; i < listNumsRevers.length; i++){
      var numero = listNumsRevers[i];
      var multiplicacion = numero * (2 ** i)
      result = result + multiplicacion;
   }
   return result;
}

function DecimalABinario(num) {
   if(num <= 0 ){
      return "Debes ingresar un numero positivo mayor a 0"
  }
  var binario = [];
  while( num > 0){
      binario.unshift(num % 2);
      num = Math.floor(num / 2);
  }
  var final = binario.join("");
  return final;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
