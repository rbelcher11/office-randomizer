const express = require('express');
const {getEpisodes} = require('./api/episode');
const {getSeasons} = require('./api/season');
const {getSeasonIds} = require('./api/seasonId');

const app = express();
const port = 4000;

app.get('/season', getSeasons);

app.get('/season/:seasonId', getSeasonIds);

app.get('/season/:seasonId/episode', getEpisodes);

app.get('/episode/:episodeId', getEpisodeIds);

app.listen(port, () => console.log('running'));
