import React from "react";
import { useState } from "react";
import './App.css';
import ClearBtn from "./components/ClearBtn";

function Schadensrechner() {

    const [Hauswert, setHauswert] = useState("");
    const [Versicherungssumme, setVersicherungssumme] = useState("")
    const [Schaden, setSchaden] = useState("");
    const [result, setResult] = useState("");
    const [result1, setResult1] = useState("");
    const [result2, setResult2] = useState("");
    const [error, setError] = useState("");
    const [clearClick, setClearClick] = useState(false);


    const clear = () => {
        setHauswert("");
        setVersicherungssumme("");
        setSchaden("");
        setResult("");
        setResult1("");
        setResult2("");
        setError("")
        setClearClick(true);
    }

    
    const change = (event) => {
        setHauswert(event.target.value);
    };

    const change1 = (event) => {
        setVersicherungssumme(event.target.value)
    };

    const change2 = (event) => {
        setSchaden(event.target.value);
    };

    const enterButton = (event) => {
        event.preventDefault();
        if (clearClick) {
            setClearClick(false);
            return;
        }if(Schaden && Hauswert && Versicherungssumme) {
            const calculate = (Versicherungssumme / Hauswert) * Schaden;
            setResult(parseInt(calculate).toFixed(2));
            setResult1(parseInt(Schaden - calculate).toFixed(2));
            setResult2(parseInt((calculate / Schaden) *100).toFixed(2) + "%");
            setError("")
        }else{
            setError("Please fill in")
           window.alert("Please fill in")
        }
    };
      

    return(
        <div className="background">
            <h1 className="title">
                Schadensrechner
            </h1>
            <div className="schadensrechner">
                <div>
                    <form onSubmit={enterButton} className="eingaben">  
                        <h2>Hauswert</h2>
                        <input type="number" value={Hauswert} onChange={change} />

                        <h2>Versicherungssumme</h2>
                        <input type="number" value={Versicherungssumme} onChange={change1} />

                        <h2>Schaden</h2>
                        <input type="number" value={Schaden} onChange={change2}  />
                        <br></br>
                        <button type="submit" >Enter</button>
                        <ClearBtn onClick={clear} />
                    </form>
                </div>
                <div className="zusammenfassung">
                    <h2>Zusammenfassung</h2>
                    <p>Totales Wert von Haus : {Hauswert}</p>
                    <p>Versicherte Summe vom Haus : {Versicherungssumme}</p>
                    <p>Schaden : {Schaden}</p>
                    <p className="result">Entschädigung : {result}</p>
                    <p className="result">Selbstbehalt : {result1}</p>
                    <p className="result">Prozentuale <br></br> Absicherung : {result2}</p>
                </div>
            </div>
        </div>
    );
}


export default Schadensrechner;