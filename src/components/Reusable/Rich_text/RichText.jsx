import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import PostBtn from '../Post_btn/PostBtn';

const RichText = () => {
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState([]);

    const handleChange = (value) => {
        setContent(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (content.trim()) {
            setPosts([{ content, comments: [] }, ...posts]);
            setContent('');
        }
    };

    const addComment = (index, comment) => {
        const newPosts = [...posts];
        newPosts[index].comments.push(comment);
        setPosts(newPosts);
    };

    return (
        <div style={{ maxWidth: '100%', margin: 'auto', marginTop: '10px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', fontFamily: 'sans-serif' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <h1 className="text-xl font-semibold py-2 text-primary_font">Create Post</h1>
                    <div className="border-t-2 border-primary_color pt-3">
                        <ReactQuill
                            value={content}
                            onChange={handleChange}
                            theme="snow"
                            placeholder="What's on your mind?"
                            modules={{
                                toolbar: [
                                    [{ 'header': '1'}, { 'header': '2'}, { 'header': [3, 4, 5, 6]}, { 'font': [] }],
                                    [{ 'size': ['small', false, 'large', 'huge'] }],
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                    [{ 'indent': '-1'}, { 'indent': '+1' }],
                                    [{ 'color': [] }, { 'background': [] }],
                                    [{ 'align': [] }],
                                    ['link', 'image', 'video'],
                                    ['clean']
                                ],
                            }}
                            style={{ height: '300px' }}
                        />
                    </div>
                </div>
                <div className="mt-14">
                    <PostBtn></PostBtn>
                </div>
            </form>

            <div style={{ marginTop: '20px' }}>
                {posts.map((post, index) => (
                    <div key={index} style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f7fafc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />

                        <div className='mt-8'>
                            <h4>Comments :</h4>
                            <Comments postIndex={index} comments={post.comments} addComment={addComment} />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

const Comments = ({ postIndex, comments, addComment }) => {
    const [comment, setComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            addComment(postIndex, comment);
            setComment('');
        }
    };

    return (
        <div style={{ marginTop: '20px' }}>
            {comments.map((comment, index) => (
                <div key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#edf2f7', borderRadius: '6px' }}>
                    {comment}
                </div>
            ))}
            <form onSubmit={handleCommentSubmit} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment"
                    className="flex-1 p-2 rounded-md border border-primary_color mr-3 focus:outline-none"    
                />
                <button type="submit" className="px-4 btn-outline outline-primary_color transition duration-300 btn text-md bg-primary_color text-neutral-50 font-semibold rounded-lg shadow-md hover:bg-neutral-50 hover:text-primary_color"
                    onMouseOver={(e) => e.target.style.backgroundColor = '#22c55e'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#22c55e'}
                >
                    Comment
                </button>
            </form>
        </div>
    );
};

export default RichText;

