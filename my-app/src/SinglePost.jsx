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
                console.log(postComments)
                return(
                    <React.Fragment key={index}>
                        <div className='profilePhoto-data'>
                            <img/>
                            <h1>Bernard Krehula</h1>
                            <h2>{time}</h2>
                            <img/>
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