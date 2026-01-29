import { useState } from 'react'
import './App.css'
import CreateCardForm from './Components/CreateCardForm'
import CityCard from './Components/CityCard'
import {cities} from './assets/cities'
import TopBar from './Components/TopBar'
import Modal from './Components/Modal'
import Footer from './Components/Footer'


function App() {
  const [newData, setNewData] = useState(cities)
  const [idhovered,setIdHovered] =useState(-1) 
  const [hovered,setHovered] = useState(false)
  const [isModal,setIsModal] = useState(false)
  



/* const a = ((e) =>{ 
  setHovered(!hovered)
  setIdHovered(e.currentTarget.id)
  console.log(`idHovered: ${idhovered}`)
  console.log(`event target: ${e.currentTarget.id}`)
}) */
  const handleRemove = (id) => {setNewData(prevData => prevData.filter(el => el.id !== id))}


  return (
    <div className='flex w-full h-full flex-col bg-[#fae5cdc7]'>
    {isModal && <Modal setIsModal={setIsModal} setNewData={setNewData}/>}
    <TopBar setIsModal={setIsModal} />
      <section className=''>
        <div className='flex flex-wrap gap-4 p-4 w-full justify-center '>
      {newData.map((city) => (
        <CityCard city={city} key={city.id} handleRemove={handleRemove} hoverd={hovered} setHovered={setHovered} idhovered={idhovered} setIdHovered={setIdHovered} />))} 
        </div>
      </section>
       <div className='flex'>
      </div> 
      <Footer />
    </div>
  )
}

export default App
