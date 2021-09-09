/* 
Import query
Async function
Pass in SQL setting up the table and await response
Console.log when done
Call function
*/

const { query } = require("../index");

async function createTable() {
  const sqlQuery =
    "CREATE TABLE IF NOT EXISTS films (id SERIAL PRIMARY KEY, title TEXT NOT NULL, imgUrl TEXT, description TEXT NOT NULL, rating INTEGER NOT NULL, actors TEXT NOT NULL, year TEXT NOT NULL, genre TEXT NOT NULL);";

  const _response = await query(sqlQuery);
  console.log("films table created");
}

if (require.main === module) {
  createTable()
    .catch(console.error)
    .finally(() => pool.end());
}

module.exports = createTable;
