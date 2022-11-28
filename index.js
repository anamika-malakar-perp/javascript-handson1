const AddTwoNumbers = (a,b) => {
    return a + b;
};

console.log('1.sum of two numbers',AddTwoNumbers(2, 5));

const Is_Valid = (a,b) => {
    return ((a < 10) && (a > b))
};

console.log('2.conditions is valid',Is_Valid(5, 3));

const Check = (A, B) => 
{
    if(A%10 == 0 && B%10 == 0) {
        return true;
    } else if(A%10 != 0 && B%10 != 0) {
        return false;
    } else if(A%10 == 0 || B%10 == 0) {
        return true;
    }
};

console.log('3.Checking conditions',Check(12, 20));

const First_Digit = (n) => {
    let firstDigit = n /1000;
    let digit = firstDigit.toString();
    let array = digit.split('.')
    return +array[0];
};

console.log('4.Get first digit from four digit number',First_Digit(4567));

const Last_Digit = (n) => {
    var lastDigit = n % 1000;
    var lastDigit = lastDigit % 100;
    var lastDigit = lastDigit % 10;
    return lastDigit;
};

console.log('5.Get last digit from four digit number',Last_Digit(4567));

const Find_the_remainder = (a,b) => {
    let remainder = b % a;
    return remainder;
};

console.log('6.Remainder of given number',Find_the_remainder(2, 9));

const Multiply_two_number = (a,b) => {
    let multiply = a * b;
    return multiply
};

console.log('7.Multiplication of two number',Multiply_two_number(2, 5));

const Sum = (A, B, C) => 
{
    let totalMarks = A + B + C;
    return totalMarks;
};

const Average = (A, B, C) => 
{
    let average = Sum(A, B, C) / 3;
    return average;
};

console.log('8.Sum of marks',Sum(50, 20, 100));
console.log('8.Average of marks',Average(50, 20, 100));

