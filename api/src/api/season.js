const {getDbConnection} = require('../db');

const getSeasons = (req, res) => {

    const connection = getDbConnection();

    connection.query(`
        SELECT 
            season.id, 
            season.name, 
            season.year, 
            COUNT(episode.id) as episode_count
        FROM season 
        LEFT JOIN episode 
        ON episode.season = season.id 
        GROUP BY season.id
    `, (err, results) => {

        if (err) {
            return res.status(500);
        } else { 
            
            const result = results.map((row, index) => ({
                id: row.id,
                name: row.name,
                year: row.year,
                episodeCount: row.episode_count
            }));

            return res.send(result);

        }

    });

    connection.end();
};

module.exports = {
    getSeasons
}