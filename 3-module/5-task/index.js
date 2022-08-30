function getMinMax(str) {
  let arr = (str.split(' ').filter(item => !isNaN(item))).map(item => +item);
  let MinMax = {
    min: Math.min.apply(null, arr),
    max: Math.max.apply(null, arr),
  };
  return MinMax;
}
