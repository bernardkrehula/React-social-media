import { use, useEffect, useState } from 'react'
import './FriendList.css'

const FriendList = ({friendsList, searchFriendInput}) => {
    const [ friends, setFriends ] = useState([]);

   useEffect(() => {
        if(searchFriendInput != '') setFriends(friendsList);
        else setFriends([]);
        filterFriends(searchFriendInput); 
        console.log(searchFriendInput)
    },[searchFriendInput]);

    const filterFriends = (searchFriendInput) => {
        setFriends(prev => prev.filter(friend => friend.firstName.toLowerCase().includes(searchFriendInput) || friend.lastName.toLowerCase().includes(searchFriendInput)
    ))
        console.log(searchFriendInput)
    };
 
    return(
        <>
            <div className="friendList">
                <h1>Friends</h1>
                <h2>{friendsList.length} friends</h2>
                <ul className='friendList-content'>
                    {friendsList.map(friend => {
                    const { id, firstName, lastName, img } = friend;
                    return(
                        <li key={id}>
                            <img src={img}></img>
                            <h3>{firstName} {lastName}</h3>
                        </li>
                    )
                })}
                </ul>
            </div>
            <ul className='friends'>
                {friends.map((friend, index) => {
                    const { firstName, lastName, img } = friend;
                    return(
                        <li className='friend' key={index}>
                        <img src={img}/>
                        <h2>{firstName} {lastName}</h2>
                        </li>
                )
                })}
            </ul>
        </>
        
    )
}
/*{foundFriend.map((friend, index) => {
            const { firstName, lastName, img } = friend;
            return(
                <li className='friend' key={index}>
                  <img src={img}/>
                  <h2>{firstName} {lastName}</h2>
                </li>
          )
        })}*/

export default FriendList;