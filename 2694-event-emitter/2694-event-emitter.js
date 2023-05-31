class EventEmitter {
  // using set to map every event (onclick) to list of callbacks when event is emitted
  eventMap = {};
  subscribe(event, cb) {
    if (!this.eventMap.hasOwnProperty(event)) {
      this.eventMap[event] = new Set(); //empty hashset
    }
    // add the callback to the set corresponding to this particular event
    this.eventMap[event].add(cb);
    return {
      unsubscribe: () => {
        // remove the callback from the event
        this.eventMap[event].delete(cb);
      },
    };
  }

  emit(event, args = []) {
    // execute callbacks or this particular event and return result of every callback
    const result = [];
    //  nullish operator ??. If this.eventMap[event] return empty then return []
    (this.eventMap[event] ?? []).forEach((cb) => result.push(cb(...args)));
    return result;
  }
}



/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */