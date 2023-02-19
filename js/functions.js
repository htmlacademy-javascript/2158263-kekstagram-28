
function nameFunction (string, length) {
  return string.length <= length ? 'true' : 'false';
}
nameFunction ('проверяемая строка', 21);
nameFunction ('проверяемая строка', 18);
nameFunction ('проверяемая строка', 10);

function checksPalindrome (string){
  return (string === string.split('').reverse().join('')) ;
}
checksPalindrome('Кекс');
checksPalindrome('ДовОд');
checksPalindrome('топот');

function extractNumber(string){
  const myNumber = string.match(/\d/g).map(Number);
  return +myNumber.join('');
}
extractNumber('2023');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');

function threeOptions(originalStr, lengthStr, additionalSymbol) {
  while(originalStr.length < lengthStr){
    if(additionalSymbol.length + originalStr.length > lengthStr){
      additionalSymbol = additionalSymbol.slice(0,lengthStr - originalStr.length);
    }
    originalStr = additionalSymbol + originalStr;
  }
  return originalStr;
}
threeOptions('1', 2, '0');
threeOptions('1', 4, '0');
threeOptions('q', 4, 'werty');
threeOptions('q', 4, 'we');
threeOptions('qwerty', 4, '0');

