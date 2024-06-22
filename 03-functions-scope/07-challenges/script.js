// Challenge 1

// Version 1
function getCelcius(f) {
  return Math.round(((f - 32) * 5) / 9);
}

console.log(`The temperature is ${getCelcius(89)} \xB0C`);

// Version 2
const getCelcius2 = (f) => {
  const celcius = ((f - 32) * 5) / 9;
  return Math.round(celcius);
};

console.log(`The temperature is ${getCelcius2(89)} \xB0C`);

// Challenge 2

function minMax(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 5, 6, 7, 8, 9]));

// Challenge 3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;

  console.log(output);
})(5, 2);
