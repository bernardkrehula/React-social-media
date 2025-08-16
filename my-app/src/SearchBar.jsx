
const SearchBar = ({socialMediaData}) => {

    const handleOnChange = (e) => {
        const value = e.target.value;
        const friend = socialMediaData['friendsList'].map(friend => console.log(friend.firstName.toLowerCase().match(value) || friend.lastName.toLowerCase().match(value)))
    }
    return(
        <input placeholder='🔍 Find friends' onChange={handleOnChange}/>
    )
}

export default SearchBar;