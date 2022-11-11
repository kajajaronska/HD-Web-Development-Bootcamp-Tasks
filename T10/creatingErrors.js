
let basket = 0;

// Syntax/Compilation error - missing "let" keyword and incorrect indentation
        apples = 5;
let oranges = 3;
let potatoes = 2; 

// Runtime/Reference error - referencing variable, which doesn't exist
// Logical error - apples appear twice in the total
basket = apples + potatoes + apples + watermelons;

// Syntax/Compilation error - missing brackets
console.log`Your basket has total of ${basket} items. It consists of ${apples} apples, ${oranges} oranges and ${potatoes} potatoes.`;