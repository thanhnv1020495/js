// chi ap dung voi backtick
let userName = "Tran Van A";
let message = `Xin chao ${10 + 10}`;
console.log(message);


function reverseString (str) {
    let reversed = ""
   for (let i = str.length - 1 ; i >= 0 ; i--) {
    reversed += str[i]
   }
   return reversed
}