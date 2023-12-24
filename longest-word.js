// https://coderbyte.com/editor/Longest%20Word:JavaScript

// O(n)
function LongestWord(sen) {
  const alpha = 'qwertyuiopasdfghjklzxcvbnm';
  let bigWord = '';
  let currentWord = '';

  for(let i=0; i<sen.length; i++) {
    const char = sen[i];
    if(alpha.includes(char.toLowerCase())) {
      currentWord += char;

      if(i === (sen.length -1) && currentWord.length > bigWord.length) {
        return currentWord;
      }

    } else {
      if(currentWord.length > bigWord.length) {
        bigWord = currentWord;
        currentWord = '';
      }
    }
  }

  return bigWord;
}

console.log(LongestWord('fun&!! time') === 'time');
console.log(LongestWord('I love dogs') === 'love');