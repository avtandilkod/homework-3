'use strict';

const twoInGeorgian = 'ori';
const eInString = 'e';
const eInInteger = 3;

const buggedText = 'larag2 is a not so gr3at Programming   academy';
const correctedText = 'Laragori is a so great programming academy!';

console.log(
  buggedText
    .replace(2, 'ori')
    .replace('l', 'L')
    .replace(3, 'e')
    .replace('P', 'p')
    .replace('not so', 'so')
    .replace('  ', '') + '!'
);

console.log(correctedText);
