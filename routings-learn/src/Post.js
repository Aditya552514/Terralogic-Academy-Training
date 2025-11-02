import { useParams } from "react-router-dom";

function Post () {
    const {id}=useParams(); //Hook to get url parameters
    return<h2>Post ID; {id}</h2>
}

export default Post;