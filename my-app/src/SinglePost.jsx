import React, { useEffect, useRef, useState } from 'react';
import './SinglePost.css'
import Btn from './Btn';
import SearchBar from './SearchBar';
import newComment from './newComment';

const SinglePost = ({initialized, post, deletePost, changePostContent, postInput, setPostInput, addNewComment}) => {
    const [ postData, setPostData ] = useState({});
    const showPost = useRef(false);
    const [ displayOptions, setDisplayOptions ] = useState(false);
    const [ isEdited, setIsEdited ] = useState(false);
    const [ comment, setComment ] = useState(newComment);
    
    useEffect(() => {
        if(initialized.current) setPostData(post);
        showPost.current = true;
    }, [post])

    if(!postData) return null;
    const { id, writenContent, time, postComments, likes } = postData;

    const editPost = () => {
        setIsEdited(prev => !prev)
        setPostInput(writenContent);
    }
    const optionsDisplayed = () => {
        setDisplayOptions(prev => !prev);
    }
    const handleOnChange = (e) => {
        const value = e.target.value;
        changePostContent(id);
        setPostInput(value)
    }
    const addComment = () => {
       addNewComment(id, comment);
    }
    setTimeout(() => {
       /*  console.log(comment) */
    },8000)

    return(
        <>
        {showPost.current ? 
            <div className='post'>
                <div className='profilePhoto-data'>
                    <img className='profileImg' src='/profilePicture.JPG'/>
                    <div className='profilePhoto-data-text'>
                        <h1>Bernard Krehula</h1>
                        <h2>{time}</h2>
                    </div>
                    <svg className='dots' onClick={optionsDisplayed} xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                </div>
                {displayOptions ? <div className='post-dots' onClick={optionsDisplayed}>
                    <div className='dotBtns'  onClick={editPost}>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
                        <h2 className='dotsBtn'>{isEdited ? 'Save' : 'Edit'}</h2>
                    </div>
                    <div className='dotBtns'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                        <h2 className='dotsBtn' onClick={() => deletePost(id)}>Delete</h2>
                    </div>
                </div> : ''}
                {isEdited ? <textarea value={postInput} onChange={handleOnChange}/> : <p>{writenContent}</p>}
                <div className='comments-tag'>
                    {likes.slice(0, 2).map((content, index, array) => {
                        const { name, lastName } = content;

                        return(
                            <React.Fragment key={index}>
                                <h2>{name} {lastName}</h2>
                                <h3>{index < array.length - 1 ? ',' : '...'}</h3>
                            </React.Fragment>
                        )
                    })}
                    <h4>{postComments.length} comments</h4>
                </div>
                <div className='like-comment-btns'>
                    <Btn variation='comment-like-btn'>👍🏻Like</Btn>
                    <Btn variation='comment-like-btn'>💬Comments</Btn>
                </div>
                <div className='addComment'>
                    <img className='profileImg' src='/profilePicture.JPG'/>
                    <SearchBar placeholder='Write a comment' variation='addComment' setComment={setComment}/>
                    <Btn onClick={() => addComment(comment)}>Add comment</Btn>
                </div> 
                <div className='commentSection'>
                    {postComments.slice().reverse().map((comment, index) => {
                    const { content, userName, userLastName, userImg} = comment;
                    
                    return(
                        <div className='comment' key={index}>
                            <img src={userImg}/>
                            <div className='comment-info'>
                                <h2>{userName} {userLastName}</h2>
                                <SearchBar placeholder={content}/>
                            </div>
                            <svg className='dots' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </div>
                    )
                })}
                </div>
            </div> : ''}
        </>
        )
}

export default SinglePost;