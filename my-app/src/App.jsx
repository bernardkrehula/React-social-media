import { useEffect, useState } from 'react'
import './App.css'
import data from './data'

function App() {
  const [ socialMediaData, setSocialMediaData ] = useState({});

  useEffect(() => {
    setSocialMediaData(data);
  },[])

  setTimeout(() =>{
    console.log('radi', socialMediaData)
  },1000)
  return (
    <>
      <div className='main'>
        <div className='header'>
          <input placeholder='🔍 Find friends'/>
          <img src='/profilePicture.JPG'/>
        </div>
        <hr />
      </div>
    </>
  )
}

export default App
