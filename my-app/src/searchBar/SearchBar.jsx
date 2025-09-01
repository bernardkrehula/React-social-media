import './SearchBar.css'
import emptyPost from '../appData/emptyPost';

const SearchBar = ({ placeholder, value, refFocus, setSearchBarValue, filterFriends, setNewPost, variation, setNewComment, disabled }) => {
    
    const handleOnChange = (e) => {
        const inputValue = e.target.value;
        setSearchBarValue(inputValue);
    
        if(filterFriends) filterFriends(value);

        if(setNewComment) {
            setNewComment(prev => ({...prev, content: value}))
        };

        if(setNewPost){
            setNewPost({
                ...emptyPost,
                id: crypto.randomUUID(),
                writenContent: value
            });
        }

    }
    return(
        <input className={`searchBar ${variation}`} ref={refFocus} value={value} placeholder={placeholder} onChange={handleOnChange} disabled={disabled}/>
    )
}

export default SearchBar;