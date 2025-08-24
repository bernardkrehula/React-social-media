import { useState } from 'react';
import './SearchBar.css'
import emptyPost from './emptyPost';

const SearchBar = ({ placeholder, socialMediaData, filterFriends, setInputValue, variation, setPost, setCommentInput, setComment, value}) => {

    const handleOnChange = (e) => {
        const value = e.target.value;
        if(socialMediaData){
            const friend = socialMediaData['friendsList'].filter(friend => {
                return friend.firstName.toLowerCase().includes(value) || friend.lastName.toLowerCase().includes(value)
            })

            if(value) filterFriends(friend);
            else filterFriends([]);
        }
        if(setCommentInput) {
            setCommentInput(value);
            setComment(prev => ({...prev, content: value}))
        };
        if(setPost){
            setPost({
                ...emptyPost,
                id: crypto.randomUUID(), 
                writenContent: value
            });
            setInputValue(value);
        }
    }
    return(
        <input className={`searchBar ${variation}`} placeholder={placeholder} value={value} onChange={handleOnChange}/>
    )
}

export default SearchBar;