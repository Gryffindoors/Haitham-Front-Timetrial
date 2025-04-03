import React from 'react';
import CoursesTable from '../Components/CourseTable';

export default function Courses() {
  return (
    <>
      <section className="px-4 py-6 bg-white shadow-sm border-b flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Course List</h1>
        <button className="mt-4 md:mt-0 inline-block bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-teal-700 transition">
          Add New Course
        </button>
      </section>

      <section className="px-4 py-6 bg-gray-50 min-h-screen">
        <CoursesTable />
      </section>
    </>
  );
}
