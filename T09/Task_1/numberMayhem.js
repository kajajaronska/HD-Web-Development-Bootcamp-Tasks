/////////////////////////////////////////////////////////////////
// While loop that displays count down from 20 to 0

let i = 20;
while(i >= 0) {
    console.log(i);
    i--;
}

console.log("");
/////////////////////////////////////////////////////////////////
// Loop that will display all the even numbers between 1 and 20.

let j = 1;
while (j <= 20) {
    if(j % 2 === 0) {
        console.log(j);
    }

    j++;
}

console.log("");
/////////////////////////////////////////////////////////////////
/* Loop that will create the following output:

*
**
***
****
*****

*/

let output = "";

for (let row = 1; row <= 5; row++) {
    output += "*"
    console.log(output);
}
