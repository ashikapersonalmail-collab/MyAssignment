//Write the JS program to print duplicates in an array.
let num=[56,78,90,23,90,76,43,56]
for (let index = 0; index < num.length; index++) {
    
   // console.log(index);
  // let found = false
    
    for (let index1 = index+1; index1 < num.length; index1++) {
       if (num[index]===num[index1]) {
        console.log(num[index]);
        break
       }

    }

    
    
}