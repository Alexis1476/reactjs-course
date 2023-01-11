const products = [
	{ product: 'banana', price: 3 },
	{ product: 'mango', price: 6 },
	{ product: 'potato', price: ' ' },
	{ product: 'avocado', price: 8 },
	{ product: 'coffee', price: 10 },
	{ product: 'tea', price: '' },
];

// 1. Print the price of each product using forEach
products.forEach((product) => {
	console.log(product.price);
});

// 2. Print the product items as follows using forEach
products.forEach(({ product, price }) => {
	let msg = Number.isInteger(price) ? `${price} euros.` : 'unknown';
	console.log(`The price of ${product} is ${msg}`);
});

// 3. Calculate the sum of all the prices using forEach
let sum = 0;
products.forEach((product) => {
	sum += product.price;
});
console.log(sum);

// 4. Create an array of prices using map and store it in a variable prices
let prices = products.map((product) => product.price);
console.log(prices);

// 5. Filter products with prices
let filteredProducts = products.filter((product) =>
	Number.isInteger(product.price)
);

// 6. Use method chaining to get the sum of the prices(map, filter, reduce)
let sumOfPrices = products
	.map((product) => product.price)
	.filter((price) => Number.isInteger(price))
	.reduce((total, price) => total + price);
console.log(sumOfPrices);

// 7. Calculate the sum of all the prices using reduce only
let sumOfPrices2 = products.reduce((total, product) => {
	if (Number.isInteger(product.price)) return total + product.price;
	return total;
}, 0); // 0 Initial value is 0
console.log(sumOfPrices2);

// 8. Find the first product which doesn't have a price value
console.log(products.find((product) => !Number.isInteger(product.price)));

// 9. Find the index of the first product which does not have price value
console.log(products.findIndex((product) => !Number.isInteger(product.price)));

// 10. Check if some products do not have a price value
console.log(products.some((product) => !Number.isInteger(product.price)));

// 11. Check if all the products have price value
console.log(products.every((product) => Number.isInteger(product.price)));

// 12. Explain the difference between forEach, map, filter and reduce
/*
forEach = Fait une itération sur chaque élément d'un tableau, elle est utilisé quand
on s'intérese à l'item ou à l'index du tableau
filter = Filtre un tableau avec une fonction callback qui retourne un boolean
map = Modifie le tableau et en crée une copie
*/

// 13. Explain the difference between filter, find and findIndex
/*
filter = Filtre un tableau avec une fonction qui retourne un boolean
find = Retourne le premier élément d'un tableau qui accomplit une condition
findIndex = Retourne l'index du premier élément d'un tableau qui accomplit une condition
*/

// 14. Explain the difference between some and every
/*
some = Vérifie si au moins un élément du tableau accomplit une condition.
every = Vérifie si tous les éléments du tableau accomplissent une condition.
*/