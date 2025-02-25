function calculateRectangleArea(width:number , height:number):number {
    return width * height;
}

function isOdd(numb:number):boolean{
    return numb % 2 ==1;
}

function joinWithSeparator(words:string[]){
    return words.join(',');
}

console.log(calculateRectangleArea(5,10));
console.log(isOdd(5));
console.log(joinWithSeparator(["hello","world"]));