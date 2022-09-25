
function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFn() {
        console.log("this is a named function");
      };
}
