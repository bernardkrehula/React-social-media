import './SearchBar.css'
import emptyPost from '../appData/emptyPost';

const SearchBar = ({ placeholder, filterFriends, setNewPost, variation, setNewComment, disabled, focusInput }) => {

    const handleOnChange = (e) => {
        const value = e.target.value;
        
        if(filterFriends) filterFriends(value);

        if(setNewComment && value != '') {console.log(value)
            setNewComment(prev => ({...prev, content: value}))};
        
        if(setNewPost){
            setNewPost({
                ...emptyPost,
                writenContent: value
            });
        }
    }
    return(
        <input className={`searchBar ${variation}`} ref={focusInput} placeholder={placeholder} onChange={handleOnChange} disabled={disabled}/>
    )
}

export default SearchBar;