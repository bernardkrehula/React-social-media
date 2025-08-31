import React, { useRef, useState } from 'react';
import './SinglePost.css'
import Btn from '../button/Btn';
import SearchBar from '../searchBar/SearchBar';
import newEmptyComment from '../appData/newEmptyComment';
import DotOptions from './DotOptions/DotOptions';
import Comment from './comments/Comment';
import userLike from '../appData/userLike';

const SinglePost = ({ post, deletePost, user, editPost, editComment, addNewComment}) => {
    const [ postData, setPostData ] = useState(post);
    const { id, writenContent, time, postComments, likes } = post;
    const [ displayOptions, setDisplayOptions ] = useState(false);
    const [ isEdited, setIsEdited ] = useState(false);
    const [ newComment, setNewComment ] = useState(newEmptyComment);
    const [ isLiked, setIsLiked ] = useState(false);
    const [ displayComments, setDisplayComments ] = useState(false);
    const refInput = useRef(null);
    //Premjesiti izvor istine u app jsx
    //Pogledaj library date-fns za formatiranje datuma
    //Pogledaj kako mozes da postignes istu funckionalnost koristeci taj library
    //Tj da pise 6 months ago, 3 weeks ago...
    //Iskoristiti za dodavanje posta
    //Napravi funkciju format likes text
    //Kad se post edituje i komentar isto neka pise edited (pokraj 11 months ago)

    const editPostOnChange = (e) => {
        const value = e.target.value;
        editPost(id, value);
    }
    const saveEditPostChanges = () => setIsEdited(prev => !prev);

    const optionsDisplayed = () => setDisplayOptions(prev => !prev);
    
    const deleteComment = (commentId) => setPostData(prev => ({...prev, postComments: postComments.filter(comment => comment.id != commentId)}))
    //2 funckije za like 
    const addNewLike = () => {
        setIsLiked(prev => !prev);
        setPostData(prev => ({...prev, likes: [...prev.likes, userLike]}))
        if(isLiked) setPostData(prev => ({...prev, likes: prev.likes.filter(like => !like.isLikedByUser)}))
    };
    const focusAddCommentInput = () => refInput.current.focus();

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
                {displayOptions ? <DotOptions id={id} displayOptions={displayOptions} optionsDisplayed={optionsDisplayed} saveEditPostChanges={saveEditPostChanges} deletePost={deletePost} /> : ''}
                {isEdited ? <textarea value={writenContent} onChange={editPostOnChange}/> : <p>{writenContent}</p>}
                {isEdited ? <Btn variation='saveBtn' onClick={saveEditPostChanges}>Save</Btn> : ''}
                <div className='comments-tag'>
                    {/* likes.map((content, index, array) => {
                        const { name, lastName } = content;
                        //Napravi funkciju format likes text koja ce da primi likes array i da vrati string koji tu treba da pise
                        return(
                            <React.Fragment key={index}>
                                {index < 2 ? <h2>{name} {lastName}</h2> : <h3>and {array.length - 2} other like this post</h3>}
                                {index < 1 ? <h2 className='comma'>,</h2> : null}
                                {index < 1 || array.length > 2 ? null : <h3>likes this post</h3>}
                            </React.Fragment>
                        )
                    }) */} 
                    <h4 onClick={() => setDisplayComments(prev => !prev)}>{postComments.length} comments</h4>
                </div>
                <div className='like-comment-btns'>
                    <Btn variation={isLiked ? 'comment-like-btn-clicked' : 'comment-like-btn'} onClick={addNewLike}>👍🏻Like</Btn>
                    <Btn variation='comment-like-btn' onClick={focusAddCommentInput}>💬Comments</Btn>
                </div>
                <div className='addComment'>
                    <img className='profileImg' src='/profilePicture.JPG'/>
                    <SearchBar placeholder='Write a comment' setNewComment={setNewComment} refInput={refInput} variation='addComment'/>
                    <Btn onClick={() => addNewComment(id, newComment)}>Add comment</Btn>
                </div> 
                {displayComments && postComments.length != 0 ? <div className='commentSection'>
                    {postComments.slice().reverse().map((comment, index) => <Comment key={index} postId={id} comment={comment} setNewComment={setNewComment} editComment={editComment} addNewComment={addNewComment} deleteComment={deleteComment}/>)}
                </div> : null}
            </div>
        </>
        )
}

export default SinglePost;