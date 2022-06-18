/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.stream = new Array(n);
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  //isolate the index of the value we are inserting from idKey
  let index = idKey - 1;
  //replace empty index from the stream with the value given
  this.stream.splice(index, 1, value);
  //instantiate return chunk
  let chunk = [];
  //check if the previous and next value of stream are null or truthy
  if (index === 0 && !this.stream[index + 1]) {
    chunk.push(this.stream[0]);
    return chunk;
  }
  if (index === 0 && this.stream[index + 1]) {
    for (let i = 0; i < this.stream.length; i++) {
      if (this.stream[i]) {
        chunk.push(this.stream[i]);
      } else {
        return chunk;
      }
      return chunk;
    }
  }
  if (index > 0 && !this.stream[index + 1] && !this.stream[index - 1]) {
    return chunk;
  }
  if (index > 0 && this.stream[index + 1] && !this.stream[index - 1]) {
    for (let i = index; i < this.stream.length; i++) {
      if (this.stream[i]) {
        chunk.push(this.stream[i]);
      }
      return chunk;
    }
    return chunk;
  }

  //if truthy; loop through as many truthy indecies, add values to returnStream
  //return stream
  //if id >1; and id+1 is truthy && left is falsy; loop from insertion ^^ as          above
  //if id >1 and id+1 is truthy && left is truth; iterate left from insertion to first consecutive truthy index; pushing all truthy sonsecutive values into returnStream
  //return return stream concatenated
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.stream = new Array(n);
  this.pointer = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  let chunk = [];
  this.stream[idKey - 1] = value;
  let currentValue = this.stream[this.pointer];
  while (currentValue != null) {
    chunk.push(currentValue);
    this.pointer++;
  }
  return chunk;
};
