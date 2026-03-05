import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-[#fbfafe] px-10 py-5 flex items-center justify-between sticky top-0 z-10 w-full font-sans shadow-sm">
            <div className="flex items-center gap-2 text-[#2c2b3e] font-black text-xl tracking-tight">
                <span>Customer Care</span>
            </div>

            <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-6 text-[#4b5563] text-[13px] font-medium">
                    <a href="#" className="hover:text-black">Home</a>
                    <a href="#" className="hover:text-black">FAQ</a>
                    <a href="#" className="hover:text-black">Changelog</a>
                    <a href="#" className="hover:text-black">Blog</a>
                    <a href="#" className="hover:text-black">Download</a>
                    <a href="#" className="hover:text-black">Contact</a>
                </div>
                <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-medium px-5 py-2.5 rounded text-sm transition-colors cursor-pointer shadow-sm">
                    + New Ticket
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
