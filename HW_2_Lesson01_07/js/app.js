/*Task 1*/
console.log("Task 1 -------------------------------------------------------------")

var arr = [];
arr = [")", "Lol", "emanresu", "olleH"];
console.log("Initial array: " + arr);

var res = "";
res = doTaskOne(arr).toString();
console.log("Result string: " + res);

function doTaskOne(arr) {
    arr.splice(1, 1);
    arr.reverse();

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').reverse().join('');
    }

    arr = arr.join(' ');
    return arr;
}

/*Task 2*/
console.log("Task 2 -------------------------------------------------------------")

var table = [];
table = [
    { name: "Tetiana", mark: 4.8, diploma: true },
    { name: "Andrew", mark: 5.0, diploma: false },
    { name: "Maria", mark: 3.6, diploma: true },
    { name: "Margo", mark: 4.8, diploma: false },
    { name: "Alex", mark: 4.9, diploma: false },
    { name: "Sergey", mark: 4.9, diploma: false },
    { name: "Anatoly", mark: 4.9, diploma: true },
]
console.log("Initial table: ");
console.log(table);

table = table.sort(compareStudentByTaskLogic).slice(0, 5);
console.log("Five best after sort: ")
console.log(table);

/**
 * Sorting function for table with students. Sort logic: mark >> diploma >> name.
 */
function compareStudentByTaskLogic(student1, student2) {
    if (student1.mark > student2.mark) {
        return -1;
    } else if (student1.mark === student2.mark) {
        if (student1.diploma > student2.diploma) {
            return -1;
        } else if (student1.diploma === student2.diploma) {
            if (student1.name < student2.name) {
                return -1;
            } else {
                return 1;
            }
        }
    }
}

/*Task 3*/
console.log("Task 3 -------------------------------------------------------------")

var arr1 = [];
arr1 = ["el-1", "el-2", "el-3", "el-8", "el-5"];
console.log("Initial array: " + arr1);

var str = "";
str = doTaskThree(arr1);
console.log("Result string: " + str);

function doTaskThree(arr) {
    let resStr = "";
    let bufStr = "";

    for (let i = 0; i < arr.length; i++) {
        bufStr = arr[i].split('');
        bufStr.splice(2, 1, ':');
        bufStr = bufStr.join('') + " (" + (i + 1) + ")";
        arr[i] = bufStr;
    }

    resStr = arr.join();
    return resStr;
}



