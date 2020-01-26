import React from 'react';
import './App.css';
import {SeasonList} from "../SeasonList/SeasonList";
import {Switch, Route} from 'react-router-dom';
import { EpisodeList } from '../EpisodeList/EpisodeList';

export const App = ({...props}) => {

    return (
        <div className="App">

            <SeasonList />

            <Switch>
                <Route path="/season/:id" component={EpisodeList}/>
            </Switch>

        </div>
    );

};
