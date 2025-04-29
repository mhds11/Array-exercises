let array = [1, 3, 7, 8, 5, 10];
let limit = 6;

for (let value of array) {
  if (value > limit) {
    console.log(value); 
    break; 
  }
}
