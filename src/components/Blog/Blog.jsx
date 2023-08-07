import React from 'react';

const Blog = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-3xl font-bold mb-4">Title of the Blog Post</h1>
                    <p className="text-gray-600 mb-4">Published on August 8, 2023</p>
                    <img
                        src="https://via.placeholder.com/800x400"
                        alt="Blog Post"
                        className="rounded-md w-full mb-4"
                    />
                    <p className="text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                        tincidunt, neque a gravida dictum, libero dolor ullamcorper turpis,
                        non blandit massa orci quis nunc.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Curabitur ullamcorper erat a nulla suscipit, nec pharetra arcu
                        tristique. Nulla facilisi. Vestibulum vel congue nisi. Sed cursus
                        dignissim tortor, vel tincidunt libero facilisis vel.
                    </p>
                    <div className="mt-4">
                        <a
                            href="#"
                            className="text-blue-500 hover:underline hover:text-blue-700"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;