"use client";

import { useState, useEffect } from "react";
import FilterContainer from "../../components/FilterContainer";
import StatsContainer from "../../components/StatsContainer";
import styles from "../../styles/Stats.module.css";

export default function Stats() {
  const [filterSelections, setFilterSelections] = useState({
    stats: null,
    strength: null,
    players: null,
    teams: null,
    minGP: null,
  });
  const [playerStats, setPlayerStats] = useState([]);

  function getFilterSelections(
    statsType: any,
    gameState: any,
    playerIds: any,
    teamIds: any,
    minGP: any
  ) {
    setFilterSelections({
      stats: statsType,
      strength: gameState,
      players: playerIds,
      teams: teamIds,
      minGP: minGP,
    });
  }

  useEffect(() => {
    async function getPlayerStats(
      statsType: string,
      gameState: string,
      playerIds: { value: string; id: number }[],
      teamIds: { value: string; id: number }[],
      minGP: number
    ) {
      const res = await fetch(
        `http://localhost:3000/api/playerStats/${statsType.toLowerCase()}/${gameState.toLowerCase()}/${playerIds
          .map((player) => player.id)
          .join("-")}/${teamIds.map((team) => team.id).join("-")}/${minGP}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data.");
      }
      setPlayerStats(await res.json());
    }

    if (
      filterSelections.stats &&
      filterSelections.strength &&
      filterSelections.players &&
      filterSelections.teams &&
      filterSelections.minGP
    ) {
      getPlayerStats(
        filterSelections.stats,
        filterSelections.strength,
        filterSelections.players,
        filterSelections.teams,
        filterSelections.minGP
      );
    }
  }, [filterSelections]);

  return (
    <div id={styles.container}>
      <FilterContainer getFilterSelections={getFilterSelections} />
      <StatsContainer
        data={playerStats}
        statsSelection={filterSelections.stats}
        strengthSelection={filterSelections.strength}
      />
    </div>
  );
}
