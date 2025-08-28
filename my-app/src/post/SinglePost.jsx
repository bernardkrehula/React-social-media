import React, { useEffect, useRef, useState } from 'react';
import './SinglePost.css'
import Btn from '../button/Btn';
import SearchBar from '../searchBar/SearchBar';
import newEmptyComment from '../appData/newEmptyComment';
import DotOptions from './DotOptions/DotOptions';
import Comment from './comments/Comment';

const SinglePost = ({ post, deletePost, user}) => {
    const [ postData, setPostData ] = useState(post)
    const { id, writenContent, time, postComments, likes } = postData;
    const [ postInput, setPostInput ] = useState(writenContent);
    const [ displayOptions, setDisplayOptions ] = useState(false);
    const [ isEdited, setIsEdited ] = useState(false);
    const [ newComment, setNewComment ] = useState(newEmptyComment);
    const [ editCommentInput, setEditCommentInput ] = useState('');

    const editPost = (e) => {
        const value = e.target.value;
        setPostData(prev => ({...prev, writenContent: value }));
        setPostInput(value)
    }
    const saveEditPostChanges = () => {
        setIsEdited(prev => !prev);
    }

    const optionsDisplayed = () => {
        setDisplayOptions(prev => !prev);
    }
    
    const addNewComment = () => {
        setPostData(prev => ({...prev, postComments: [...prev.postComments, { ...newComment, id: crypto.randomUUID() }]
    }))};

    const editComment = (commentId) => {
        setPostData(prev => ({...prev, postComments: postComments.map(comment=> comment.id === commentId ? {...comment, content: newComment.content } : comment)}))
    }
    const deleteComment = (commentId) => {
        setPostData(prev => ({...prev, postComments: postComments.filter(comment => comment.id != commentId)}))
    }

    return(
        <>
            <div className='post'>
                <div className='profilePhoto-data'>
                    <img className='profileImg' src={user.userPersonalData.img}/>
                    <div className='profilePhoto-data-text'>
                        <h1>{user.userPersonalData.name} {user.userPersonalData.lastName}</h1>
                        <h2>{time}</h2>
                    </div>
                    <svg className='dots' onClick={optionsDisplayed} xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                </div>
                {displayOptions ? <DotOptions id={id} optionsDisplayed={optionsDisplayed} saveEditPostChanges={saveEditPostChanges} deletePost={deletePost} /> : ''}
                {isEdited ? <textarea value={postInput} onChange={editPost}/> : <p>{writenContent}</p>}
                {isEdited ? <Btn variation='saveBtn' onClick={() => {saveEditPostChanges}}>Save</Btn> : ''}
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
                    <SearchBar placeholder='Write a comment' setNewComment={setNewComment} variation='addComment'/>
                    <Btn onClick={addNewComment}>Add comment</Btn>
                </div> 
                <div className='commentSection'>
                    {postComments.slice().reverse().map((comment, index) => <Comment key={index} comment={comment} editComment={editComment} deleteComment={deleteComment}/>)}
                </div>
            </div>
        </>
        )
}

export default SinglePost;