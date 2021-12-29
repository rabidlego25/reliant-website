export const generateHeaders = (columnData) => {
  //   console.log("generateHeaders: ", columnData);
  let arr = [];
  columnData.forEach((head) => {
    let newWords = head.replace(/([a-z](?=[A-Z]))/g, "$1 ");
    newWords = newWords[0].toUpperCase() + newWords.slice(1);
    arr.push(newWords);
  });
  return arr;
};
