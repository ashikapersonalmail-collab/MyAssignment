let string = "Testleaf"
var rev =''
// loop to count the value in reverse 
for (let index = string.length-1; index >= 0; index--) {
    // revstring
    rev = rev+string[index]
 // console.log(rev);
    
}
console.log(rev);

let reverse =string.split("").reverse().join("")
console.log(reverse);
