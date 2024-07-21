import pg from 'pg'
const  { Client } = pg;
import Table from 'cli-table3';
import options from '../src/config.js';

async function backupPostgres() {

  const client = new Client({
    host: options.host,
    user: options.user,
    password: options.password,
    database: options.database,
    port: options.port || 5432,
  });

  await client.connect();

  const res = await client.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`); //// Execute a SQL query to get the names of all tables in the 'public' schema from the information_schema.tables view
  const tables = res.rows.map(row => row.table_name);

  for (let table of tables) {
    const tableData = await client.query(`SELECT * FROM ${table}`); // // Execute a SQL query to fetch all data from the specified table
    console.log(`Table: ${table}`); 

    const tableHeaders = Object.keys(tableData.rows[0] || {}); //// Get the names of the columns from the first row of the query result (or an empty array if no rows are returned)
    const cliTable = new Table({ head: tableHeaders });

    tableData.rows.forEach(row => cliTable.push(tableHeaders.map(header => row[header])));

    console.log(cliTable.toString() + '\n');
  }

  await client.end();
}

export default backupPostgres;


