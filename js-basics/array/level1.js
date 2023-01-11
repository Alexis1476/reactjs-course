// ARRAYS
// Declare an empty array;
const emptyArr = [];
// Declare an array with more than 5 number of elements
const arr = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(arr.length); // Find the length of your array

// Find the length of your array
let first = arr[0];
let middle = arr[arr.length / 2];
let last = arr[arr.length - 1];
console.log(first, middle, last);

/* Declare an array called mixedDataTypes, put different data types in the 
array and find the length of the array. The array size should be greater than 5*/
const mixedDataTypes = [1, 'x', { name: 'Alex' }, null, NaN, 5.6];
console.log(mixedDataTypes.length);

/*Declare an array variable name itCompanies 
and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon*/
let itCompanies = [
	'Facebook',
	'Google',
	'Microsoft',
	'Apple',
	'IBM',
	'Oracle',
	'Amazon',
];
console.log(itCompanies); // Print the array using console.log()
console.log(itCompanies.length); // Print the number of companies in the array
// Print the first company, middle and last company
console.log(
	itCompanies[0],
	itCompanies[Math.round(itCompanies.length / 2)],
	itCompanies[itCompanies.length - 1]
);
// Print out each company
console.log(itCompanies.join(' '));
// Change each company name to uppercase one by one and print them out
itCompanies.forEach((company) => console.log(company.toUpperCase()));
console.log(
	itCompanies.slice(0, itCompanies.length - 1).join(', ') +
		' and ' +
		itCompanies[itCompanies.length - 1] +
		' are big IT companies'
);
/* Check if a certain company exists in the itCompanies array. 
If it exist return the company else return a company is not found */
let company = 'Instagram';
console.log(
	itCompanies.indexOf(company) != -1
		? itCompanies[itCompanies.indexOf(company)]
		: 'A company is not found'
);
// Filter out companies which have more than one 'o' without the filter method
const itNewCompanies = [];
itCompanies.forEach((company) => {
	// Count the number of 'o's in the string
	const count = (company.match(/o/g) || []).length;
	if (count < 1) itNewCompanies.push(company);
});
console.log(itNewCompanies);
// Sort the array using sort() method
console.log(itCompanies.sort());
// Reverse the array using reverse() method
console.log(itCompanies.reverse());
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length - 1));
// Slice out the middle IT company or companies from the array
console.log(
	itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2)
);
// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);
// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(itCompanies.length / 2 - 1, 1));
// Remove the last IT company from the array
itCompanies.pop();
// Remove all IT companies
console.log(itCompanies.splice());
