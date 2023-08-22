type Column = {
  Header: string;
  accessor: string;
  sticky?: string;
  Cell?: ({ value }: { value: any }) => string;
  width?: number;
};

type Data = {
  player_id_1: number;
  name: string;
  season: string;
  team_code: string;
  league_id: string;
  league_code: string;
  position: string;
  age: string;
  gp: string;
  goals: string;
  first_assists: string;
  second_assists: string;
  assists: string;
  points: string;
  primary_points: string;
  p_inv: string;
  p1_inv: string;
  p1_p: string;
  g_a: string;
  shots: string;
  sh_percentage: string;
  goals_for: string;
  goals_against: string;
  goals_for_percentage: string;
  faceoff_wins: string;
  faceoff_losses: string;
  faceoff_percentage: string;
};

export default function addColumnWidthToColumns(
  columns: Column[],
  data: Data[]
) {
  let headerWidth;
  let colWidth;
  for (let i = 0; i < columns.length; i++) {
    headerWidth = columns[i].Header.length;
    colWidth = getColWidth(data, columns[i].accessor);
    columns[i].width = Math.max(colWidth, headerWidth) * 10 + 5.75;
  }
  return columns;
}

function getColWidth(data: Data[], accessor: string) {
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

function convertValueType(value: string) {
  if (value.includes("-")) {
    return value;
  } else if (!isNaN(parseInt(value))) {
    return parseInt(value) * 1;
  } else {
    return value;
  }
}
