// The Number.isNaN() method determines whether the passed value is NaN and its type is Number. It is more robust version of the original, global isNaN();

function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return "Number NaN";
  } else {
    return "NaN";
  }
}

console.log(typeOfNaN("100"));

console.log(typeOfNaN(NaN));
