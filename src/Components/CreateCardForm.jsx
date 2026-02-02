import React, { useState } from 'react'

function CreateCardForm({setNewData, setIsModal}) {
    const [isHoverd, setIsHovered] = useState(false)
    const handleAddCity = (el) => {setNewData(prevData => [...prevData, el])}
    const [city,setCity] = useState({
        name: "",
        imgUrl:"",
        description:  "",
        isVisited: false,
    })

 const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    let finalValue= type === "checkbox" ? checked : value; //check se é input:checkbox se lo é prende il valore di checked altrimenti prende e.target.value
    setCity({
        ...city,
        [name]: finalValue
    });
};
    const handleSubmit= (e) => {
        e.preventDefault()
        let {name,imgUrl,description} = city
        let dateId = Date.now()
        if(name && imgUrl && description) {
            handleAddCity({...city, id: dateId})
            setCity({
                name: "",
                imgUrl:"",
                description:  "",
                isVisited: false,
            })
            setIsModal(false)
        } else {
            alert("complila tutti i campi")
        }
    }
  return (
    <div className=' p-4 flex flex-col gap-4 text-blue-950 rounded-xl'>
        <title>
            CreateCardForm
        </title>
        <form className=' flex flex-col w-full gap-4'> 
            <div className='flex justify-items-start w-full'>
                <p className='w-2/5 flex '> Nome città:</p>
                <input type="text" name="name"placeholder='insert City Name EXAMPLE: Rome' className=' bg-amber-50 w-3/5 rounded-xs' onChange={(e)=> handleChange(e)} value={city.name}/>
            </div>
            <div className='flex justify-items-start w-full'>
                <p className='w-2/5 flex '> Url immagine:</p>
                <input type="url" name="imgUrl" placeholder='insert and img URL' className=' bg-amber-50 w-3/5 rounded-xs'  onChange={(e)=> handleChange(e)} value={city.imgUrl}/>
            </div>
            <div className='flex justify-items-start w-full h-fit'>
                <p className='w-2/5 flex '> Descrizione:</p>
                <input type="text" name="description" placeholder='insert description of city EXAMPLE: city where you can try a real carbonara' className=' bg-amber-50 w-3/5 rounded-xs'  onChange={(e)=> handleChange(e)} value={city.description}/>
            </div>
            <div className='flex justify-items-start w-full'>
                <p className='w-2/5 flex '> visitata?:</p>
                <div className='flex w-3/5 justify-center'>
                    <input type="checkbox" name="isVisited" onChange={(e)=> handleChange(e)}  />
                </div>
            </div>
            <div className='flex justify-center'>
                <input 
                type="button" 
                value=" vaffanculo" 
                onMouseEnter={() => setIsHovered(!isHoverd)} 
                onMouseLeave={()=>setIsHovered(!isHoverd)} 
                className={`${isHoverd? " bg-blue-50 border-2 border-blue-600 text-blue-900 rounded-xl font-extrabold p-2" :"bg-blue-700 border-cyan-300 border-2 rounded-xl min text-amber-50 font-extrabold p-2"}`} 
                onClick={(e)=> handleSubmit(e)}
                />
            </div>
        </form>
    </div>
  )
}

export default CreateCardForm