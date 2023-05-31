/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {

//     this keyword refers to functionon which callPolyfill is applied
//     apply- before calling that function(increment) apply context({count:1}) 
//     args- function with context and args (increment does not have args)
    return this.apply(context, args);
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */