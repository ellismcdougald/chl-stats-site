"use client";

import { useState, useEffect } from "react";
import FilterContainer from "../../components/FilterContainer";
import StatsContainer from "../../components/StatsContainer";
import styles from "../../styles/Stats.module.css";

export default function Stats() {
  type FilterSelections = {
    stats: string | null;
    strength: string | null;
    players: { value: string; id: number }[] | null;
    teams: { value: string; id: number }[] | null;
    seasons: { value: string; id: string }[] | null;
    minGP: number | null;
  };
  const [filterSelections, setFilterSelections] = useState<FilterSelections>({
    stats: null,
    strength: null,
    players: null,
    teams: null,
    seasons: null,
    minGP: null,
  });
  const [playerStats, setPlayerStats] = useState([]);

  function getFilterSelections(
    statsType: string,
    gameState: string,
    playerArr: { value: string; id: number }[],
    teamArr: { value: string; id: number }[],
    seasonArr: { value: string; id: string }[],
    minGames: number
  ) {
    setFilterSelections({
      stats: statsType,
      strength: gameState,
      players: playerArr,
      teams: teamArr,
      seasons: seasonArr,
      minGP: minGames,
    });
  }

  useEffect(() => {
    async function getPlayerStats(
      statsType: string,
      gameState: string,
      playerIds: { value: string; id: number }[],
      teamIds: { value: string; id: number }[],
      seasons: { value: string; id: string }[],
      minGP: number
    ) {
      const res = await fetch(
        `http://${
          process.env.NEXT_PUBLIC_SITE_HOST
        }/api/playerStats/${statsType.toLowerCase()}/${gameState.toLowerCase()}/${playerIds
          .map((player: { value: string; id: number }) => player.id)
          .join("-")}/${teamIds
          .map((team: { value: string; id: number }) => team.id)
          .join("-")}/${seasons
          .map((season: { value: string; id: string }) => season.id)
          .join("-")}/${minGP}`
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
      filterSelections.seasons &&
      filterSelections.minGP
    ) {
      getPlayerStats(
        filterSelections.stats,
        filterSelections.strength,
        filterSelections.players,
        filterSelections.teams,
        filterSelections.seasons,
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
