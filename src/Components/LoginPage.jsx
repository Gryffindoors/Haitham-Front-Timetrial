import React from 'react';
import { LogoPhoto } from '../Assets/Photo';

export default function LoginPage() {
    return (
        <section className="min-h-screen bg-gradient-to-r from-indigo-600 to-teal-500 flex items-center justify-center">
            <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-row content-center justify-between ">

                    <img src={LogoPhoto} alt="" className='h-8' />
                    <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
                        Sign in to your account
                    </h2>
                </div>

                <form action="#" method="POST" className="space-y-5">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            autoComplete="text"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </section>
    );
}
