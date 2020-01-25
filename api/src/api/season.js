const {getDbConnection} = require('../db');

const getSeasons = (res, req) => {
    const connection = getDbConnection();

    connection.query('SELECT id, name, year FROM season', (err, results) => {

        if (err) {
            return res.status(500);
        } else { 
            
            const result = results.map((row, index) => ({
                id: row.id,
                name: row.name,
                year: row.year
            }));

            return res.send(result);

        }

    });

    connection.end();
};

module.exports = {
    getSeasons
}