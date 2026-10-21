import React, { use, useState } from 'react'
import { useAuth } from "../AuthContext/authContext";
function Indirizzi() {
    const {state: authState}= useAuth()
    const indirizziDiFatturazione = authState.user.indirizzi.fatturazione
    const indirizziDiSpedizione = authState.user.indirizzi.spedizione
    const {state, setState} = useState(false)
    return (
    <div className="flex flex-col gap-4 justify-center items-center p-2 w-full h-full">
      {!authState.isAuth ? (
        <p>Accedi per visualizzare i tuoi Indirizzi.</p>
      ) : (
      <div className='flex flex-col w-full h-fit p-2 bg-amber-300/50 rounded-xl justify-center gap-2 items-center'>
        <div className='flex w-[80%] bg-amber-950 h-fit rounded-xl p-2 justify-center'>
            {indirizziDiFatturazione.map(billingAddres => (<div className='flex flex-col p-2 bg-amber-300/20 h-fit w-fit rounded-2xl'>
                {Object.entries(billingAddres).map(([chiave,valore]) => (<p key={chiave}>{`${chiave}: ${valore}`} </p>))}
            </div>))}
        </div>
        
         <button onClick={(prev)=> console.log(authState.user.indirizzi.fatturazione[0])} className='justify-center p-2 rounded-2xl bg-amber-950/90 w-fit'>logga indirizzi</button></div>
      )}
    </div>
  )
}

export default Indirizzi