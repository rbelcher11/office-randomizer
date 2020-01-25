const {getDbConnection} = require('../db');

const getEpisodes = (req, res) => {

    const {params: {seasonId}} = req;

    const connection = getDbConnection();

    connection.query('SELECT id, name, season FROM episode WHERE season = ?', [seasonId], (err, results) => {

        if (err) {
            return res.status(500);
        } else {
            
            const result = results.map((row, index) => ({
                id: row.id,
                name: row.name,
                season: row.season
            }));

            return res.send(result);

        }

    });

    connection.end();
};

module.exports = {
    getEpisodes
};