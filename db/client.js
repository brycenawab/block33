const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:bryce2004@localhost:5432/fitnessdev';

const client = new Client({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

module.exports = client;
