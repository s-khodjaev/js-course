const d = new Date(2024, 3, 30, 8, 0, 0);
const hour = d.getHours();
const month = d.getMonth();

console.log(month);

if (hour < 12) {
  console.log('Good morning');

  if (hour === 8) {
    console.log('wake up!');
  }
}

switch (month) {
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  case 3:
    console.log('March');
    break;
  default:
    console.log('Error');
}

switch (true) {
  case hour < 12:
    console.log('Good Morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good Evening');
}
