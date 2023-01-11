// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log('Min : ' + ages[0] + ' and max: ' + ages[ages.length - 1]);
console.log('Middle : ' + ages[ages.length / 2]);

// Average age
let average = 0;
ages.forEach((age) => (average += age));
average = average / ages.length;
console.log(`Average : ${average}`);

// Range max - min
console.log(`Range max - min : ${ages[ages.length - 1] - ages[0]}`);

// Compare the value of (min - average) and (max - average) use abs() method
console.log('Min - average : ' + Math.abs(ages[0] - average));
console.log('Max - average : ' + Math.abs(ages[ages.length - 1] - average));

// Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));

// Find the middle country(ies) in the countries array
if ((countries.length / 2) % 2) {
	console.log(
		countries[Math.round(countries.length / 2)] +
			' ' +
			countries[Math.round(countries.length / 2 - 1)]
	);
} else {
	// % 2
	console.log(countries[countries.length / 2]);
}

/* Divide the countries array into two equal arrays if it is even. 
If countries array is not even , one more country for the first half.*/
if ((countries.length / 2) % 2) {
	// If it's not even
	let mid = Math.round(countries.length / 2);
	let first = countries.slice(0, mid);
	let second = countries.slice(mid);
} else {
	let first = countries.slice(0, countries.length / 2);
	let second = countries.slice(countries.length / 2);
}
