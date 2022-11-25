// Using Euclid's algorithm to solve this problem. Found on https://en.wikipedia.org/wiki/Greatest_common_divisor#Calculation. 
// Euclid's method for computing the greatest common divisor of two positive integers consists of replacing the larger number
// by the difference of the numbers, and repeating this until the two numbers are equal: that is their greatest common divisor.

let GCDRecursion = (x,y) => {
    // Base case: when x equals y then we found our GCD 
    if (x === y) {
        return x;
    } else {
        // Replacing higher number with the difference of both numbers
        if(x > y) {
            x = x - y;
        } else {
            y = y - x;
        }
        // Recursive call
        return GCDRecursion(x,y);
    }

}

console.log(GCDRecursion(5,10));