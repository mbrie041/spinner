const arr1 = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];

const spinner = (array) => {
  let delay = 100;
  for (const spins of array) {
    delay += 200;
    setTimeout(() => {
      process.stdout.write(spins);
    }, (delay));
  }
};
spinner(arr1);