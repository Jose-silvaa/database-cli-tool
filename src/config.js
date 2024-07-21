import { program } from 'commander';


// Define command-line options for the program
program
  .option('-h, --host <host>', 'Database host')
  .option('-p, --port <port>', 'Database port')
  .option('-u, --user <user>', 'Database user')
  .option('-P, --password <password>', 'Database password')
  .option('-d, --database <database>', 'Database name');

// Parse command-line arguments
program.parse(process.argv);

// Get the parsed options
const options = program.opts();

console.log(options);

// Check if required options are provided
if (!options.host || !options.user || !options.password || !options.port || !options.database) {
  console.error('All options are required');
  process.exit(1);
}

export default options;
