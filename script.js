// 1. Print odd numbers in an array.
//anonymous:
let a =[1,2,3,4,5,6,7,8,9,10];
let b = function(){
    for(var i = 0 ; i< a.length ; i++){
          if(a[i]%2!=0){
             console.log(a[i]);
     }
  }
}
b();

//IIFE:
(function(a){
    for(var i = 0 ; i< a.length ; i++){
               if(a[i]%2!=0){
                  console.log(a[i])
               } 
          }
    })([1,2,3,4,5,6,7,8,9,10]);

//arrow:
let a =[1,2,3,4,5,6,7,8,9,10];
let b = () => {
    for(var i = 0 ; i< a.length ; i++){
          if(a[i]%2!=0){
             console.log(a[i]);
     }
  }
}
b();

//2. Convert all the strings to tittle caps in a string array
//anonymous:
let str="converting string to tittle case";
let b=function () {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
   return str.join(' ');
  }
  console.log(b());

//IIFE:
(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
   console.log(str.join(' '));
  })
  ("converting string to tittle case");

  //arrow:
  let str="converting string to tittle case";
  let b=()=> {
  str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
   return str.join(' ');
  }
  console.log(b());

//3. Sum of all numbers in an array
//anonymous:
let a = [1,2,3,4,5]
let b = a.reduce(function(x,y){
    return x+y;
},)
console.log(b);

//IIFE:
(function (a){
   let b= a.reduce(function(x,y){
   return x+y;
});
console.log(b);
})([1,2,3,4,5]);

//arrow:
let a = [1,2,3,4,5]
let b = a.reduce((x,y) => {
    return x+y;
},)
console.log(b);

//4. Return all prime numbers in an array.
//anonymous:
let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,977,975,6997]
let b=function(){
    numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
}
    return true;
});
    console.log(numArray);
}
b();

//IIFE:
(function(numArray){
    numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
        return true;
    });
       console.log(numArray);
})([1,2,3,4,5,6,7,8,9,10,11,12,13,977,975,6997])

//arrow:
let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,977,975,6997]
let b=()=>{
    numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
}
    return true;
});
    console.log(numArray);
}
b();

//5. Return all the palindromes in an arry.
//anonymous:
let arr = ['level', 'hello', 'radar', 'world', 'deified', 'javascript','404','1561','15651','576'];
let b = function findPalindromesInArray() {
    const palindromes = arr.filter(str =>
    {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
    }
    );
console.log(palindromes);
}
b();

//IIFE:
(function findPalindromesInArray(arr) {
    const palindromes = arr.filter(str =>
    {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
    });
console.log(palindromes);
})
(['level', 'hello', 'radar', 'world', 'deified', 'javascript','404','1561','15651','576']);

//arrow:
let arr=['level', 'hello', 'radar', 'world', 'deified', 'javascript','404','1561','15651','576'];
let b = () => {
    const palindromes = arr.filter(str =>
    {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
    });
    return palindromes;
    }
console.log(b());

// 6. Return median of two sorted arrays of the same size.
function findMedianSortedArrays(nums1, nums2) {
    const merge = [...nums1, ...nums2].sort();
    const n = merge.length;
    if (n % 2 === 0) {
        const mid = n / 2;
        return (merge[mid - 1] + merge[mid]) / 2;
    } else {
        const mid = Math.floor(n / 2);
        return merge[mid];
    }
}
const nums1 = [1, 3, 5];
const nums2 = [2, 4];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median);

//7. Remove duplicates from an array.
//anonymous:
let arr = [1,1,2,3,4,3,5,8,8,7,9,4];
let b=function(){
        let dup = [...new Set(arr)];
        console.log(dup);
    }
    b();

//IIFE:
(function(arr){
    let d = [...new Set(arr)];
    console.log(d);
   })([1,1,2,3,4,3,5,8,8,7,9,4])

//8. Rotate an array by k times.
function rotateRight(arr, k) {
    k = k % arr.length;
    if (k < 0) {
        k = arr.length + k; 
    }
    const rotatedArray = [];
    for (let i = 0; i < arr.length; i++) {
        const newIndex = (i + k) % arr.length;
        rotatedArray[newIndex] = arr[i];
    }
    return rotatedArray;
}
const originalArray = [1, 2, 3, 4, 5];
const k = 2; 
const rotatedArray = rotateRight(originalArray, k);
console.log(rotatedArray); 
