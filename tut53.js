console.log("This is a sample tutorial javascript file");
function greet(name, greettext = "Greeting from  Javascript") {
    console.log(greettext + " " + name)
    console.log(name + " is not good boy");
}

function greater(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is greater than" + num2);
    }
    else if (num1 < num2) {
        console.log(num1 + " is smaller than" + num2);
    }
    else {
        console.log("Given number are equal");

    }
}


num1 = prompt("Enter the num1 value :");
num2 = prompt("Enter the num2 value :");
greater(num1, num2);

let name0 = "Harry";
let name1 = "Ansh";
let name2 = "Vaibhav";
let name3 = "Robin";
greettext = "Good Morning";
console.log(name0 + " is a good boy");
console.log(name1 + " is a good boy");
console.log(name2 + " is a good boy");
console.log(name3 + " is a good boy");
greet(name0, greettext);
greet(name1, greettext);
greet(name2, greettext);
greet(name3);