import './SearchBar.css'
import emptyPost from '../appData/emptyPost';

const SearchBar = ({ placeholder, filterFriends, setNewPost, variation, setNewComment, disabled, setEditCommentInput}) => {

    const handleOnChange = (e) => {
        const value = e.target.value;
        console.log(setNewComment)
        if(filterFriends) filterFriends(value);

        if(setNewComment) {console.log(value)
            setNewComment(prev => ({...prev, content: value}))};
        
        if(setNewPost){
            setNewPost({
                ...emptyPost,
                writenContent: value
            });
        }
        if(setEditCommentInput) setEditCommentInput(value); 
    }
    return(
        <input className={`searchBar ${variation}`} placeholder={placeholder} onChange={handleOnChange} disabled={disabled}/>
    )
}

export default SearchBar;