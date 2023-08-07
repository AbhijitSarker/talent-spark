import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen py-16">
                <div className="container mx-auto">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <div className='contact-image mb-20'>
                            <div className=' text-center py-10 lg:py-40 bg-color	container mx-auto'>
                                <h2 className='text-7xl font-bold bg-color text-white'>Contact Us</h2>
                                <p className='text-2xl font-medium bg-color text-white'>Reach Out, We're Here to Help</p>
                                <p className='px-5 md:px-52 bg-color text-white'> Thank you for considering TALENT SPARK as your trusted partner in your career journey. We value your inquiries, feedback, and suggestions, and we're here to provide you with the support you need. Whether you're a job seeker, an employer, or a curious visitor, we're just a message away.</p>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold mt-6">Customer Support</h2>
                        <p>Our dedicated customer support team is ready to assist you with any questions or concerns you may have. We're committed to providing timely and effective solutions to ensure your experience with TALENT SPARK is smooth and enjoyable.</p>

                        <h3 className="text-lg font-semibold mt-4">Contact Information</h3>
                        <p>Email: For general inquiries, assistance, or feedback, please email us at support@abhijitsarker.com.</p>
                        <p>Phone: If you prefer to speak with us directly, you can reach our customer support team at +88 017 03290219. Our lines are open 24/7.</p>

                        <h2 className="text-xl font-semibold mt-6">Technical Support</h2>
                        <p>Encountering technical issues while using our platform? Our technical support team is here to help you troubleshoot and resolve any technical challenges you may face.</p>

                        <h3 className="text-lg font-semibold mt-4">Contact Information</h3>
                        <p>Email: For technical assistance or issues, please reach out to us at techsupport@t@abhijitsarker.com.</p>
                        <p>Phone: You can also contact our technical support team at +88 017 03290219 during our technical support hours 24/7.</p>

                        <h2 className="text-xl font-semibold mt-6">Partnerships and Business Inquiries</h2>
                        <p>For business inquiries, collaborations, and partnership opportunities, we're excited to explore how we can work together to create value and empower careers.</p>

                        <h3 className="text-lg font-semibold mt-4">Contact Information</h3>
                        <p>Email: To discuss potential partnerships or business opportunities, please email us at abhijitsarker03@gmail.com.</p>

                        <h2 className="text-xl font-semibold mt-6">Feedback and Suggestions</h2>
                        <p>Your input matters to us, and we're constantly striving to enhance your experience on our platform. If you have any suggestions, feedback, or ideas for improvement, we'd love to hear from you.</p>

                        <h2 className="text-xl font-semibold mt-6">Social Media</h2>
                        <p>Stay connected with us and stay informed about the latest updates, trends, and news related to careers, job searching, and hiring.</p>
                        <p>Follow us on Facebook for regular updates and engaging content.</p>

                        <h2 className="text-xl font-semibold mt-6">Address</h2>
                        <p>While we primarily operate online, you can also reach us at our physical address:</p>
                        <p>TALENT SPARK<br />221B Becker Street<br />London<br />England</p>
                        <p>Please note that visits to our physical address may require an appointment.</p>

                        <p>Thank you for considering TALENT SPARK as your go-to resource for all things career-related. We look forward to assisting you on your journey to success and growth.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="example@example.com"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                rows="5"
                                placeholder="Your message here"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Contact;