import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatusCard from './components/TaskStatusCard';
import Footer from './components/Footer';
import { TicketData } from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tickets, setTickets] = useState(TicketData);
  const [taskStatusList, setTaskStatusList] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleAddToTaskStatus = (ticket) => {
    // we use filter to see if this ticket is already in our progress list
    const checkDuplicate = taskStatusList.filter((t) => t.id === ticket.id);

    if (checkDuplicate.length === 0) {
      // add the ticket to progress list
      setTaskStatusList([...taskStatusList, ticket]);

      // we change the status of the ticket in the main list
      const updatedList = tickets.map((t) => {
        if (t.id === ticket.id) {
          return { ...t, status: 'In-Progress' };
        }
        return t;
      });
      setTickets(updatedList);

      toast.info(`Ticket #${ticket.id} added to task status.`);
    } else {
      toast.warning(`Ticket #${ticket.id} is already in progress.`);
    }
  };

  const completeTask = (ticket) => {
    // delete the ticket from the matching list
    const listAfterDelete = taskStatusList.filter((t) => t.id !== ticket.id);
    setTaskStatusList(listAfterDelete);

    // add to solved list
    setResolvedTickets([...resolvedTickets, ticket]);

    // also remove from the main tickets list
    const newList = tickets.filter((t) => t.id !== ticket.id);
    setTickets(newList);

    toast.success(`Ticket #${ticket.id} resolved successfully!`);
  };





  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f7f7f9] text-[#334155]">
      <Navbar />

      <main className="flex-grow max-w-[1300px] mx-auto px-6 w-full pb-16">
        <Banner
          progressCount={taskStatusList.length || 0}
          solveCount={resolvedTickets.length || 0}
        />

        <div className="flex flex-col lg:flex-row gap-10 mt-10 w-full">
          <div className="lg:w-[68%] flex flex-col">
            <h2 className="text-[22px] font-bold text-[#1e293b] mb-6">
              Customer Tickets
            </h2>

            {tickets.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                {tickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id} ticket={ticket}
                    handleAddToTaskStatus={handleAddToTaskStatus}
                  />
                ))}
              </div>
            ) : (
              <div className="text-gray-700">
                No tickets available.
              </div>
            )}
          </div>
          <div className="lg:w-[32%] flex flex-col gap-10">
            <div>
              <h2 className="text-[20px] font-bold text-[#1e293b] mb-5">
                Task Status
              </h2>

              <div className="flex flex-col">
                {taskStatusList.length > 0 ? (
                  taskStatusList.map((ticket) => (
                    <TaskStatusCard
                      key={ticket.id}
                      ticket={ticket}
                      completeTask={completeTask}
                    />
                  ))
                ) : (
                  <div className="h-[100px] border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm italic">
                    No tasks in progress
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-[20px] font-bold text-[#1e293b] mb-5">
                Resolved Task
              </h2>
              {resolvedTickets.length === 0 ? (
                <p className="text-[14px] text-gray-500">No resolved tasks yet.</p>
              ) : (
                <div className="flex flex-col">
                  {resolvedTickets.map((ticket) => (
                    <div key={ticket.id} className="text-[13px] font-medium text-gray-600 bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-3 flex items-center gap-3">
                      <span className="text-gray-300">#{ticket.id}</span>
                      <span>{ticket.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <ToastContainer toastClassName="shadow-sm rounded bg-white text-sm" />
    </div>
  );
}

export default App;
