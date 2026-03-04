import React from 'react';
import { Ticket } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm border-b border-gray-100 flex items-center justify-between px-6 py-4 sticky top-0 z-10 w-full">
            <div className="flex items-center gap-2 text-primary-dark font-bold text-xl">
                <Ticket size={28} className="text-primary" />
                <span>SupportZone</span>
            </div>

            <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-4 text-gray-600 font-medium text-sm">
                    <a href="#" className="hover:text-primary transition-colors">Dashboard</a>
                    <a href="#" className="hover:text-primary transition-colors">Knowledge Base</a>
                    <a href="#" className="hover:text-primary transition-colors">Community</a>
                </div>
                <button className="bg-primary hover:bg-primary-dark text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors shadow-sm cursor-pointer">
                    + New Ticket
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
