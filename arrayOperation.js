const regularArray = [2, 5, 2, 7, 1, 3, 4, 7];

let count = 0;
while (count < regularArray.length) {
  regularArray[count] += count;
  count++;
}

console.log("o array atual é:", regularArray);
