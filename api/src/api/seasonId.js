const {getDbConnection} = require('../db');

const getSeasonIds = (req, res) => {
    const {params: {seasonId}} = req;

    const connection = getDbConnection();

   connection.query('SELECT id, name, year FROM season WHERE id = ?', [seasonId], (err, results) => {

       if (err) {
           return res.status(500);
       } else {
           
           const [row] = results;
           const result = {
               id: row.id,
               name: row.name,
               year: row.year
           };

           return res.send(result);

       }

   });

   connection.end();
};

module.exports = {
    getSeasonIds
}