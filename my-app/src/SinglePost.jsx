import React, { useEffect, useRef, useState } from 'react';
import './SinglePost.css'
import Btn from './Btn';
import SearchBar from './SearchBar';
import newComment from './newComment';
import DotOptions from './DotOptions';

const SinglePost = ({initialized, post, deletePost, changePostContent, postInput, setPostInput, addNewComment, user}) => {
    const [ postData, setPostData ] = useState({});
    const showPost = useRef(false);
    const [ displayOptions, setDisplayOptions ] = useState(false);
    const [ isEdited, setIsEdited ] = useState(false);
    const [ comment, setComment ] = useState(newComment);
    const [ commentInput, setCommentInput ] = useState('');
    const [ isCommentDisabled, setCommentDisabled ] = useState(true);
    
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
        if(comment.content != '') addNewComment(id, comment);
        setCommentInput('');
    }

    return(
        <>
        {showPost.current ? 
            <div className='post'>
                <div className='profilePhoto-data'>
                    <img className='profileImg' src={user.img}/>
                    <div className='profilePhoto-data-text'>
                        <h1>Bernard Krehula</h1>
                        <h2>{time}</h2>
                    </div>
                    <svg className='dots' onClick={optionsDisplayed} xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                </div>
                {displayOptions ? <DotOptions id={id} optionsDisplayed={optionsDisplayed} editPost={editPost} deletePost={deletePost} /> : ''}
                {isEdited ? <textarea value={postInput} onChange={handleOnChange}/> : <p>{writenContent}</p>}
                {isEdited ? <Btn variation='saveBtn' onClick={editPost}>Save</Btn> : ''}
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
                    <SearchBar placeholder='Write a comment' variation='addComment' setCommentInput={setCommentInput} setComment={setComment} value={commentInput}/>
                    <Btn onClick={addComment}>Add comment</Btn>
                </div> 
                <div className='commentSection'>
                    {postComments.slice().reverse().map((comment, index) => {
                    const { content, userName, userLastName, userImg} = comment;
                    
                    return(
                        <div className='comment' key={index}>
                            <img src={userImg}/>
                            <div className='comment-info'>
                                <h2>{userName} {userLastName}</h2>
                                <SearchBar placeholder={content} disabled={isCommentDisabled}/>
                            </div>
                            <svg className='dots' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                            {isEdited ? <DotOptions id={index} variation='commentOptions' setCommentDisabled={setCommentDisabled}/> : ''}
                        </div>
                    )
                })}
                </div>
            </div> : ''}
        </>
        )
}

export default SinglePost;