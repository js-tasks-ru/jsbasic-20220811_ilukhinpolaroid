function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    let factN = 1;
    for (i = 0; i < n; i++) {
      factN *= (n - i);
    }
    return factN;
  }
}
