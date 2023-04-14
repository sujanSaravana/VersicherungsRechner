import React from "react";
import './App.css';

function  Hausratsrechner(){
    
   const Basiswert = 200; 

   
    
    return(
        <div>
            <div>
                <header className="title">
                    <h1>
                        Hausratsrechner
                    </h1>
                </header>
            </div>
            <div>
                <form className="eingaben">
                    <h2>Quadratmeter</h2>
                    <input type="number" />
                    <h2>Basiswert</h2>
                    <input type="number" />
                </form>
            </div>
            <div>
                <form>
                    <h3>Vorgeschlagene Basiswert : {Basiswert}</h3>
                </form>
            </div>
            <div>
                <form>
                    <h3>Hausratswert : </h3>
                </form>
            </div>
        </div>
    );
}

export default Hausratsrechner;