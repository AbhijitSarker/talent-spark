import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-gray-300 py-6 sticky bottom-0">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <p>Email: contact@abhijitsarker.com</p>
                        <p>Phone: +88 017 0329 0219</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold">Follow Us</h3>
                        <div className="flex space-x-2">
                            <a href="#" className="hover:text-gray-500">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="#" className="hover:text-gray-500">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href="#" className="hover:text-gray-500">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="hover:text-gray-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <p>&copy; 2023 TALENT SPARK. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;