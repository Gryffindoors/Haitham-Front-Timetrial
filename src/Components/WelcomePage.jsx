import React from 'react';

export default function WelcomePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-600 to-teal-500 flex flex-col items-center justify-center px-4 space-y-6">
      {/* Main Welcome Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to the Portal
        </h1>
        <p className="text-gray-600 text-base">
          You have successfully logged in. Enjoy your session.
        </p>
        <button
          type="button"
          className="w-full flex justify-center rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        >
          Sign Out
        </button>

      </div>

      {/* Optional Warning Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow p-4 text-center text-sm text-gray-600">
        For security reasons you will be logged out after closing this page.
      </div>
    </section>
  );
}
