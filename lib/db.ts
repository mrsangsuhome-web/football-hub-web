import Database from "better-sqlite3";

const db = new Database("footballhub.db");

db.exec(`
CREATE TABLE IF NOT EXISTS teams (
  id INTEGER PRIMARY KEY,
  name TEXT,
  slug TEXT UNIQUE,
  crest TEXT
);

CREATE TABLE IF NOT EXISTS matches (
  id INTEGER PRIMARY KEY,
  home_team TEXT,
  away_team TEXT,
  match_date TEXT
);

CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY,
  slug TEXT UNIQUE,
  title TEXT,
  excerpt TEXT
);
`);

export default db;