import { use, useEffect, useState } from 'react'
import './FriendList.css'

const FriendList = ({friends}) => {

    return(
        <div className="friendList">
            <h1>Friends</h1>
            <h2>{friends?.length} friends</h2>
            <ul className='friendList-content'>
                {friends?.map(friend => {
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

export default FriendList;