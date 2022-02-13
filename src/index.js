module.exports = function reverse(n) {
   return String(Math.abs(n)).split('').reverse().join('');

   // let reversedString = '';
   // for (let i = String(Math.abs(n)).length - 1; i >= 0; i--) {
   //    reversedString += String(Math.abs(n))[i];
   // }
   // return reversedString;
}
