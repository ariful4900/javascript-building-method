const object = {
  prop: 40,
};

Object.seal(object);

object.prop = 23;

delete object.prop;
console.log(object);
