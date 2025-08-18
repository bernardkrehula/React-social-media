import { use, useEffect, useState } from 'react'
import './FriendList.css'

const FriendList = ({socialMediaData, initialized}) => {
    const [ friendsData, setFriendsData ] = useState([]);

    useEffect(() =>{
        if(initialized.current) setFriendsData(socialMediaData['friendsList']);
    }, [socialMediaData])

    setTimeout(() =>{
        console.log(socialMediaData['friendsList'])
    },1000)
    
     return(
        <div className="friendList">
            <h1>Friends</h1>
            <h2>{friendsData ? friendsData.length : ''} friends</h2>
             {/* {socialMediaData.map(friend => {
                return(
                    <img></img>
                )
            })} */}
        </div>
    )
}

export default FriendList;