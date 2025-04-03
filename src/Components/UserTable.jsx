import React from 'react';
import { mockUsers } from '../API/UserAPI';


export default function UserTable() {
  return (
    <div className="overflow-x-auto w-full">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-teal-600 text-white">
            <tr>
              <th className="px-4 py-3">First Name</th>
              <th className="px-4 py-3">Last Name</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockUsers.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3">{user.firstName}</td>
                <td className="px-4 py-3">{user.lastName}</td>
                <td className="px-4 py-3 capitalize">{user.role}</td>
                <td className="px-4 py-3 flex justify-center gap-2">
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
