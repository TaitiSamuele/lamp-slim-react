import {useState} from 'react';

export default function Alunno(alunno, popolaAlunni){

    const [contatore, setContatore] = useState[alunno.id];
    const [inCancellazione, setInCancellazione] = useState(false);
    const [richiestaConferma, setRichiestaConferma] = useState(false);

    function incrementaVoto(){
        setContatore(conatore + 1);
    }
    async function cancellaAlunno(){
        setRichiestaConferma(false);
        setInCancellazione(true);
        const response = await fetch(`http://localhost:8080/alunni/${alunno.id}`, {method: "DELETE"})
    }
    function richiesta(){
        setRichiestaConferma(true);
    }
    function annulla(){
        setRichiestaConferma(false);
    }

    return(
        <div>
            {alunno.nome} {alunno.cognome}
            <button onClick={incrementaVoto}>{contatore}</button>

            {
                richiestaConferma ?
                    <span>
                        sei sicuro?
                        <button onClick={cancellaAlunno}>si</button>
                        <button onClick={annulla}>no</button>
                    </span>
                :
                    <button onClick={richiesta}>cancella</button>
            }
            {
                inCancellazione && 
                <span>in fase di cancellazione</span>
            }
        </div>
    );
}