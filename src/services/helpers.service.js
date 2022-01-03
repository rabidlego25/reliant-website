export const generateHeaders = (head) => {
  let newWord = head.replace(/([a-z](?=[A-Z]))/g, "$1 ");
  newWord = newWord[0].toUpperCase() + newWord.slice(1);
  return newWord;
};
