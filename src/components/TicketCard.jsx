import React from 'react';
import { Calendar, User, AlertCircle } from 'lucide-react';

const TicketCard = ({ ticket, handleAddToTaskStatus }) => {
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
            case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
            case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'Low': return 'bg-green-100 text-green-700 border-green-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    const formatDate = (dateString) => {
        const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div
            className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full border-gray-200"
            onClick={() => handleAddToTaskStatus(ticket)}
        >
            <div className="p-5 flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-semibold text-gray-500 tracking-wider">
                        {ticket.id}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded border ${getPriorityColor(ticket.priority)} flex items-center gap-1`}>
                        <AlertCircle size={10} />
                        {ticket.priority}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 leading-tight mb-2 line-clamp-2">
                    {ticket.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {ticket.description}
                </p>
            </div>

            <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                <div className="flex items-center gap-1.5 font-medium">
                    <User size={14} className="text-gray-400" />
                    {ticket.customer}
                </div>
                <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gray-400" />
                    {formatDate(ticket.createdAt)}
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
