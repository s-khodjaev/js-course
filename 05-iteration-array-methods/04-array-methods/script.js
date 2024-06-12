// ForEach method
// const socials = ['facebook', 'twitter', 'youtube', 'instagram'];

// socials.forEach(function (item) {
//   console.log(item);
// });

// // Shorter version
// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// // Named functions
// function logSocial(item) {
//   console.log(item);
// }

// socials.forEach(logSocial);

// // With objects
// const socialObj = [
//   {
//     name: 'Twitter',
//     url: 'http://twitter.com',
//   },
//   {
//     name: 'Facebook',
//     url: 'http://facebook.com',
//   },
//   {
//     name: 'Youtube',
//     url: 'http://youtube.com',
//   },
//   {
//     name: 'Instagram',
//     url: 'http://instagram.com',
//   },
// ];

// socialObj.forEach((item) => console.log(item.url));

// Filter Method
// const words = [
//   'facebook',
//   'twitter',
//   'destructions',
//   'serendipity',
//   'communication',
// ];

// const result = words.filter((word) => word.length > 9);

// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// Short version
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Same with forEach
// const evenNumbers = [];
// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });

// console.log(evenNumbers);

// const companies = [
//   { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//   { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//   { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//   { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// // Get only retail companies
// const retailCompanies = companies.filter(
//   (company) => company.category === 'Retail'
// );
// console.log(retailCompanies);

// // Get companies that started in or after 1980 and ended in or before 2005
// const earlyCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.end <= 2005
// );

// console.log(earlyCompanies);

// // Get companies that lasted 10 years or more
// const longCompanies = companies.filter(
//   (company) => company.end - company.start >= 10
// );

// console.log(longCompanies);

// Map Method

// const array1 = [1, 4, 9, 16];

// const map1 = array1.map((x) => x * 2);

// console.log(map1);

// With forEach

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = [];

// numbers.forEach((number) => {
//   doubledNumbers.push(number * 2);
// });

// console.log(doubledNumbers);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Create an array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Create an array with just company and category
// Version 1
// const companyInfo = companies.map(
//   (company) => company.name + ' ' + company.category
// );
// console.log(companyInfo);

// Version 2
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

console.log(companyInfo);

// Create an array of objects with the name and the length of the company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});

console.log(companyYears);

// Chain map methods
const numbers = [1, 2, 3, 4, 5];

const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);
console.log(squareAndDouble);
