import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-12 py-8 w-full">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                <p>© 2026 SupportZone Inc. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-primary transition-colors">Help Center</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
