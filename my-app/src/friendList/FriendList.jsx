import { use, useEffect, useState } from 'react'
import './FriendList.css'

const FriendList = ({friendsList}) => {
    
    
    return(
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