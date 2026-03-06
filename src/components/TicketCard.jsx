
const TicketCard = ({ ticket, handleAddToTaskStatus }) => {
  const getPriorityColor = (priority) => {
    const p = priority?.toUpperCase();
    if (p === 'HIGH') {
      return 'text-red-500';
    } else if (p === 'MEDIUM') {
      return 'text-yellow-500';
    } else if (p === 'LOW') {
      return 'text-green-500';
    } else {
      return 'text-gray-500';
    }
  };



  const isHoverable = ticket.status !== 'In-Progress';

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col min-h-[170px] ${isHoverable ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
      onClick={() => isHoverable && handleAddToTaskStatus(ticket)}
    >
      <div className="flex justify-between items-start mb-2 gap-2">
        <h3 className="text-[15px] font-bold text-[#1e293b] leading-snug">
          {ticket.title}
        </h3>
        <div className={`px-3 py-1 rounded-full text-[11px] font-semibold flex-shrink-0 flex items-center gap-1.5 
                    ${ticket.status === 'In-Progress' ? 'bg-[#fef3c7] text-[#92400e]' : 'bg-[#dcfce7] text-[#166534]'}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${ticket.status === 'In-Progress' ? 'bg-[#d97706]' : 'bg-[#16a34a]'}`}></span>
          {ticket.status}
        </div>
      </div>

      <p className="text-[#64748b] text-[13px] mb-6 leading-relaxed flex-grow">
        {ticket.description}
      </p>

      <div className="flex items-center text-[11px] font-semibold text-[#64748b] whitespace-nowrap overflow-hidden text-ellipsis">
        <span className="text-gray-400 mr-2 shrink-0">#{ticket.id}</span>
        <span className={`${getPriorityColor(ticket.priority)} mr-auto shrink-0 uppercase tracking-wide`}>
          {ticket.priority} PRIORITY
        </span>

        <span className="font-medium mr-3 shrink-0">{ticket.customer}</span>
        <div className="flex items-center gap-1 shrink-0 font-medium">
          <i className="fa-regular fa-calendar text-gray-400 text-[12px]"></i>
          {(ticket.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
