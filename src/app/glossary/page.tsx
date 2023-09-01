import React from "react";

export default function Glossary() {
  const glossary: { name: string; def: string }[] = [
    {
      name: "Age",
      def: "A player's age as of September 15 of the year the season begins",
    },
    {
      name: "GP",
      def: "Games played",
    },
    {
      name: "G",
      def: "Goals",
    },
    {
      name: "A1",
      def: "Primary assists (most recent passer before goal)",
    },
    {
      name: "A2",
      def: "Secondary assists (second most recent passer before goal)",
    },
    {
      name: "A",
      def: "Assists",
    },
    {
      name: "P",
      def: "Points (goals and assists)",
    },
    {
      name: "P1",
      def: "Primary points (goals and primary assists)",
    },
    {
      name: "P INV%",
      def: "Percentage of team goals that a player recorded a point on",
    },
    {
      name: "P1 INV%",
      def: "Percentage of team goals that a player recorded a primary point on",
    },
    {
      name: "P1:P%",
      def: "Percentage of a player's points that are primary points",
    },
    {
      name: "G:A%",
      def: "Percentage of a player's points that are goals",
    },
    {
      name: "Shots",
      def: "Shots",
    },
    {
      name: "Sh%",
      def: "Shooting percentage -- Percentage of shots that are goals",
    },
    {
      name: "GF",
      def: "Goals for -- Team goals for that the player was on the ice for",
    },
    {
      name: "GA",
      def: "Goals against -- Team goals against that the player was on the ice for",
    },
    {
      name: "GF%",
      def: "Goals for percentage -- Percentage of on-ice goals that were scored by the player's team",
    },
    {
      name: "FOW",
      def: "Faceoffs won",
    },
    {
      name: "FOL",
      def: "Faceoffs lost",
    },
    {
      name: "FO%",
      def: "Faceoff percentage -- Percentage of faceoffs won",
    },
  ];
  return (
    <div>
      <h3>Glossary:</h3>
      <h4>Note: Shot statistics are not currently available for the WHL.</h4>
      {glossary.map((item) => {
        return <p key={item.name}>{`${item.name}: ${item.def}`}</p>;
      })}
    </div>
  );
}
