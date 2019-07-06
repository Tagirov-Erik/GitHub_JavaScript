var array = [100, "Hello", 'o', 100, "o", 'o', undefined, "Hell", 123];
var resArray = [];
var element = "";
var j = 0;
var i = 0;

while (i < array.length) {
    element = array.splice(0, 1)[0];
    if (array.every(function (item) { return item != element })) {
        resArray[j] = element;
        j++;
    }
    array.push(element);
    i++;
}

console.log("Initial array: ")
console.log(array);
console.log("Unique elements in initial array: ");
console.log(resArray);