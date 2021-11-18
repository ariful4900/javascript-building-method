const obj = {
  prop: 42,
};

Object.freeze(obj);
obj.prop = 34;

console.log(obj.prop);
