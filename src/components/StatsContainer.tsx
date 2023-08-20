import React from "react";
import {
  evTotalCols,
  otherTotalCols,
  evRateCols,
  otherRateCols,
} from "../columns";
import addColumnWidthToColumns from "../functions";
import Table from "../components/Table";

export default function StatsContainer(props: any) {
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
