import { NextResponse } from "next/server";
import { buildGetPlayerStatsQuery } from "../../../../../../buildQueries";
import { createPool, selectFromDB } from "../../../../../../db";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      statType: string;
      gameState: string;
      playerIds: string;
      teamIds: string;
      minGP: string;
    };
  }
) {
  /*
        Gets player stats from database.
        Returns a list of objects
        */

  let getPlayerStatsQuery: string;
  try {
    getPlayerStatsQuery = buildGetPlayerStatsQuery(
      params.statType,
      params.gameState,
      params.playerIds.split("-").map((el) => parseInt(el)),
      params.teamIds.split("-").map((el) => parseInt(el)),
      params.minGP
    );
  } catch (err) {
    if (err instanceof RangeError) {
      return NextResponse.error();
    } else {
      throw err;
    }
  }

  type PlayerStatResult = {
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

  return createPool().then((pool) =>
    selectFromDB(pool, getPlayerStatsQuery).then(
      (result: PlayerStatResult[] | null) => NextResponse.json(result)
    )
  );
}
