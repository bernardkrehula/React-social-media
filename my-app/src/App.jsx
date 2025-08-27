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
  const [ user, setUser ] = useState({
    userData: {
        name: '',
        lastName: '',
        city: '',
        country: '',
        img: '',
        backgroundImg: ''
    },
    friendsList: [
        {                  
            id: '',
            firstName: "",
            lastName: "",
            img: null,
        }
    ],
    postContentData: [
        {
            id: '',
            writenContent: "",
            time: "",

            postComments: [
                {
                    id: '',
                    content: "",
                    userName: '',
                    userLastName: '',
                    userImg: ''
                }
              ]
        }
    ]
  });
  const [ searchFriendInput, setSearchFriendInput ] = useState('');
  //Napraviti strukturu unutar socialMediaData, ali na useEffect staviti podatke iz data.js u tu strukturu
  //Maknuti edit komentara drugih usera samno da ih ja mogu brisati
  //Dodati like posta
  //Posloziti strukturu filova da ne bude sve razbacano u src
  //Sve pomaknuti u komponente sto mogu

  useEffect(() => {
    setLoading(true)
    setUser(data);

    setTimeout(() => {
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
  const changeFriendsInput = (value) => setSearchFriendInput(value);

  if(loading) return <LoadingSpinner /> 

  return (
    <>
      <div className='main'>
        <div className='header'>
          <SearchBar placeholder='🔍 Find friends' variation='findFriendsBar' changeFriendsInput={changeFriendsInput} filterFriends={filterFriends}/>
          <img src={user.img}/>
        </div>
        <hr />
        <FriendList friendsList={user.friendsList} searchFriendInput={searchFriendInput}/>
        {/* <div className='profile-content'>
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
          <SearchBar placeholder='Write a post' variation='addPostBar' addPost={addPost}></SearchBar>
          <Btn variation='addBtn' onClick={addPost}>Add post</Btn>
        </div>
        <div className='postContent'>
          <FriendList friendsList={user.friendsList}/>
          <div className='post-section'>
            {user.postContentData.map((post, index) => (<SinglePost key={index} post={post} deletePost={deletePost} changePostContent={changePostContent} user={user}/>))}
          </div>
        </div> */}
      </div>
    </>
  )
}

export default App