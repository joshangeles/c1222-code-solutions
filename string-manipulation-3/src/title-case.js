/* exported titleCase */
/*
    Split phrase up where spaces are found and store into array
    Go through each word and lowercase all characters
    Capitalize the first letters of words if:
      The word is four letters or more
      It is the first word of the title or a subtitle
      It is a major word or it is the second part of a hyphenated word
*/

function titleCase(title) {
  title = title.toLowerCase();
  const wordArray = title.split(' ');
  function capitalize() {
    wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1);
  }
  for (var i = 0; i < wordArray.length; i++) {
    switch (true) {
      case i === 0:
        capitalize();
        break;
      case wordArray[i].length >= 4:
        capitalize();
        break;
      case wordArray[i] !== 'the' && wordArray[i] !== 'in' && wordArray[i] !== 'of' && wordArray[i] !== 'for' && wordArray[i] !== 'and' && wordArray[i] !== 'on' && wordArray[i] !== 'to':
        if (wordArray[i] === 'api') {
          wordArray[i] = 'API';
        } else {
          capitalize();
        }
        break;
      case wordArray[i - 1].includes(':'):
        capitalize();
        break;
    }
    if (wordArray[i].includes('Javascript')) {
      if (wordArray[i].includes(':')) {
        wordArray[i] = 'JavaScript:';
      } else {
        wordArray[i] = 'JavaScript';
      }
    }
    if (wordArray[i].includes('-')) {
      const hyphenatedWord = wordArray[i].split('-');
      for (let i = 0; i < hyphenatedWord.length; i++) {
        hyphenatedWord[i] = hyphenatedWord[i][0].toUpperCase() + hyphenatedWord[i].slice(1);
      }
      wordArray[i] = hyphenatedWord.join('-');
    }
  }
  return wordArray.join(' ');
}
