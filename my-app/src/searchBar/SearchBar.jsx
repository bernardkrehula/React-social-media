import './SearchBar.css'
import emptyPost from '../appData/emptyPost';

const SearchBar = ({ placeholder, value, setSearchBarValue, handleChanges, filterFriends, setNewPost, variation, setNewComment, disabled }) => {
    
    const handleOnChange = (e) => {
        const inputValue = e.target.value;
        setSearchBarValue(inputValue);
    
        if(filterFriends) filterFriends(value);

       /*  if(setNewComment) {
            setNewComment(prev => ({...prev, content: value}))
        };
 */

        if(setNewPost){
            setNewPost({
                ...emptyPost,
                id: crypto.randomUUID(),
                writenContent: value
            });
        }
        if(handleChanges){
            handleChanges(inputValue);
        } 
    }
    return(
        <input className={`searchBar ${variation}`} value={value} placeholder={placeholder} onChange={handleOnChange} disabled={disabled}/>
    )
}

export default SearchBar;