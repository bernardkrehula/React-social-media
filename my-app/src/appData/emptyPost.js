import { format } from "date-fns";

const date = new Date();

const emptyPost = {
            id: '',
            writenContent: "",
            time: format(date, 'HH:mm'),
            isPostEdited: false,

            postComments: [],
            likes: []
        }
export default emptyPost;