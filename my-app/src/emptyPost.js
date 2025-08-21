
const emptyPost = {
            writenContent: "",
            time: `${new Date().getHours()}:${new Date().getMinutes().toString().padStart(2, '0')}`,

            postComments: [],
            likes: []
        }
export default emptyPost;