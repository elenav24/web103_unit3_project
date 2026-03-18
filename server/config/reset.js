// create table to store events data from events.js file
import events from '../data/events.js'
import locations from '../data/locations.js'

import {pool} from './database.js'

const reset =
    async () => {
  try {
    // drop tables if they exist
    await pool.query('DROP TABLE IF EXISTS events');
    await pool.query('DROP TABLE IF EXISTS locations');
    // create tables
    await pool.query(`
            CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY, 
            name VARCHAR(255) NOT NULL
        )
    `)

    for (const location of locations) {
      const {name} = location;
      await pool.query('INSERT INTO locations (name) VALUES ($1)', [name]);
    }

    await pool.query(`
            CREATE TABLE IF NOT EXISTS events (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                locationId INTEGER REFERENCES locations(id) NOT NULL,
                date VARCHAR(255) NOT NULL,
                time VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                image VARCHAR(255) NOT NULL
            )
        `)
    // insert events data into events table
    for (const event of events) {
      const {event: name, locationId, date, time, description, image} = event;
      await pool.query(
          'INSERT INTO events (name, locationId, date, time, description, image) VALUES ($1, $2, $3, $4, $5, $6)',
          [name, locationId, date, time, description, image])
    }


    console.log('Database reset and events/locations tables created with data!')
  } catch (err) {
    console.error('Error resetting database:', err)
  } finally {
    pool.end()
  }
}

reset()
