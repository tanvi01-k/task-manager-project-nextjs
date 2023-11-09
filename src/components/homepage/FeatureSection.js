import React from "react";
import { FaTasks, FaCalendarCheck, FaClipboardList } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-12 bg-blue-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {/* Feature 1 */}
          <div className="p-4 bg-blue-800 rounded-lg shadow-lg">
            <FaTasks className="text-4xl mb-2" />
            <h3 className="text-xl font-semibold">Task Management</h3>
            <p>Efficiently manage your tasks.</p>
          </div>

          {/* Feature 2 */}
          <div className="p-4 bg-blue-800 rounded-lg shadow-lg">
            <FaCalendarCheck className="text-4xl mb-2" />
            <h3 className="text-xl font-semibold">Calendar Integration</h3>
            <p>Seamlessly schedule tasks and events.</p>
          </div>

          {/* Feature 3 */}
          <div className="p-4 bg-blue-800 rounded-lg shadow-lg">
            <FaClipboardList className="text-4xl mb-2" />
            <h3 className="text-xl font-semibold">Task Lists</h3>
            <p>Organize tasks into lists for easy access.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
