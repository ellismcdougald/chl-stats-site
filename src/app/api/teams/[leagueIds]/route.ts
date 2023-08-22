import { NextResponse } from "next/server";
import { buildGetTeamsQuery } from "../../buildQueries";
import { createPool, selectFromDB } from "../../db";

export async function GET(
  request: Request,
  { params }: { params: { leagueIds: string } }
) {
  /*
    Gets team codes and team ids from database.
    Returns a list of objects
    */

  const leagueIds = params.leagueIds.split("-").map((el) => parseInt(el));

  let getTeamsQuery: string;
  try {
    getTeamsQuery = buildGetTeamsQuery(leagueIds);
  } catch (err) {
    if (err instanceof RangeError) {
      return NextResponse.error();
    } else {
      throw err;
    }
  }

  type TeamResult = {
    code: string;
    team_id: number;
  };

  return createPool().then((pool) =>
    selectFromDB(pool, getTeamsQuery).then((result: TeamResult[] | null) =>
      NextResponse.json(result)
    )
  );
}
