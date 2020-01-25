const express = require('express');
const app = express();
const port = 4000;

const mysql = require('mysql');

const {getDbConnection} = require('./db');

app.get('/season', (req, res) => {

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

});

app.get('/season/:seasonId', (req, res) => {
    
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

});

app.get('/season/:seasonId/episode', (req, res) => {

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

});

app.get('/episode/:episodeId', (req, res) => {

    const {params: {episodeId}} = req;
    
    res.send(`episode ${episodeId}`);

});

app.listen(port, () => console.log('running'));
