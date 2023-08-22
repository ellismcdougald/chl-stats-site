import { NextResponse } from "next/server";
import { latestBirthdateQuery } from "../../queries";
import { createPool, selectFromDB } from "../../db";
import { Pool } from "pg";

export async function GET() {
  return createPool().then((pool: Pool) =>
    selectFromDB(pool, latestBirthdateQuery).then(
      (result: { max: string }[] | null) => NextResponse.json(result)
    )
  );
}
