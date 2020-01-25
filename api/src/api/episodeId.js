const {getDbConnection} = require('../db');

const getEpisodeIds = (res, req) => {
    
    const {params: {episodeId}} = req;
    
    res.send(`episode ${episodeId}`);

};

module.exports = {
    getEpisodeIds
};