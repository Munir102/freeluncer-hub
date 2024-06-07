import { useEffect } from "react";
import CreatePost from "../../components/Create_post/CreatePost";

const Post = () => {

    useEffect(() => {
        document.title = 'Task Titans - Post';
    })

    return (
        <div>
            <div className="md:max-w-7xl mx-auto">
                <CreatePost></CreatePost>
            </div>
        </div>
    );
};

export default Post;