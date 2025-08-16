import { useEffect, useState } from 'react'
import './App.css'
import data from './data'
import SearchBar from './SearchBar';

function App() {
  const [ socialMediaData, setSocialMediaData ] = useState({});
  const [ foundFriend, setFoundFriend ] = useState([]);


  useEffect(() => {
    setSocialMediaData(data);
  },[])
  const filterFriends = (friend) => {
    setFoundFriend(friend);
    console.log(friend)
  }
  setTimeout(() =>{
    console.log('radi', foundFriend)
  },1000)
  return (
    <>
      <div className='main'>
        <div className='header'>
          <SearchBar socialMediaData={socialMediaData} filterFriends={filterFriends}/>
          <img src='/profilePicture.JPG'/>
        </div>
        <hr />
        <ul className='friends'>
          {foundFriend.map(friend => {
            const { firstName, lastName, img } = friend;
            console.log(firstName)
            return(
                <li>
                  <h2>{firstName} {lastName}</h2>
                  <img src={img}/>
                </li>
          )
        })}
        </ul>
      </div>
    </>
  )
}

export default App
