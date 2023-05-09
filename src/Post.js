import { useParams } from "react-router-dom";

const Post = () => {
    const { userId } = useParams();

    return (
        <>
            <hr width="95%" />
            <h2>User Post</h2>
            <p>{userId}'s post</p>
        </>
    );
};

export default Post;
