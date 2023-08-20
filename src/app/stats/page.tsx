"use client";

import { useState } from "react";
import FilterContainer from "../../components/FilterContainer";
import styles from "../../styles/Stats.module.css";

export default function Stats() {
  const [filterSelections, setFilterSelections] = useState({});

  function getFilterSelections(
    statsType: string,
    gameState: string,
    playerIds: number[],
    teamIds: number[],
    minGP: number
  ) {
    setFilterSelections({
      stats: statsType,
      strength: gameState,
      players: playerIds,
      teams: teamIds,
      minGP: minGP,
    });
  }

  return (
    <div id={styles.container}>
      <FilterContainer getFilterSelections={getFilterSelections} />
    </div>
  );
}
