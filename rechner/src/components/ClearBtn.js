import setHauswert from "../Schadensrechner"
import setSchaden from "../Schadensrechner"
import setVersicherungssumme from "../Schadensrechner"
import setResult from "../Schadensrechner"
import setResult1 from "../Schadensrechner"
import setResult2 from "../Schadensrechner"
import setQuadratmeter from "../Hausratsrechner"
import setBasiswert from "../Hausratsrechner"

function Clear() {
    setHauswert("");
    setVersicherungssumme("");
    setSchaden("");
    setResult("");
    setResult1("");
    setResult2("");
    setQuadratmeter("");
    setBasiswert("");
}

export default Clear;