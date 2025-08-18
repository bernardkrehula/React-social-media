import { useEffect, useState, useRef } from 'react'
import './App.css'
import data from './data'
import SearchBar from './SearchBar';
import Btn from './Btn';
import FriendList from './FriendList';

function App() {
  const [ socialMediaData, setSocialMediaData ] = useState({});
  const [ foundFriend, setFoundFriend ] = useState([]);
  const initialized = useRef(false);


  useEffect(() => {
    setSocialMediaData(data);
    initialized.current = true;
  },[])
  const filterFriends = (friend) => {
    setFoundFriend(friend);
  }
  setTimeout(() =>{
   
  },1000)
  return (
    <>
      <div className='main'>
        <div className='header'>
          <SearchBar placeholder='🔍 Find friends' variation='findFriendsBar' socialMediaData={socialMediaData} filterFriends={filterFriends}/>
          <img src='/profilePicture.JPG'/>
        </div>
        <hr />
        {foundFriend.length != 0 ? <ul className='friends'>
          {foundFriend.map(friend => {
            const { firstName, lastName, img } = friend;
            console.log(firstName)
            return(
                <li className='friend'>
                  <img src={img}/>
                  <h2>{firstName} {lastName}</h2>
                </li>
          )
        })}</ul> : ''}
        <div className='profile-content'>
          <img className='backgroundPhoto' src='/background-image.jpg'/>
          <div className='profile-info'>
            <img className='profilePhoto' src='/profilePicture.JPG'/>
            <div>
              <h2>Bernard Krehula</h2>
              <h3>Varaždin, Croatia</h3>
            </div>
          </div>
        </div>
        <div className='addPost'>
          <SearchBar placeholder='Write a post' variation='addPostBar'></SearchBar>
          <Btn variation='addBtn'>Add post</Btn>
        </div>
        <div className='postContent'>
          <FriendList initialized={initialized} socialMediaData={socialMediaData}/>
        </div>
      </div>
    </>
  )
}

export default App
