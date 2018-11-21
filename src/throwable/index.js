const deriveStackTrace = (error, typeName) => {
  const trace = error.stack.split('\n');

  let line = trace.shift();
  while (line && !line.includes(`at new ${typeName}`)) {
    line = trace.shift();
  }

  trace.unshift(typeName);

  return trace.join('\n');
};

const Throwable = function Throwable(parameters = {}) {
  Object.assign(this, parameters);

  this.name = this.constructor.name;
  this.stack = deriveStackTrace(new Error(), this.constructor.name);

  return this;
};

Throwable.prototype = new Error();
Throwable.prototype.constructor = Throwable;

export default Throwable;

