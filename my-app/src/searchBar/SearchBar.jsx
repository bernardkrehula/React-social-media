import { useState } from 'react';
import './SearchBar.css'
import emptyPost from '../appData/emptyPost';

const SearchBar = ({ placeholder, filterFriends, setNewPost, variation, setCommentInput, setNewComment, value, disabled, setEditCommentInput}) => {

    const handleOnChange = (e) => {
        const value = e.target.value;
        
        if(filterFriends) filterFriends(value);

        if(setCommentInput) {
            setCommentInput(value);
            setNewComment(prev => ({...prev, content: value}))
        };
        
        if(setNewPost){
            setNewPost({
                ...emptyPost,
                writenContent: value
            });
        }
        if(setEditCommentInput) setEditCommentInput(value); 
    }
    return(
        <input className={`searchBar ${variation}`} placeholder={placeholder} value={value} onChange={handleOnChange} disabled={disabled}/>
    )
}

export default SearchBar;