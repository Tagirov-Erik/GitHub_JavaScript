var num;
num = +prompt("Input number");

getSignAndType(num);

function getSignAndType(num) {
    var intNum = Number.isInteger(num);
    var signNum = "";
    var typeNum = "";

    if (isNaN(num)) {
        console.log("Not a number.");
    } else {
        if (num < 0) {
            signNum = "negative"
        } else if (num > 0) {
            signNum = "positive"
        } else if (num == 0) {
            signNum = "zero"
        }

        if (intNum == true) {
            typeNum = "integer"
        } else{
            typeNum = "float"
        }
    }
    console.log("Number "+ num +" is " + typeNum + " and " + signNum + ".")
}
