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
    userPersonalData: {
        name: '',
        lastName: '',
        city: '',
        country: '',
        img: null,
        backgroundImg: null
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
                    userImg: null
                }
              ],
            likes: [
                {
                name: "",
                lastName: "",
                },
                {
                    name: "",
                    lastName: "",
                }
            ]
        }
    ]
  });
  const [ newPost, setNewPost ] = useState({});
  const [ searchedFriend, setSearchedFriend ] = useState([]);
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
  const filterFriends = (friendSearch) => {
    const filteredFriend = user.friendsList.filter(friend => friend.firstName.toLowerCase().includes(friendSearch) || friend.lastName.toLowerCase().includes(friendSearch));
    if(friendSearch != '') setSearchedFriend(filteredFriend);
    else setSearchedFriend([]);
  }
  const addPost = () =>{
    setUser(prev => ({
      ...prev,
      postContentData: [
        newPost,
        ...prev.postContentData
      ]
    }))
  }
  const deletePost = (postID) => {
    setUser(prev => ({
      ...prev,
      postContentData: prev.postContentData.filter(post => post.id !== postID)
    }))
  }

  //Pomaknuti changePostContent u singlePost
  const changePostContent = (id) => {
    setSocialMediaData(prev => ({...prev, 
      postContentData: prev.postContentData.map(post => post.id === id ? {...post, writenContent: postInput} : post)}));
  }

  if(loading) return <LoadingSpinner /> 

  return (
    <>
      <div className='main'>
        <div className='header'>
          <SearchBar placeholder='🔍 Find friends' variation='findFriendsBar' filterFriends={filterFriends}/>
          <img src={user.img}/>
        </div>
        <hr />
        <ul className='friends'>
                {searchedFriend.map((friend, index) => {
                    const { firstName, lastName, img } = friend;
                    return(
                        <li className='friend' key={index}>
                        <img src={img}/>
                        <h2>{firstName} {lastName}</h2>
                        </li>
                )
                })}
          </ul>
        <div className='profile-content'>
          <img className='backgroundPhoto' src={user.userPersonalData.backgroundImg}/>
          <div className='profile-info'>
            <img className='profilePhoto' src={user.userPersonalData.img}/>
            <div>
              <h2>{user.userPersonalData.name} {user.userPersonalData.lastName}</h2>
              <h3>{user.userPersonalData.city}, {user.userPersonalData.country}</h3>
            </div>
          </div>
        </div>
        <div className='addPost'>
          <SearchBar placeholder='Write a post' variation='addPostBar' setNewPost={setNewPost}></SearchBar>
          <Btn variation='addBtn' onClick={addPost}>Add post</Btn>
        </div>
        <div className='postContent'>
          <FriendList friendsList={user.friendsList}/>
          <div className='post-section'>
            {user.postContentData.map((post, index) => (<SinglePost key={index} post={post} deletePost={deletePost} changePostContent={changePostContent} user={user}/>))}
          </div>
        </div>   
      </div>
    </>
  )
}

export default App