import './SearchBar.css'

const SearchBar = ({placeholder,socialMediaData, filterFriends, variation}) => {

    const handleOnChange = (e) => {
        const value = e.target.value;
        const friend = socialMediaData['friendsList'].filter(friend => {
            return friend.firstName.toLowerCase().includes(value) || friend.lastName.toLowerCase().includes(value)
        })
        if(value) filterFriends(friend);
        else filterFriends([]);
    }
    return(
        <input className={`searchBar ${variation}`} placeholder={placeholder} onChange={handleOnChange}/>
    )
}

export default SearchBar;