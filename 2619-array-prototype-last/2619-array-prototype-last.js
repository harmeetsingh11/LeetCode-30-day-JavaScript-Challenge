Array.prototype.last = function() {
    return this.length === 0 ? -1 : this.pop();
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */