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
                className="flex-shrink-0 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                title="Complete ticket"
            >
                <CheckCircle2 size={24} />
            </button>
        </div>
    );
};

export default TaskStatusCard;
