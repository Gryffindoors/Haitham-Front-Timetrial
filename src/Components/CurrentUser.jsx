import React from 'react';

export default function CurrentUser() {
  // Dummy user data for now
  const user = {
    firstName: 'Haitham',
    lastName: 'Fowaty',
    role: 'Admin'
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* User Info */}
      <div className="space-y-1">
        <p className="text-base text-gray-700">
          <span className="font-medium text-gray-900">First Name:</span> {user.firstName}
        </p>
        <p className="text-base text-gray-700">
          <span className="font-medium text-gray-900">Last Name:</span> {user.lastName}
        </p>
        <p className="text-base text-gray-700">
          <span className="font-medium text-gray-900">Role:</span> {user.role}
        </p>
      </div>

      {/* Edit Button */}
      <button className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-blue-700 transition">
        Edit
      </button>
    </div>
  );
}
