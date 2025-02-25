"use strict";
function calculateRectangleArea(width, height) {
    return width * height;
}
function isOdd(numb) {
    return numb % 2 == 1;
}
function joinWithSeparator(words) {
    return words.join(',');
}
console.log(calculateRectangleArea(5, 10));
console.log(isOdd(5));
console.log(joinWithSeparator(["hello", "world"]));
