import './DotOptions.css'

const DotOptions = ({id, variation, displayOptions, isCommentByUser, optionsDisplayed, saveEditPostChanges, deletePost, enableCommentEditing, activateOptions, isCommentDisabled, deleteComment}) => {
    
    return(
        <>
            <div className={`post-dots ${variation}`} onClick={() => {
                if(optionsDisplayed) optionsDisplayed();
                if(activateOptions) activateOptions();
            }}>{isCommentByUser || displayOptions ? <div className='dotBtns'  onClick={() => {
                        if(saveEditPostChanges) saveEditPostChanges();
                        if(enableCommentEditing) enableCommentEditing()}}>
                    <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
                    <h2 className='dotsBtn'>{isCommentDisabled || optionsDisplayed ? 'Edit' : 'Save'}</h2>
                </div> : ''}
                
                <div className='dotBtns' onClick={() => {
                            if(deletePost) deletePost(id);
                            if(deleteComment) deleteComment(id);
                        }}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                    <h2 className='dotsBtn'>Delete</h2>
                </div>
            </div>
        </>
    )
}

export default DotOptions;