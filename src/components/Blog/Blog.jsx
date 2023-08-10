import React from 'react';

const Blog = ({ blog }) => {
    const {
        id,
        author,
        title,
        date,
        content,

    } = blog
    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-3xl text-purple-600 font-bold mb-4">{title}</h1>
                    <div className='flex justify-between'>
                        <p className="text-gray-600 mb-4">{author}</p>
                        <p className="text-gray-600 mb-4">Published on {date}</p>
                    </div>
                    <img
                        src="https://via.placeholder.com/800x400"
                        alt="Blog Post"
                        className="rounded-md w-full mb-4"
                    />
                    <p className="text-gray-700 leading-relaxed">
                        {content}
                    </p>


                </div>
            </div>
        </div>
    );
};

export default Blog;