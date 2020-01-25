const {getDbConnection} = require('../db');

const getEpisodeIds = (req, res) => {
    
    const {params: {episodeId}} = req;
    
    res.send(`episode ${episodeId}`);

};

module.exports = {
    getEpisodeIds
};