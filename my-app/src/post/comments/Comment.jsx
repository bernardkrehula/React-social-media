import { useRef, useState } from 'react';
import DotOptions from '../DotOptions/DotOptions';
import './Comment.css'
import SearchBar from '../../searchBar/SearchBar';

const Comment = ({postId, comment, deleteComment, setNewComment }) => {
    const [ isCommentDisabled, setCommentDisabled ] = useState(true);
    const [ displayOptions, setDisplayOptions ] = useState(false);
    const { id, content, userName, userLastName, userImg, isCommentByUser } = comment;
    const [ commentInput, setCommentInput ] = useState('');

    const activateOptions = () => setDisplayOptions(prev => !prev);

    const enableCommentEditing = () => setCommentDisabled(prev => !prev);
    
    return(
        <div className='comment'>
            <img src={userImg}/>
            <div className='comment-info'>
                <h2>{userName} {userLastName}</h2>
                <SearchBar placeholder={content} disabled={isCommentDisabled} setNewComment={setNewComment} value={commentInput} setSearchBarValue={setCommentInput}/>
            </div>
            <svg className='dots' onClick={activateOptions} xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
            {displayOptions ? <DotOptions postId={postId} commentId={id} enableCommentEditing={enableCommentEditing} isCommentByUser={isCommentByUser} variation='commentOptions' setCommentDisabled={setCommentDisabled} activateOptions={activateOptions} isCommentDisabled={isCommentDisabled} deleteComment={deleteComment}/> : ''}
        </div>
    )
}

export default Comment;