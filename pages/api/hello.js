import { db } from "@vercel/postgres";

export default async function handler(request, response) {
  const client = await db.connect();

  try {
    const result = await client.sql`select * from test;`;
    // const names = ['Fiona', 'Lucy'];
    return response.status(200).json({ result });
    // await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`;
  } catch (error) {
    return response.status(500).json({ error });
  }

  // const pets = await client.sql`SELECT * FROM Pets;`;
}
