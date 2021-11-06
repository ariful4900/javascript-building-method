// The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwords from fromIndex. Returns -1 if the value is not found.

const paragraph =
  "The quick brown fox jumps over the lazy dog. if the dog barked, was it really lazy?";

const srchTerm = "dog";

const idxofFirst = paragraph.lastIndexOf(srchTerm);

console.log(idxofFirst);
