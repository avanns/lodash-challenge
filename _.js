const _ = {
  clamp: function (num, min, max) {
    const x = Math.max(num, min);
    const y = Math.min(x, max);
    return y;
  },
   inRange: function (num, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    const isInRange = (num >= start && num < end);
    return isInRange;
    },
    words: function (str) {
      let words = str.split(' ');
      return words;
    },
    pad: function (string, length) {
      if (string.length >= length) {
        return string;
      } 
      let startGap = (length - string.length) / 2;
      let endGap = (length - string.length) / 2;
      if (startGap % 2 !== 0) {
        startGap = Math.floor(startGap);
        endGap = length - string.length - startGap; 
      }
      return `${' '.repeat(startGap)}${string}${' '.repeat(endGap)}`;
    },
    has: function (object, key) {
      const keyArray = Object.keys(object);
      const isKeyinObject = keyArray.includes(key);
      return isKeyinObject;
    },
    invert: function (object) {
      let invertedObject = {
      }
      for (const property in object) {
        const temp = object[property];
        invertedObject[temp] = property;
      }
      return invertedObject;
    },
    findKey: function (object, predicate) {
      for (const property in object) {
        const value = object[property];
        const hasKey = predicate(value);
        if (hasKey === true) {
          return property;
        }
      }
      return undefined;
    },
    drop: function (array, number) {
        if (number === undefined) {
          number = 1;
        }
          const newArray = array.slice(number);
          return newArray;
    },
    dropWhile: function (array, predicate) {
      const dropNumber = array.findIndex((element, index) => {
        return !predicate(element, index, array);
      });
      const droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
    chunk: function (array, size) {
      if (size === undefined) {
        size = 1;
      }
      let arrayChunks = [];
      for (let i = 0; i < array.length; i += size) {
        let arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
      }

}

// Do not write or modify code below this line.
module.exports = _;