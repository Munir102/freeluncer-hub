import React from 'react';

const PostBtn = () => {
    return (
        <div className="font-poppins">
            <button type="submit" className="w-full px-4 py-2 btn-outline outline-primary_color transition duration-300 btn text-xl bg-primary_color text-neutral-50 font-semibold rounded-lg shadow-md hover:bg-neutral-50 hover:text-primary_color">
            Post
            </button>
        </div>
    );
};

export default PostBtn;