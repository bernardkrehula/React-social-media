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
  const [ searchBarValue, setSearchBarValue ] = useState('');
  const refInput = useRef(null);
  
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
    resetSearchBarInput();
  }

  const resetSearchBarInput = () => setSearchBarValue('');

  const deletePost = (postID) => {
    setUser(prev => ({
      ...prev,
      postContentData: prev.postContentData.filter(post => post.id !== postID)
    }))
  }

  const editPost = (postId, value) => {
      setUser(prev => ({...prev, postContentData: prev.postContentData.map(post => post.id === postId ? {...post, writenContent: value} : post)}))
  }
  const addNewComment = (postId, newComment) => {
        if(newComment.content != ''){
            setUser(prev => ({...prev, postContentData: prev.postContentData.map(post => post.id === postId ? {...post, postComments: [...post.postComments, newComment]} : post)}))
        }
    };
  const editComment = (postId, commentId, value) => setUser(prev => ({...prev, postContentData: prev.postContentData.map(post => post.id === postId ? {...post, postComments: post.postComments.map(comment => comment.id === commentId ? {...comment, content: value} : comment)} : post)}))

  const deleteComment = (postId, commentId) => setUser(prev => ({...prev, postContentData: prev.postContentData.map(post => post.id === postId ? {...post, postComments: post.postComments.filter(comment => comment.id !== commentId)} : post)}));

  if(loading) return <LoadingSpinner /> 

  return (
    <>
      <div className='main'>
        <div className='header'>
          <SearchBar placeholder='🔍 Find friends' variation='findFriendsBar' filterFriends={filterFriends}/>
          <img src={user.userPersonalData.img}/>
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
          <SearchBar placeholder='Write a post' variation='addPostBar' refInput={refInput} value={searchBarValue} setSearchBarValue={setSearchBarValue} setNewPost={setNewPost}></SearchBar>
          <Btn variation='addBtn' onClick={addPost}>Add post</Btn>
        </div>
        <div className='postContent'>
          <FriendList friendsList={user.friendsList}/>
          <div className='post-section'>
            {user.postContentData.map(post => (<SinglePost key={post.id} post={post} editPost={editPost} refInput={refInput} editComment={editComment} addNewComment={addNewComment} deletePost={deletePost} deleteComment={deleteComment} user={user}/>))}
          </div>
        </div>   
      </div>
    </>
  )
}

export default App