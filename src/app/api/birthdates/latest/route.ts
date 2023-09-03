import { NextResponse } from "next/server";
import { createPool, selectFromDB } from "../../db";
import { Pool } from "pg";

export async function GET() {
  return createPool().then((pool: Pool | undefined) =>
    selectFromDB(pool, process.env.QUERY_LATEST_BIRTHDATE).then(
      (result: { max: string }[] | null) => NextResponse.json(result)
    )
  );
}
