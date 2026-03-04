import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const TaskStatusCard = ({ ticket, completeTask }) => {
    return (
        <div className="bg-white border border-blue-100 rounded-xl shadow-sm p-4 mb-3 hover:border-blue-300 transition-colors flex items-center justify-between group">
            <div className="flex-grow pr-4">
                <div className="text-xs text-blue-500 font-semibold mb-1">{ticket.id}</div>
                <h4 className="text-sm font-medium text-gray-800 line-clamp-2">{ticket.title}</h4>
            </div>

            <button
                onClick={() => completeTask(ticket)}
                className="flex-shrink-0 bg-blue-50 text-blue-600 hover:bg-green-500 hover:text-white p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transform hover:scale-110 active:scale-95 shadow-sm"
                title="Mark as completed and resolved"
            >
                <CheckCircle2 size={24} />
            </button>
        </div>
    );
};

export default TaskStatusCard;
