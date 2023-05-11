import React from "react";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './App.css';

function Home() {

    
    return(
        <div className="home">



            <div class="card">
                <div class="card-home">
                    <h2 className="home-title">Was ist eine Hausratsversicherung?</h2>
                    <p className="home-text">Eine Hausratsversicherung ist eine Versicherung, die den Besitz eines Haushalts gegen Verluste und Schäden absichert. Es handelt sich um eine Art von Sachversicherung, die darauf abzielt, die finanziellen Auswirkungen von Ereignissen abzufedern, die den Hausrat beeinträchtigen können. </p>
                </div>
            </div> 




            <div class="card1">
                <div class="card-home1">
                    <h2 className="home-title">Was ist ein Schadensrechner?</h2>
                    <p className="home-text">Ein Schadensrechner ist ein Tool, um den potenziellen finanziellen Schaden zu berechnen, der durch verschiedene Arten von Schäden an Ihrem Eigentum entstehen könnte. Indem Sie bestimmte Informationen zu Ihrem Eigentum und Ihrem Versicherungsbedarf eingeben, kann ein Schadensrechner eine Schätzung des potenziellen Schadens liefern und Ihnen helfen, eine Vorstellung davon zu bekommen.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;

