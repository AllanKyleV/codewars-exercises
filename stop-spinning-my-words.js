function spinWords(string) {
    result = [];
    for (let word of string.split(' ')) {
      if (word.length <= 4) {
        result.push(word);
      } else if (word.length >= 5) {
        result.push(word.split('').reverse(' ').join(''))
      }
    } return result.join(' ');
  }

console.log(spinWords("Hey fellow warriors" ))