import React, { Fragment, useEffect, useState } from 'react';
import './SinglePost.css'
import Btn from './Btn';
import SearchBar from './SearchBar';

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
                            <img className='profileImg' src='/profilePicture.JPG'/>
                            <div className='profilePhoto-data-text'>
                                <h1>Bernard Krehula</h1>
                                <h2>{time}</h2>
                            </div>
                            <svg className='dots' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </div>
                        <p>{writenContent}</p>
                        <div className='comments-tag'>
                            {postComments.slice(0, 2).map((content, index, array) => {
                                const { userName, userLastName } = content;

                                return(
                                    <React.Fragment key={index}>
                                      <h2>{userName} {userLastName}</h2>
                                      <h3>{index < array.length - 1 ? ',' : '...'}</h3>
                                    </React.Fragment>
                                )
                            })}
                            <h4>{postComments.length} comments</h4>
                        </div>
                        <div className='like-comment-btns'>
                            <Btn variation='comment-like-btn'>👍🏻Like</Btn>
                            <Btn variation='comment-like-btn'>💬Comments</Btn>
                        </div>
                        <div className='addComment'>
                            <img className='profileImg' src='/profilePicture.JPG'/>
                            <SearchBar placeholder='Write a comment'/>
                            <Btn>Add comment</Btn>
                        </div> 
                        <div className='commentSection'>
                            {postComments.map((comment, index) => {
                            const { content, userName, userLastName, userImg} = comment;
                            return(
                                <div className='comments' key={index}>
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