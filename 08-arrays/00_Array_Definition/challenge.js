module.exports.newArray = function(arg1, arg2, arg3, arg4) {
  return [arg1, arg2, arg3, arg4];
};
module.exports.firstAndLast = function(array) {
  return [array[0], array.pop()];
};