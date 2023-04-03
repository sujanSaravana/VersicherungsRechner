import React from "react";
import { useState } from "react";
import './App.css';

function Schadensrechner() {

    const [Hausratswert, setHausratswert] = useState("");
    const [Versicherungssumme, setVersicherungssumme] = useState("")
    const [Schaden, setSchaden] = useState("");

    const submit = (event) => {
       // event.preventDefault();
        alert(`${Hausratswert}`); // in zusammenfassung rein tun  
    }
    
    const change = (event) => {
        setHausratswert(event.target.value);
    };

    const change1 = (event) => {
        setVersicherungssumme(event.target.value)
    }

    const change2 = (event) => {
        setSchaden(event.target.value);
    }

    return(
        <div>
            <h1 className="title">Schadensrechner</h1>
            <div className="eingaben">
                <div>
                    <form onSubmit={submit}>  
                        <h2>Hausratswert</h2>
                        <input type="number" value={Hausratswert} onChange={change} />

                        <h2>Versicherungssumme</h2>
                        <input type="number" value={Versicherungssumme} onChange={change1} />

                        <h2>Schaden</h2>
                        <input type="number" value={Schaden} onChange={change2} />
                        <br></br>
                        <button type="submit">Enter</button>
                    </form>
                </div>
            </div>
            <div className="zusammenfassung">
                <h2>Zusammenfassung</h2>
                <p>Totales Wert von Haus : {Hausratswert}</p>
                <p>Versicherte Summe vom Haus : {Versicherungssumme}</p>
                <p>Schden : {Schaden}</p>
            </div>
        </div>
    );
}


export default Schadensrechner;