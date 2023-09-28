console.log("connec");

// Function to separate even and odd numbers
function separate(type, data) {
    let result = [];
    for(let i = 0; i < data.length; i++) {
        if(type === "even" && data[i] % 2 === 0) {
            result.push(data[i]);
        } else if(type === "odd" && data[i] % 2 !== 0) {
            result.push(data[i]);
        }
    }
    return result;
}


// Function to sort the data
function sortMyData(data) {
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data.length - i - 1; j++) {
            if(data[j] > data[j + 1]) {
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    return data;
}


// lets test it 
let data = [ 1,763,34,5,346,457,65,546,75,35,14,6,6434,12,4,54,324,452]


// Separate and sort even numbers  results
let evenNumbers = separate("even", data);
evenNumbers = sortMyData(evenNumbers);
// console.log("Sorted Even Numbers: ", evenNumbers);

// Separate and sort odd numbers  results
let oddNumbers = separate("odd", data);
oddNumbers = sortMyData(oddNumbers);
// console.log("Sorted Odd Numbers: ", oddNumbers);



/// another way to find the even numbers and odd numbers
// make an attay of integers and  make an array of odd numbers and make an array of even numbers  and  push them into the array of  integers use while loop


let intArr = [ 1,763,34,5,346,457,65,546,75,35,14,6,6434,12,4,54,324,452]
let oddArr = [];
let evenArr = [];

while (true) {
    if (intArr.length === 0) {
        break;
    }
    if (intArr[0] % 2 === 0) {
        evenArr.push(intArr.shift());
    } else {
        oddArr.push(intArr.shift());
    }
}

console.log(`this is even array\n: ${evenArr}`);
console.log(`this is odd array\n: ${oddArr}`);


// now to sort themm without using sort
// let's ues bubble sort

function bubbleSort(array){
    for(let i = 0; i < array.length; i++) {
            for(let j = 0; j < array.length - i -1; j++) {
                if(array[j] > array[j + 1]) {
                    [array[j], array[j+ 1]]  = [array[j +1], array[j]];
                }
            }
        }
        return array;
}

console.log("this is bubble sorted of an even array:"+ bubbleSort(evenArr));
console.log("this is bubble sorted of an odd array:"+ bubbleSort(oddArr));