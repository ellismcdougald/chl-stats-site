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

  return createPool().then((pool) =>
    selectFromDB(pool, getPlayerStatsQuery).then((result) =>
      NextResponse.json(result)
    )
  );
}
