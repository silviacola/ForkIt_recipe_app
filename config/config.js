/**
 * This file contains all the connection strings
 * to connect to the database server.
 * We need to export the db config:
 */

module.exports = process.env.DATABASE_URL || {
    host:     process.env.DB_HOST || 'localhost',
    port:     process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'recipes_app_db_dev',
  };
  