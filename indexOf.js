// The indexof() method returns the index within th ecalling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found

const paragraph =
  "The quick brown fox jumps over the lazy dog. if the dog barked, was it really lazy?";

const srchTerm = "dog";

const idxofFirst = paragraph.indexOf(srchTerm);

console.log(idxofFirst + 1);
