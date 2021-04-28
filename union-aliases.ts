type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combineAges = combine(40, 45, 'as-number');
const combineAgesString = combine('35', '45', 'as-number');
const combineNames = combine('hamed', 'ghazali', 'as-string');

console.log(combineAges);
console.log(combineNames);
console.log(combineAgesString);
