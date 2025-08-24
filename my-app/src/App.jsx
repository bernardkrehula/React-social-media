import { useEffect, useState, useRef } from 'react'
import './App.css'
import data from './data'
import SearchBar from './SearchBar';
import Btn from './Btn';
import FriendList from './FriendList';
import SinglePost from './SinglePost';
import LoadingSpinner from './LoadingSpinner';

function App() {
  const [ loading, setLoading ] = useState(false);
  const [ socialMediaData, setSocialMediaData ] = useState({});
  const [ foundFriend, setFoundFriend ] = useState([]);
  const [ post, setPost ] = useState({});
  const [ inputValue, setInputValue ] = useState('');
  const [ postInput, setPostInput ] = useState('');
  const initialized = useRef(false);

  useEffect(() => {
    setSocialMediaData(data);
    initialized.current = true;

    setTimeout(() => {
      setLoading(true);
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
  const changePostContent = (id) => {
    setSocialMediaData(prev => ({...prev, 
      postContentData: prev.postContentData.map(post => post.id === id ? {...post, writenContent: postInput} : post)}));
  }
  const addNewComment = (id, newComment) => {
    setSocialMediaData(prev => ({...prev, 
      postContentData: prev.postContentData.map(post => post.id === id ? {...post, postComments: [...(post.postComments || []), newComment]} : post)}));
  }
  setTimeout(() =>{
    socialMediaData.postContentData.map(post => console.log(post.postComments))
  },1000)

  //Staviti u data user: i podaci
  return (
    <>
      {loading ?
      <div className='main'>
        <div className='header'>
          <SearchBar placeholder='🔍 Find friends' variation='findFriendsBar' socialMediaData={socialMediaData} filterFriends={filterFriends}/>
          <img src='/profilePicture.JPG'/>
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
          <SearchBar placeholder='Write a post' variation='addPostBar' inputValue={inputValue} setInputValue={setInputValue} setPost={setPost} addPost={addPost}></SearchBar>
          <Btn variation='addBtn' onClick={addPost}>Add post</Btn>
        </div>
        <div className='postContent'>
          <FriendList initialized={initialized} friends={socialMediaData.friendsList}/>
          <div className='post-section'>
            {initialized.current ? socialMediaData.postContentData.map((post, index) => (<SinglePost key={index} initialized={initialized} post={post} deletePost={deletePost} changePostContent={changePostContent} setPostInput={setPostInput} postInput={postInput} addNewComment={addNewComment}/>)) : ''}
          </div>
        </div>
      </div>
      : 
      <LoadingSpinner />}
    </>
  )
}

export default App