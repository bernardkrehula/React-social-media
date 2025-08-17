
const SearchBar = ({socialMediaData, filterFriends}) => {

    const handleOnChange = (e) => {
        const value = e.target.value;
        const friend = socialMediaData['friendsList'].filter(friend => {
            return friend.firstName.toLowerCase().includes(value) || friend.lastName.toLowerCase().includes(value)
        })
        if(value) filterFriends(friend);
        else filterFriends([]);
    }
    return(
        <input placeholder='🔍 Find friends' onChange={handleOnChange}/>
    )
}

export default SearchBar;