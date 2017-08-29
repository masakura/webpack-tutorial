var Foo = function () {};

Foo.prototype.output = function () {
  console.log('Hello!');
};

var foo = new Foo();
foo.output();
