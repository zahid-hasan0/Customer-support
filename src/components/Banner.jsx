import React from 'react';

const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg mt-6 p-8 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-white opacity-10 blur-xl"></div>

            <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-2">Customer Support Dashboard</h1>
                <p className="text-blue-100 mb-8 max-w-2xl">
                    Track and resolve customer tickets efficiently. Manage pending issues and keep your customers happy.
                </p>

                <div className="flex gap-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-sm flex-1 max-w-[200px]">
                        <p className="text-sm text-blue-100 font-medium mb-1 uppercase tracking-wider">In Progress</p>
                        <p className="text-4xl font-bold text-white tracking-tight">{inProgressCount}</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-sm flex-1 max-w-[200px]">
                        <p className="text-sm text-blue-100 font-medium mb-1 uppercase tracking-wider">Resolved</p>
                        <p className="text-4xl font-bold text-white tracking-tight">{resolvedCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
