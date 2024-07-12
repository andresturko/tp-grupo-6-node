import { createPool } from 'mysql2/promise';

// Create a connection pool
const pool = createPool({
    host: 'mysql-turko.alwaysdata.net',
    user: 'turko',
    password: '2024nodegrupo6',
    database: 'turko_caferarte',
    connectionLimit: 5 // Adjust the connection limit as per your requirements
});

// test connection
pool.getConnection()
    .then(connection => {
        console.log('Connected to the database');
        connection.release();
    })
    .catch(error => {
        console.log('Error connecting to the database', error);
    });


export default pool;

