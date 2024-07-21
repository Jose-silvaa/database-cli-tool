#!/usr/bin/env node

import backupPostgres from '../database/postgresBackup.js';

async function backupDatabase() {

  try {
    await backupPostgres(); // Call the function backupPostgres

  } catch (err) {
    console.error('Error during backup:', err);
  }
}

backupDatabase();
