import React from 'react';
import { coursesList } from '../API/CourseData';


export default function CoursesTable() {
  return <>
    <div className="overflow-x-auto w-full p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Instructor</th>
              <th className="px-4 py-3">Duration</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {coursesList.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{course.Title}</td>
                <td className="px-4 py-3">{course.Description}</td>
                <td className="px-4 py-3">{course.Instructor_name}</td>
                <td className="px-4 py-3">{course.Duration}</td>
                <td className="px-4 py-3 flex justify-center gap-2">
                  <button className="px-3 py-1 text-sm bg-indigo-500 text-white rounded hover:bg-indigo-600">
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
  </>
}
