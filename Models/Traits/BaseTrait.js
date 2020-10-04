module.exports = function BaseTrait(...args) {
  class ExtendedClass {
    constructor(...opts) {
      for (const arg of args) {
        Object.assign(ExtendedClass.prototype, new arg(...opts));
      }
    }
  }

  for (const arg of args) {
    for (const key of Object.getOwnPropertyNames(arg)) {
      if (key === 'prototype') continue;
      ExtendedClass[key] = arg[key];
    }

    for (const key of Object.getOwnPropertyNames(arg.prototype)) {
      ExtendedClass.prototype[key] = arg.prototype[key];
    }
  }

  return ExtendedClass;
};
