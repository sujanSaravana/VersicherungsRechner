import React from "react";
import { useState } from "react";
import './App.css';

function Home() {
    return(
        <div className="home">
            <div className="homepart1">
                <h2 className="home-question">Haus abgebrannt?</h2>
                <h3 className="home-question2">Berechne die Schaden jetzt?</h3>
                <button className="home-btn">Jetzt <br></br> berechnen</button>
            </div>
        </div>
    );
}

export default Home;

