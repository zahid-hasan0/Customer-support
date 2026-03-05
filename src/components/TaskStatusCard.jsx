import React from 'react';
import { CheckCircle } from 'lucide-react';

const TaskStatusCard = ({ ticket, completeTask }) => {
    return (
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-5 mb-4 flex flex-col gap-4">
            <h4 className="text-[15px] font-bold text-[#1e293b] leading-tight">
                {ticket.title}
            </h4>

            <button
                onClick={() => completeTask(ticket)}
                className="w-full bg-[#00a34a] hover:bg-[#166534] text-white font-bold py-2.5 rounded-md text-[14px] transition-colors cursor-pointer"
            >
                Complete
            </button>
        </div>
    );
};

export default TaskStatusCard;
