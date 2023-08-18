import { NextResponse } from "next/server";
import { buildGetPlayersQuery } from "../../../../../../buildQueries";
import { createPool, selectFromDB } from "../../../../../../db";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      leagueIds: string;
      teamIds: string;
      positionIds: string;
      lowerBDate: string;
      higherBDate: string;
    };
  }
) {
  /*
      Gets player ids and player names from database.
      Returns a list of objects
      */

  let getPlayersQuery: string;
  try {
    getPlayersQuery = buildGetPlayersQuery(
      params.leagueIds.split("-").map((el) => parseInt(el)),
      params.teamIds.split("-").map((el) => parseInt(el)),
      params.positionIds.split("-").map((el) => parseInt(el)),
      params.lowerBDate,
      params.higherBDate
    );
  } catch (err) {
    if (err instanceof RangeError) {
      return NextResponse.error();
    } else {
      throw err;
    }
  }

  return createPool().then((pool) =>
    selectFromDB(pool, getPlayersQuery).then((result) =>
      NextResponse.json(result)
    )
  );
}
