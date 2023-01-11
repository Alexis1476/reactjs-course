// 1
console.log(countries);

// 2
let text =
	'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replace(/[\.,]/g, '');
console.log(text.split(' ').length);

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// Add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat');
console.log(shoppingCart);
// Add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar');
console.log(shoppingCart);
// Modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

/* 4 In countries array check if 'Ethiopia' exists in the array 
if it exists print 'ETHIOPIA'. If it does not exist add to the countries list. */
countries.includes('Ethiopia')
	? console.log(countries[countries.indexOf('Ethiopia')])
	: countries.push('Ethiopia');

/* 5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
If it does not exist add Sass to the array and print the array. */
if (webTechs.includes('Sass'))
	console.log(webTechs[webTechs.indexOf('Sass')] + ' is a CSS preprocess.');
else {
	webTechs.push('Sass');
	console.log(webTechs);
}

/* 6. Concatenate the following two variables and store it in a fullStack variable. */
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
