function ucFirst(str) {
  let newStr;
  if (str === '') {
    return ('');
  } else {
    return (newStr = str[0].toUpperCase() + str.slice(1));
  }
}
