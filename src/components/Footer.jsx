import React from 'react';

const Footer = () => {
    return (
        <footer className="h-[8vh] flex justify-center items-center text-purple-300 bg-black border-t border-purple-700">
            <p>All rights reserved &copy; {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
