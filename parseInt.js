function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

// console.log(roughScale("0xf", 16));

console.log(roughScale("321", 2));
