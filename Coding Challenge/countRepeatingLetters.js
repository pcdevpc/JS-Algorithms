function countLetters(str) {
  if (str === null || str.length === 0) {
    return "";
  }
  let tempArr = str.split("");
  let letters = [];
  let count = 1;

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      count++;
    } else {
      let value = `${tempArr[i]}${count}`;
      letters = [...letters, value];
      count = 1;
    }
  }
  return letters.join("");
}

console.log(countLetters("aaabbbccccdd"));
