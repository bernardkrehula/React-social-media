import { useState } from 'react';
import './SearchBar.css'
import emptyPost from '../appData/emptyPost';

const SearchBar = ({ placeholder, changeFriendsInput, setInputValue, variation, setPost, setCommentInput, setNewComment, value, disabled, setEditCommentInput}) => {

    const handleOnChange = (e) => {
        const value = e.target.value;
        if(changeFriendsInput) changeFriendsInput(value);

        if(setCommentInput) {
            setCommentInput(value);
            setNewComment(prev => ({...prev, content: value}))
        };
        if(setPost){
            setPost({
                ...emptyPost,
                id: crypto.randomUUID(), 
                writenContent: value
            });
            setInputValue(value);
        }
        if(setEditCommentInput) setEditCommentInput(value); 
    }
    return(
        <input className={`searchBar ${variation}`} placeholder={placeholder} value={value} onChange={handleOnChange} disabled={disabled}/>
    )
}

export default SearchBar;