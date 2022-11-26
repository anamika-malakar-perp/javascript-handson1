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

const Calculator = (A, B, C) => 
{
    switch(A) {
        case '+':
        return B + C;
        case '-':
        return B - C;
        case '*':
        return B * C;
        case '/':
        return B / C;
    }
}

console.log('9.Operation in calculator',Calculator('*', 5, 2));

const Check_divisibility = (N) => {
    if(N%6 == 0 && N%9 == 0) {
        return 'Divisible by both';
    } else if(N%6 != 0 && N%9 != 0){
        return 'Not Divisible by both';
    } else if(N%6 == 0) {
        return 'Divisible by 6';
    } else {
        return 'Divisible by 9';
    }
};

console.log('10.Check divisibility by 9 and 6',Check_divisibility(81));

const isEligible = (a) => {
    if(a >= 18) {
        return 'Eligible for Voting';
    } else {
        return 'Not Eligible for Voting';
    }
};

console.log('11.Voting eligibility test',isEligible(13));

const findRelation = (x,y) => {
    if(x < y) {
        return x + 'is smaller than' + y;
    } else if(x > y) {
        return x + 'is greater than' + y;
    } else {
        return x + 'is equal to' + y;
    }
};

console.log('12.The relation between two numbers', findRelation(3, 11));

const findGrades = (a) => {
    switch(a <= 50) {
        case(a <= 10):
            return 'E';
        case (a >= 11 && a <= 20): 
            return 'D';
        case (a >= 21 && a <= 30): 
            return 'C';
        case (a >= 31 && a <= 40): 
            return 'B';
        case (a >= 41 && a <= 50): 
            return 'A';
    }
};

console.log('13.To find the grades according to marks', findGrades(51));

const getValue = (a) => {
    switch(a) {
        case 'P':
        case 'p':
            return 'PerpBytes';
        case 'Z':
        case 'z':
            return 'Zenith';
        case 'E':
        case 'e':
            return 'Expert Coder';
        case 'D':
        case 'd':
            return 'Data Structure';
    } 
}; 

console.log('14.Get value from table',getValue('E'));

const Max_out_of_three = (A,B,C) => {
    
    if(A == B && B == C) {
        return '-1';
    } else if( A > B && A> C) {
        return A;
    } else if(B > A && B > C){
        return B;
    } else {
        return C;
    }
};

console.log('15.Largest number among three numbers',Max_out_of_three(3, 3, 3));


const Triangle_Check = (A,B,C) => {
    if(A > 90 || B < 90 || C < 90) {
        return 'obtuse';
    } else if(A < 90 && B < 90 && C < 90) {
        return 'acute';
    }
};

console.log('17.What type of triangle checking',Triangle_Check(60, 100, 20));
