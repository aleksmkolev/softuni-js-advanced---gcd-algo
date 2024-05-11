// Define a function named gcd_two_numbers that calculates the greatest common divisor (GCD) of two numbers.
function solve(a, b) {
 let GCD = a%b
 while(GCD !== 0){
    a = b
    b = GCD
    GCD = a%b
 }

 console.log(b);
}
solve(2154, 458);