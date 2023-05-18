var TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const keyExists = this.cache.get(key);

  if (keyExists) {
    clearTimeout(keyExists.timer);
  }
  const timer = setTimeout(() => this.cache.delete(key), duration);
  this.cache.set(key, { value, timer });
  return Boolean(keyExists);
};

TimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};
