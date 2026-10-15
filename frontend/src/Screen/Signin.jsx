import { useState } from 'react';

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
        altri_indirizzi:[],
        preferenze:[],
    })
    const handleChange = (e) =>{
        const {name, value}= e.target
        setUser(prev => ({...prev, [name]: value}))
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
            <ul className='flex flex-col w-full h-full gap-2 p-2'>
                <li className='flex flex-row text-amber-900 items-center gap-2 font-extrabold'>
                    <p>Nome:</p>
                    <input type="text" name="nome" id="nome" onChange={(e) => handleChange(e)} value={user.name} placeholder='Es: Mario' className=' text-center rounded-lg bg-amber-300'/>
                </li >
                <li className='flex flex-row text-amber-900 items-center gap-2 font-extrabold'>
                    <p>Cognome:</p>
                    <input type="text" name="cognome" id="cognome" onChange={(e) => handleChange(e)} value={user.cognome} placeholder='Es: Rossi' className=' text-center rounded-lg bg-amber-300'/>
                </li>
                <li className='flex flex-row text-amber-900 items-center gap-2 font-extrabold'>
                    <p>Data di Nascita:</p>
                    <input type="date" name="birthday" id="birthday" onChange={(e) => handleChange(e)} value={user.birthday}   className="bg-amber-50/50 rounded-lg w-40 text-amber-950 text-center [&::-webkit-datetime-edit]:flex [&::-webkit-datetime-edit]:justify-center"/>
                </li>
            </ul>
            <button type="submit" onClick={(e)=> { e.preventDefault(), console.log(user)}} className='flex w-fit h-fit bg-amber-600 p-2 rounded-lg hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-900'>stamp</button>
        </form>
    </div>
  )
}

export default Signin