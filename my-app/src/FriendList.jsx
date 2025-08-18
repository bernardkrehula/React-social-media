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
            <ul className='friendList-content'>
                {friendsData ? friendsData.map(friend => {
                const { id, firstName, lastName, img } = friend;
                console.log(friend)
                return(
                    <li key={id}>
                        <img src={img}></img>
                        <h3>{firstName} {lastName}</h3>
                    </li>
                )
            }) : ''}
            </ul>
        </div>
    )
}

export default FriendList;