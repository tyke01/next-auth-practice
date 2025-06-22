import React from "react";

const Settings = async () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">users</h1>
      <table className="w-full rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">First Name</th>
            <th className="p-2">Last Name</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>{/* Render all users and perform CRUD */}</tbody>
      </table>
    </div>
  );
};

export default Settings;
