// => Flatten the array  -

// --------------------------------------------------------------------------------------
// Method 1. Using the js array.prototype.flat() method -

// const arr1 = [1, 2, 3, [3, 4, 5]];
// const arr2 = [1, 2, [3, 4, 5, [2, 4, [[5]]], 75, [6, 7, [8]]]];

// Syntax - arrObj.flat(level_of_how_much_deep_the_arrObj_is_nested)
// const flatArr1 = arr1.flat(1);
// console.log(flatArr1);

// But if you don't know how much deep the array is nested and you want to flatten the array, then we can provide Infinity as the argument to the flat() method.
// const flatArr2 = arr2.flat(Infinity);
// console.log(flatArr2);

// --------------------------------------------------------------------------------------
// Method 2. Make you own flat() function to flatten the array

// const arrForFunc1 = [1, 2, 3, [3, 4, 5]];
// const arrForFunc2 = [1, 2, [3, 4, 5, [2, 4, [[5]]], 75, [6, 7, [8]]]];

// --------------------------------------------------------------------------------------
// Method 3. Make you own flat() polyfill method -

// const arrcustom1 = [1, 2, 3, [3, 4, 5]];
// const arrcustom2 = [1, 2, [3, 4, 5, [2, 4, [[5]]], 75, [6, 7, [8]]]];

// Array.prototype.customArrayFlat = function (level) {
// 	let newArr = [];
// 	for (let item of this) {
// 		if (Array.isArray(item) && level) {
// 			let flattenedArray = item.customArrayFlat(level - 1);
// 			newArr = newArr.concat(flattenedArray);
// 		} else {
// 			newArr.push(item);
// 		}
// 	}
// 	return newArr;
// };

// const custFlatArr1 = arrcustom1.customArrayFlat(1);
// const custFlatArr2 = arrcustom2.customArrayFlat(3);

// console.log(custFlatArr1);
// console.log(custFlatArr2);
