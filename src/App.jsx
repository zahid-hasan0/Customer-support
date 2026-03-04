import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatusCard from './components/TaskStatusCard';
import Footer from './components/Footer';
import { initialTickets } from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [taskStatusList, setTaskStatusList] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleAddToTaskStatus = (ticket) => {
    // Check if it's already in progress
    const isAlreadyInProgress = taskStatusList.some((t) => t.id === ticket.id);
    if (!isAlreadyInProgress) {
      setTaskStatusList([...taskStatusList, ticket]);
      toast.info(`Ticket ${ticket.id} added to Task Status (In Progress)`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.warning(`Ticket ${ticket.id} is already in progress`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const completeTask = (ticket) => {
    // Remove from taskStatusList
    setTaskStatusList(taskStatusList.filter((t) => t.id !== ticket.id));

    // Add to resolvedTickets
    setResolvedTickets([...resolvedTickets, ticket]);

    // Remove from tickets list
    setTickets(tickets.filter((t) => t.id !== ticket.id));

    toast.success(`Ticket ${ticket.id} marked as Completed!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 md:px-6">
        <Banner
          inProgressCount={taskStatusList.length}
          resolvedCount={resolvedTickets.length}
        />

        <div className="flex flex-col lg:flex-row gap-8 mt-10 w-full pb-10">

          {/* Main List Section */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
                Customer Tickets
              </h2>
              <span className="bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-full font-medium">
                {tickets.length} Total
              </span>
            </div>

            {tickets.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {tickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    handleAddToTaskStatus={handleAddToTaskStatus}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center text-gray-500">
                <p className="text-lg">All tickets have been resolved!</p>
                <p className="text-sm mt-2">Great job maintaining zero inbox.</p>
              </div>
            )}
          </div>

          {/* Task Status Section */}
          <div className="lg:w-1/3">
            <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 sticky top-28 h-fit max-h-[calc(100vh-140px)] flex flex-col">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 justify-between">
                <span>Task Status</span>
                <span className="bg-blue-100 text-blue-700 text-xs py-1 px-3 rounded-full font-medium shadow-sm">
                  {taskStatusList.length} In Progress
                </span>
              </h2>

              <div className="overflow-y-auto flex-grow rounded-lg pr-2 -mr-2 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
                {taskStatusList.length > 0 ? (
                  taskStatusList.map((ticket) => (
                    <TaskStatusCard
                      key={ticket.id}
                      ticket={ticket}
                      completeTask={completeTask}
                    />
                  ))
                ) : (
                  <div className="text-center py-10 px-4 text-gray-500 bg-white/60 border border-dashed border-gray-300 rounded-xl">
                    <p className="font-medium text-gray-600 mb-1">No tickets in progress</p>
                    <p className="text-sm">Click on a ticket card to start working on it.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <ToastContainer toastClassName="shadow-lg rounded-xl overflow-hidden font-sans border border-gray-100" />
    </div>
  );
}

export default App;
