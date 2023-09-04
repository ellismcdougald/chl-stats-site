"use client";

import { useState, useEffect } from "react";
import FilterContainer from "../../components/FilterContainer";
import StatsContainer from "../../components/StatsContainer";
import styles from "../../styles/Stats.module.css";

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
  const [playerStats, setPlayerStats] = useState<Data[] | null>(null);

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
        `${
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
      if (
        filterSelections.players.length > 0 &&
        filterSelections.teams.length > 0
      ) {
        getPlayerStats(
          filterSelections.stats,
          filterSelections.strength,
          filterSelections.players,
          filterSelections.teams,
          filterSelections.seasons,
          filterSelections.minGP
        );
      } else {
        setPlayerStats([]);
      }
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
