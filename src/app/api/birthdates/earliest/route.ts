import { NextResponse } from "next/server";
import { earliestBirthdateQuery } from "../../queries";
import { createPool, selectFromDB } from "../../db";
import { Pool } from "pg";

export async function GET() {
  return createPool().then((pool: Pool) =>
    selectFromDB(pool, earliestBirthdateQuery).then(
      (result: { min: string }[] | null) => NextResponse.json(result)
    )
  );
}
