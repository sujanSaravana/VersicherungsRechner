import React from "react";
import './App.css';
import Bar from "./components/Navbar";


function Home() {


    return(
        <body className="home">
            <Bar />
        <div className="home-div">

            <div className="card-top">
                <div className="card-home-top">
                    <h1 className="home-title"> Wilkommen</h1>
                    <p className="home-text-top">Dieser Versicherungsrechner wurde von Sujan Saravana erstellt.</p>
                </div>
            </div>



            <div className="card">
                <div className="card-home">
                    <h2 className="home-title">Was ist eine Hausratsversicherung?</h2>
                    <p className="home-text">Eine Hausratsversicherung ist eine Versicherung, die den Besitz eines Haushalts gegen Verluste und Schäden absichert. Es handelt sich um eine Art von Sachversicherung, die darauf abzielt, die finanziellen Auswirkungen von Ereignissen abzufedern, die den Hausrat beeinträchtigen können. </p>
                </div>
            </div> 




            <div className="card1">
                <div className="card-home1">
                    <h2 className="home-title">Was ist ein Schadensrechner?</h2>
                    <p className="home-text">Ein Schadensrechner ist ein Tool, um den potenziellen finanziellen Schaden zu berechnen, der durch verschiedene Arten von Schäden an Ihrem Eigentum entstehen könnte. Indem Sie bestimmte Informationen zu Ihrem Eigentum und Ihrem Versicherungsbedarf eingeben, kann ein Schadensrechner eine Schätzung des potenziellen Schadens liefern und Ihnen helfen, eine Vorstellung davon zu bekommen.</p>
                </div>
            </div>
            </div>
        </body>
    );
}

export default Home;

