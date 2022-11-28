let printValuesOf = (jsObject, keys) => {
  // Bug 4 identified: condition includes one too many iteration due to the "<=" sign;
  // Updating "<="" to "<""
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    // Bug 2 identified: k is not defined; updating with "key"
    console.log(jsObject[key]);
  }
}

let simpsonsCatchphrases = {
  lisa: 'BAAAAAART!',
  bart: 'Eat My Shorts!',
  marge: 'Mmm~mmmmm',
  // Bug 1 identified: backslash added to enable use of a single quotation mark
  homer: 'd\'oh!',
  maggie: '(Pacifier Suck)',
};

// Bug 3 identified: second parameter "keys" should be an array for the loop to work
printValuesOf(simpsonsCatchphrases, ['lisa', 'bart', 'homer']);

// Expected console output:

// BAAAAAART!
// Eat My Shorts!
// d'oh!

// Returns undefined