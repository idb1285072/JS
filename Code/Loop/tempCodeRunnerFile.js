outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue outerLoop; // skips rest of i loop iteration
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
