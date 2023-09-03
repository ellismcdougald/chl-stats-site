const POSITIONS = ["C", "LW", "RW", "D"];

export function buildGetPlayerStatsQuery(
  statType: string,
  gameState: string,
  playerIds: number[],
  teamIds: number[],
  seasons: string[],
  minGP: string
) {
  if (
    process.env.QUERY_ALL_SITS_TOTALS &&
    process.env.QUERY_EV_TOTALS &&
    process.env.QUERY_PP_TOTALS &&
    process.env.QUERY_SH_TOTALS &&
    process.env.QUERY_ALL_SITS_RATES &&
    process.env.QUERY_EV_RATES &&
    process.env.QUERY_PP_RATES &&
    process.env.QUERY_SH_RATES
  ) {
    let getPlayerStatsQuery: string = "";
    if (statType === "totals") {
      if (gameState === "all") {
        getPlayerStatsQuery = process.env.QUERY_ALL_SITS_TOTALS;
      } else if (gameState === "ev") {
        getPlayerStatsQuery = process.env.QUERY_EV_TOTALS;
      } else if (gameState === "pp") {
        getPlayerStatsQuery = process.env.QUERY_PP_TOTALS;
      } else if (gameState === "sh") {
        getPlayerStatsQuery = process.env.QUERY_SH_TOTALS;
      }
    } else if (statType === "rates") {
      if (gameState === "all") {
        getPlayerStatsQuery = process.env.QUERY_ALL_SITS_RATES;
      } else if (gameState === "ev") {
        getPlayerStatsQuery = process.env.QUERY_EV_RATES;
      } else if (gameState === "pp") {
        getPlayerStatsQuery = process.env.QUERY_PP_RATES;
      } else if (gameState === "sh") {
        getPlayerStatsQuery = process.env.QUERY_SH_RATES;
      }
    } else {
      throw RangeError("Invalid stat type.");
    }

    let i = 0;
    for (const playerId of playerIds) {
      if (i === 0) {
        getPlayerStatsQuery += ` HAVING (game_player_stat.player_id = ${playerId}`;
      } else {
        getPlayerStatsQuery += ` OR game_player_stat.player_id = ${playerId}`;
      }
      i++;
    }
    if (i > 0) {
      getPlayerStatsQuery += ")";
    }
    i = 0;
    for (const teamId of teamIds) {
      if (i === 0) {
        getPlayerStatsQuery += ` AND (game_player_stat.team_id = ${teamId}`;
      } else {
        getPlayerStatsQuery += ` OR game_player_stat.team_id = ${teamId}`;
      }
      i++;
    }
    if (i > 0) {
      getPlayerStatsQuery += ")";
    }
    i = 0;
    for (const season of seasons) {
      let dashedSeason = `'${
        season.substring(0, 4) + "-" + season.substring(4, 9)
      }'`;
      if (i === 0) {
        getPlayerStatsQuery += ` AND (game.season = ${dashedSeason}`;
      } else {
        getPlayerStatsQuery += ` OR game.season = ${dashedSeason}`;
      }
      i++;
    }
    if (i > 0) {
      getPlayerStatsQuery += ")";
    }

    getPlayerStatsQuery += ` AND (COUNT(*) >= ${minGP});`;

    return getPlayerStatsQuery;
  }
}

export function buildGetPlayersQuery(
  leagueIds: number[],
  teamIds: number[],
  positionIds: number[],
  lowerBirthdate: string,
  higherBirthdate: string
) {
  let getPlayersQuery = process.env.QUERY_GET_PLAYERS;
  let i = 0;
  for (const leagueId of leagueIds) {
    if (leagueId < 1 || leagueId > 3) {
      throw RangeError("Invalid league id");
    }
    getPlayersQuery += i === 0 ? "(" : " OR ";
    getPlayersQuery += `league_id = ${leagueId}`;
    i++;
  }
  getPlayersQuery += ")";
  i = 0;
  for (const teamId of teamIds) {
    if (i === 0) {
      getPlayersQuery += " AND ";
    }
    getPlayersQuery += i === 0 ? "(" : " OR ";
    getPlayersQuery += `game_player_stat.team_id = ${teamId}`;
    i++;
  }
  getPlayersQuery += ")";
  i = 0;
  for (const positionId of positionIds) {
    if (i === 0) {
      getPlayersQuery += " AND ";
    }
    getPlayersQuery += i === 0 ? "(" : " OR ";
    getPlayersQuery += `game_player_stat.position = '${
      POSITIONS[positionId - 1]
    }'`;
    i++;
  }
  getPlayersQuery += ")";

  if (lowerBirthdate) {
    getPlayersQuery += ` AND player.birthdate > '${lowerBirthdate}'`;
  }
  if (higherBirthdate) {
    getPlayersQuery += ` AND player.birthdate < '${higherBirthdate}'`;
  }

  getPlayersQuery += ";";
  return getPlayersQuery;
}

export function buildGetTeamsQuery(leagueIds: number[]) {
  if (process.env.QUERY_GET_TEAMS) {
    let getTeamsQuery = process.env.QUERY_GET_TEAMS;
    let i = 0;
    for (const leagueId of leagueIds) {
      if (leagueId < 1 || leagueId > 3) {
        throw new RangeError("Invalid league id.");
      }
      if (i !== 0) {
        getTeamsQuery += " OR ";
      }
      getTeamsQuery += `league_id = ${leagueId}`;
      i++;
    }
    getTeamsQuery += ";";
    return getTeamsQuery;
  }
}
