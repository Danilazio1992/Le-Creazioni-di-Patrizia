import React from 'react'
import { useState } from 'react'

function Signin() {
    const [user, setUser] = useState({
        nome:"",
        cognome:"",
        birthday:"",
        via:"",
        civico:"",
        cap:"",
        telefono_mobile:"",
        telefono_Fisso:"",
        email:"",
        codice_Fiscale:"",
        nome_visualizzato:"",
        password:"",
        indirizzo_spedizione:true,
        preferenze:[],
    })
    const handleChange = (e) =>{
        return
    }
    const handleSubmit = (e) =>{
        return
    }
  return (
    <div className='flex flex-col p-4
     '>
        <title className=' flex font-extrabold'>
            Signin
        </title>
        <form className='flex w-full h-full p-2'>
            <ul className='flex w-full h-full p-2'>
                <li className='flex flex-row text-amber-900 items-center gap-2'>
                    <p>Nome:</p>
            <input type="text" name="nome" id="nome" onChange={(e) => handleChange(e)} value={user.name} placeholder='Es: Daniele' className='p-1 text-center rounded-2xl bg-amber-300'/>

                </li>

            </ul>
        </form>
    </div>
  )
}

export default Signin