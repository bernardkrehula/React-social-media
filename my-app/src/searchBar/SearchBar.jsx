import './SearchBar.css'
import emptyPost from '../appData/emptyPost';

const SearchBar = ({ placeholder, filterFriends, setNewPost, variation, setNewComment, disabled, refInput }) => {

    const handleOnChange = (e) => {
        const value = e.target.value;
        
        if(filterFriends) filterFriends(value);

        if(setNewComment) {
            setNewComment(prev => ({...prev, content: value}))
        };
        
        if(setNewPost){
            setNewPost({
                ...emptyPost,
                writenContent: value
            });
        }
    }
    return(
        <input className={`searchBar ${variation}`} ref={refInput} placeholder={placeholder} onChange={handleOnChange} disabled={disabled}/>
    )
}

export default SearchBar;