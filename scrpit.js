// 1. WAP to print table of the given number.
function table(num){
    for (let i = 0; i < 10; i++) {
        console.log(`table is : ${num * i} `);
        
    }
}
table(prompt("enter number"))

// 2. WAP to print sum of first n natural numbers.

function test(n){
    return(n * (n + 1))/ 2;
}

let n = prompt("enter number")
console.log(`${test(n)}`);

// 3. WAP to find the factorial of the given integer.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let num = prompt("Enter a number to find its factorial: ");
console.log(`The factorial of ${num} is: ${factorial(num)}`);

// 4. WAP to find all the factors of the given integer.

function facter(n){
    let facters = [];
     for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            facters.push(i)
        }
     }

     return facters
}

let data = prompt("enter number")
console.log(`facter is : ${facter(data).join(",")}`);

// 5. WAP to find weather the given integer is Prime or Not-Prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let num = prompt("Enter a number : ");

console.log(`${num} is ${isPrime(num) ? "Prime" : "Not Prime Number"}`);

// 6. WAP to print the fabonacci series of the given length

function fibonSeries(length) {
    let fibSeries = [0, 1];
    for (let i = 2; i < length; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries.slice(0, length);
}

let length = parseInt(prompt("Enter the length : "));
console.log(`The first ${length} numbers in the Fibonacci series are: ${fibonSeries(length).join(",")}`);