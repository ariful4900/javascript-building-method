// The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

const sentence = "The quick brown fox jumps over the lazy dog";

const word = "fox";

console.log(
  `The word ${word} ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
