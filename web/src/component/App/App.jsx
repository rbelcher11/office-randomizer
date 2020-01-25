import React from 'react';
import './App.css';
import {faRandom} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SeasonList} from "../SeasonList/SeasonList";

export const App = ({...props}) => {

    return (
        <div className="App">

            <FontAwesomeIcon icon={faRandom}/>

            <SeasonList />

        </div>
    );

};
