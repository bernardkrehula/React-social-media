import { useEffect, useState, useRef } from 'react'
import './App.css'
import data from './appData/data'
import SearchBar from './searchBar/SearchBar';
import Btn from './button/Btn';
import FriendList from './friendList/FriendList';
import SinglePost from './post/SinglePost';
import LoadingSpinner from './loadingIcon/LoadingSpinner';

function App() {
  const [ loading, setLoading ] = useState(false);
  const [ socialMediaData, setSocialMediaData ] = useState({});
  const [ user, setUser ] = useState([]);
  const [ foundFriend, setFoundFriend ] = useState([]);
  const [ post, setPost ] = useState({});
  const [ inputValue, setInputValue ] = useState('');
  const [ postInput, setPostInput ] = useState('');
  const initialized = useRef(false);
  //Napraviti strukturu unutar socialMediaData, ali na useEffect staviti podatke iz data.js u tu strukturu
  //Maknuti edit komentara drugih usera samno da ih ja mogu brisati
  //Dodati like posta
  //Posloziti strukturu filova da ne bude sve razbacano u src
  //Sve pomaknuti u komponente sto mogu

  useEffect(() => {
    setLoading(true)
    
    
    setTimeout(() => {
      setSocialMediaData(data);

      setUser(data.user);
      setLoading(false);
    },2000)
  },[])
  const filterFriends = (friend) => {
    setFoundFriend(friend);
  }
  const addPost = () =>{
    setSocialMediaData(prev => ({
      ...prev,
      postContentData: [
        post,
        ...prev.postContentData
      ]
    }))
    setInputValue('');
  }
  const deletePost = (postID) => {
    setSocialMediaData(prev => ({
      ...prev,
      postContentData: prev.postContentData.filter(post => post.id !== postID)
    }))
  }

  //Pomaknuti changePostContent u singlePost
  const changePostContent = (id) => {
    setSocialMediaData(prev => ({...prev, 
      postContentData: prev.postContentData.map(post => post.id === id ? {...post, writenContent: postInput} : post)}));
  }
  console.log(user)
  if(loading || user?.friendsList?.length === 0) return <LoadingSpinner />

  return (
    <>
      <div className='main'>
        <div className='header'>
          <SearchBar placeholder='🔍 Find friends' variation='findFriendsBar' socialMediaData={socialMediaData} filterFriends={filterFriends}/>
          <img src={user.img}/>
        </div>
        <hr />
        {foundFriend.length != 0 ? <ul className='friends'>
          {foundFriend.map((friend, index) => {
            const { firstName, lastName, img } = friend;
            return(
                <li className='friend' key={index}>
                  <img src={img}/>
                  <h2>{firstName} {lastName}</h2>
                </li>
          )
        })}</ul> : ''}
        <div className='profile-content'>
          <img className='backgroundPhoto' src={user.backgroundImg}/>
          <div className='profile-info'>
            <img className='profilePhoto' src={user.img}/>
            <div>
              <h2>{user.name} {user.lastName}</h2>
              <h3>{user.city}, {user.country}</h3>
            </div>
          </div>
        </div>
        <div className='addPost'>
          <SearchBar placeholder='Write a post' variation='addPostBar' setInputValue={setInputValue} setPost={setPost} addPost={addPost} value={inputValue}></SearchBar>
          <Btn variation='addBtn' onClick={addPost}>Add post</Btn>
        </div>
        <div className='postContent'>
          <FriendList friends={socialMediaData.friendsList}/>
          <div className='post-section'>
            {initialized.current ? socialMediaData.postContentData.map((post, index) => (<SinglePost key={index} initialized={initialized} post={post} deletePost={deletePost} changePostContent={changePostContent} setPostInput={setPostInput} postInput={postInput} user={user}/>)) : ''}
          </div>
        </div>
      </div>
    </>
  )
}

export default App