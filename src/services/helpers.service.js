export const generateHeaders = (head) => {
  let newWord = head.replace(/([a-z](?=[A-Z]))/g, "$1 ");
  newWord = newWord[0].toUpperCase() + newWord.slice(1);
  return newWord;
};

// formatting in preparation for employees-table components
export const createColumnData = (empArr, colArr) => {
  const copy = colArr.slice();
  const activeLength = copy.length;
  const mapEmployeeColumns = Object.keys(empArr[0]).slice(activeLength - 1); // -1 accomodates the action column which is not desired to be mappable
  // eslint-disable-next-line array-callback-return
  mapEmployeeColumns.map((att, idx) => {
    let display = generateHeaders(att);
    let row = {
      header: display,
      attribute: att,
      index: idx + activeLength,
      type: "training",
    };
    if (row.attribute === "createdAt" || row.attribute === "updatedAt") {
      row = {
        header: display,
        attribute: att,
        index: idx + activeLength,
        type: "main",
      };
    }
    copy.push(row);
  });

  return copy;
};

export const formatCompData = (compArray) => {
  let returnObj = { compNames: [], nameStrings: ["All"] };
  // let compNames = [];
  // let nameStrings = ["All"];
  compArray.forEach((arr) => {
    let obj = {};
    obj["uuid"] = arr.uuid;
    obj["companyName"] = arr.companyName;
    returnObj.compNames.push(obj);
    returnObj.nameStrings.push(arr.companyName);
  });

  return returnObj;
};
