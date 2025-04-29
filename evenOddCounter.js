let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenCount = 0; 
let oddCount = 0; 

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount = evenCount + 1; 
  } else {
    oddCount = oddCount + 1; 
  }
}

console.log("تعداد اعداد زوج: " + evenCount);
console.log("تعداد اعداد فرد: " + oddCount);
