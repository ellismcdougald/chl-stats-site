import React from "react";
import {
  evTotalCols,
  otherTotalCols,
  evRateCols,
  otherRateCols,
} from "../columns";
import addColumnWidthToColumns from "../functions";
import Table from "../components/Table";

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

type SCProps = {
  data: Data[];
  statsSelection: string | null;
  strengthSelection: string | null;
};

export default function StatsContainer(props: SCProps) {
  if (props.data.length === 0) {
    return <p>Loading stats...</p>;
  } else if (props.statsSelection === "Totals") {
    if (props.strengthSelection === "EV") {
      return (
        <Table
          data={props.data}
          columns={addColumnWidthToColumns(evTotalCols, props.data)}
        />
      );
    } else {
      return (
        <Table
          data={props.data}
          columns={addColumnWidthToColumns(otherTotalCols, props.data)}
        />
      );
    }
  } else if (props.statsSelection === "Rates") {
    if (props.strengthSelection === "EV") {
      return (
        <Table
          data={props.data}
          columns={addColumnWidthToColumns(evRateCols, props.data)}
        />
      );
    } else {
      return (
        <Table
          data={props.data}
          columns={addColumnWidthToColumns(otherRateCols, props.data)}
        />
      );
    }
  } else {
    return <p>Error.</p>;
  }
}
