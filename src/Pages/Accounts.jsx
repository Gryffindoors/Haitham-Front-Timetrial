import React from 'react';
import CurrentUser from '../Components/CurrentUser';
import UserTable from '../Components/UserTable';



export default function Accounts() {
    // Placeholder: this will be replaced by your auth logic
    const isAdmin = true; // Simulate condition to show UserList
    const showUserForm = false; // Control visibility of UserData form

    return <>
        {/* Page Header */}
        <section className="px-4 py-6 bg-white shadow-sm border-b flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">Accounts</h1>

        </section>

        {/* Page Content */}
        <section className="px-4 py-6 bg-gray-50 min-h-screen space-y-6">

            {/* Current User Component */}
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Profile</h2>
                <CurrentUser />
            </div>

            {/* Conditional User List */}
            {isAdmin && (
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">User List</h2>
                    <button className="my-5 md:mt-0 inline-block bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-emerald-700 transition">
                        Create Account
                    </button>
                    <UserTable/>
                </div>
            )}

            {/* Conditional User Data Form */}
            {showUserForm && (
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Add / Edit User</h2>
                </div>
            )}

        </section>
    </>
}
