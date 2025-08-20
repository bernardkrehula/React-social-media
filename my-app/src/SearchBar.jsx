import { useState } from 'react';
import './SearchBar.css'
import emptyPost from './emptyPost';

const SearchBar = ({placeholder, socialMediaData, filterFriends, inputValue, setInputValue, variation, setPost}) => {

    const handleOnChange = (e) => {
        const value = e.target.value;
        
        if(socialMediaData){
            const friend = socialMediaData['friendsList'].filter(friend => {
                return friend.firstName.toLowerCase().includes(value) || friend.lastName.toLowerCase().includes(value)
            })

            if(value) filterFriends(friend);
            else filterFriends([]);
        }
        if(variation === 'addComment'){

        }
        else{
            emptyPost.writenContent = value;
            setPost(emptyPost);
            setInputValue(value);
        }
    }
    return(
        <input className={`searchBar ${variation}`} placeholder={placeholder} value={inputValue} onChange={handleOnChange}/>
    )
}

export default SearchBar;