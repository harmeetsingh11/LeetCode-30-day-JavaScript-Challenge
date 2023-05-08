/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let initCount = init;
    return {
        increment: () => {return ++initCount},
        decrement: () => {return --initCount},
        reset: () => {
            initCount = init;
            return initCount;}
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */