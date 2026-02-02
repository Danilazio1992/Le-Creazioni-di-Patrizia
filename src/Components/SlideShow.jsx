import React, { useState, useEffect } from 'react'
import DotBtn from './DotBtn'



function SlideShow() {
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(true) //per gestire un render di caricamento imposto subito true fino alla modifica tramite useEffect
    useEffect( () => { 
            const richiestaDati = async () => {
                try {
                    setIsLoading(true) //attivo il caricamento
                    const rispostaServer = await fetch("https://react--course-api.herokuapp.com/api/v1/data/gelateria") //stai dicendo chiedi i dati a questa API e aspetta il risultato
                    // // Verifica manuale dello stato HTTP (fetch non lancia errori per 404/500)
                    if (!rispostaServer.ok) {
                throw new Error(`Errore HTTP: ${rispostaServer.status}`);
            }
            const datiRicevuti = await rispostaServer.json() //dopo che ho ricevuto i dati gli sto dicendo ok elabora il json e rendilo utilizzabile e aspetta il risultato
            setData(datiRicevuti.data)
            console.log(datiRicevuti.data)
            setIsLoading(false)

        } catch (error) {
            console.error("fetch Error", error)
            setIsLoading(true)
        } 
    }
    richiestaDati()
  },[])

  return (
        <div className='flex w-max-full bg-amber-800 h-fit p-2 gap-2 flex-col'>
        {isLoading ?  <p>caricamento</p> : <p>finito</p>}
        <div className='flex w-max-full h-fit p-2 gap-2'>
        {data.map(city => (
            <div key={city.id} id={city.id} className='flex min-w-full h-fit w-[100%] bg-amber-50  justify-center'>
                <img src={city.img} alt={city.nome} id={city.id} className='flex w-fit aspect-[4/3] '/>
            </div>
            ))}
            </div>

            <div className='flex gap-2 h-full justify-center'>
                {data.filter((_,i) => i < 5).map((_,i) => (
                    <div className='flex' key={i}>
                        <DotBtn />
                    </div>))}
            </div>
            
        </div>        
  )
}

export default SlideShow