const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function capitalize2(str) {
  str = str.toLowerCase();

  const arrOfWords = str.split(" ");

  const arrOfWordsCased = [];

  for (let i = 0; i < arrOfWords.length; i++) {
    const char = arrOfWords[i].split("");
    char[0] = char[0].toUpperCase();

    res.push(char.join(""));
  }
  return arrOfWordsCased.join(" ");
}
const titleCased = () => {
  
  tutorials.map(capitalize2)
  return tutorials
}
