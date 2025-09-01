
const emptyPost = {
            id: '',
            writenContent: "",
            time: `${new Date().getHours()}:${new Date().getMinutes().toString().padStart(2, '0')}`,
            isPostEdited: false,

            postComments: [],
            likes: []
        }
export default emptyPost;