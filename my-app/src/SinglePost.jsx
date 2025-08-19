import React, { Fragment, useEffect, useState } from 'react';
import './SinglePost.css'

const SinglePost = ({initialized, socialMediaData}) => {
    const [ postData, setPostData ] = useState([]);

    useEffect(() => {
        if(initialized.current) setPostData(socialMediaData['postContentData']);
    }, [socialMediaData])

    return(
        <div className='post'>
            {postData ? postData.map((data, index) => {
                const { writenContent, time, postComments, likes } = data;
             
                return(
                    <React.Fragment key={index}>
                        <div className='profilePhoto-data'>
                            <img src='/profilePicture.JPG'/>
                            <div className='profilePhoto-data-text'>
                                <h1>Bernard Krehula</h1>
                                <h2>{time}</h2>
                            </div>
                            <svg className='dots' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </div>
                        <p>{writenContent}</p>
                        <div className='comments-tag'>
                            <h2></h2>
                            <h3></h3>
                        </div>
                        <div className='addComment'>

                            {postComments.map((comment, index) => {
                                const { content, userName, userLastName, userImg} = comment;
                                return(
                                    <div className='commentSection' key={index}>
                                        <img src={userImg}/>
                                        <h2>{userName} {userLastName}</h2>
                                        <input value={content} disabled/>
                                    </div>
                                )
                            })} 
                        </div>
                    </React.Fragment>
                )
            }) : ''}
        </div>
    )
}

export default SinglePost;