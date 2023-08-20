export const evRateCols = [
  {
    Header: "Name",
    accessor: "name",
    sticky: "left",
  },
  {
    Header: "Season",
    accessor: "season",
  },
  {
    Header: "Team",
    accessor: "team_code",
  },
  {
    Header: "League",
    accessor: "league_code",
  },
  {
    Header: "Pos",
    accessor: "position",
  },
  {
    Header: "Age",
    accessor: "age",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "GP",
    accessor: "gp",
  },
  {
    Header: "G/GP",
    accessor: "goals",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "A1/GP",
    accessor: "first_assists",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "A2/GP",
    accessor: "second_assists",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "A/GP",
    accessor: "assists",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P/GP",
    accessor: "points",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P1/GP",
    accessor: "primary_points",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P INV%",
    accessor: "p_inv",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P1 INV%",
    accessor: "p1_inv",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P1:P%",
    accessor: "p1_p",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "G:A%",
    accessor: "g_a",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "Shots/GP",
    accessor: "shots",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "Sh%",
    accessor: "sh_percentage",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "GF/GP",
    accessor: "goals_for",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "GA/GP",
    accessor: "goals_against",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "GF%",
    accessor: "goals_for_percentage",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "FOW/GP",
    accessor: "faceoff_wins",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "FOL/GP",
    accessor: "faceoff_losses",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "FO%",
    accessor: "faceoff_percentage",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
];

export const otherRateCols = [
  {
    Header: "Name",
    accessor: "name",
    sticky: "left",
  },
  {
    Header: "Season",
    accessor: "season",
  },
  {
    Header: "Team",
    accessor: "team_code",
  },
  {
    Header: "League",
    accessor: "league_code",
  },
  {
    Header: "Pos",
    accessor: "position",
  },
  {
    Header: "Age",
    accessor: "age",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "GP",
    accessor: "gp",
  },
  {
    Header: "G/GP",
    accessor: "goals",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "A1/GP",
    accessor: "first_assists",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "A2/GP",
    accessor: "second_assists",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "A/GP",
    accessor: "assists",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P/GP",
    accessor: "points",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P1/GP",
    accessor: "primary_points",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P INV%",
    accessor: "p_inv",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P1 INV%",
    accessor: "p1_inv",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P1:P%",
    accessor: "p1_p",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "G:A%",
    accessor: "g_a",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "Shots/GP",
    accessor: "shots",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "Sh%",
    accessor: "sh_percentage",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "FOW/GP",
    accessor: "faceoff_wins",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "FOL/GP",
    accessor: "faceoff_losses",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "FO%",
    accessor: "faceoff_percentage",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
];

export const evTotalCols = [
  {
    Header: "Name",
    accessor: "name",
    sticky: "left",
  },
  {
    Header: "Season",
    accessor: "season",
  },
  {
    Header: "Team",
    accessor: "team_code",
  },
  {
    Header: "League",
    accessor: "league_code",
  },
  {
    Header: "Pos",
    accessor: "position",
  },
  {
    Header: "Age",
    accessor: "age",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "GP",
    accessor: "gp",
  },
  {
    Header: "G",
    accessor: "goals",
  },
  {
    Header: "A1",
    accessor: "first_assists",
  },
  {
    Header: "A2",
    accessor: "second_assists",
  },
  {
    Header: "A",
    accessor: "assists",
  },
  {
    Header: "P",
    accessor: "points",
  },
  {
    Header: "P1",
    accessor: "primary_points",
  },
  {
    Header: "P INV%",
    accessor: "p_inv",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P1 INV%",
    accessor: "p1_inv",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P1:P%",
    accessor: "p1_p",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "G:A%",
    accessor: "g_a",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "Shots",
    accessor: "shots",
  },
  {
    Header: "Sh%",
    accessor: "sh_percentage",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "GF",
    accessor: "goals_for",
  },
  {
    Header: "GA",
    accessor: "goals_against",
  },
  {
    Header: "GF%",
    accessor: "goals_for_percentage",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "FOW",
    accessor: "faceoff_wins",
  },
  {
    Header: "FOL",
    accessor: "faceoff_losses",
  },
  {
    Header: "FO%",
    accessor: "faceoff_percentage",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
];

export const otherTotalCols = [
  {
    Header: "Name",
    accessor: "name",
    sticky: "left",
  },
  {
    Header: "Season",
    accessor: "season",
  },
  {
    Header: "Team",
    accessor: "team_code",
  },
  {
    Header: "League",
    accessor: "league_code",
  },
  {
    Header: "Pos",
    accessor: "position",
  },
  {
    Header: "Age",
    accessor: "age",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "GP",
    accessor: "gp",
  },
  {
    Header: "G",
    accessor: "goals",
  },
  {
    Header: "A1",
    accessor: "first_assists",
  },
  {
    Header: "A2",
    accessor: "second_assists",
  },
  {
    Header: "A",
    accessor: "assists",
  },
  {
    Header: "P",
    accessor: "points",
  },
  {
    Header: "P1",
    accessor: "primary_points",
  },
  {
    Header: "P INV%",
    accessor: "p_inv",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P1 INV%",
    accessor: "p1_inv",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "P1:P%",
    accessor: "p1_p",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "G:A%",
    accessor: "g_a",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "Shots",
    accessor: "shots",
  },
  {
    Header: "Sh%",
    accessor: "sh_percentage",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
  {
    Header: "FOW",
    accessor: "faceoff_wins",
  },
  {
    Header: "FOL",
    accessor: "faceoff_losses",
  },
  {
    Header: "FO%",
    accessor: "faceoff_percentage",
    Cell: ({ value }) => parseFloat(value).toFixed(1),
  },
];
