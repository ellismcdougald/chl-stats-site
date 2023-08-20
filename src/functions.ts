export default function addColumnWidthToColumns(columns: any, data: any) {
  let headerWidth;
  let colWidth;
  for (let i = 0; i < columns.length; i++) {
    headerWidth = columns[i].Header.length;
    colWidth = getColWidth(data, columns[i].accessor);
    columns[i].width = Math.max(colWidth, headerWidth) * 10 + 5.75;
  }
  return columns;
}

function getColWidth(data: any, accessor: string) {
  const values = data.map((a: any) => a[accessor]);
  let maxLength = 0;
  let valueLength;
  let convertedValue;
  for (const value of values) {
    convertedValue = convertValueType(value);
    if (typeof convertedValue === "number") {
      convertedValue = convertedValue.toFixed(1);
    }
    valueLength = convertedValue.toString().length;
    if (valueLength > maxLength) {
      maxLength = valueLength;
    }
  }
  return maxLength;
}

function convertValueType(value: any) {
  if (value.includes("-")) {
    return value;
  } else if (!isNaN(parseInt(value))) {
    return value * 1;
  } else {
    return value;
  }
}
