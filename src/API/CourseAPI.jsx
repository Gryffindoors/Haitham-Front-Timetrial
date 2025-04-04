import api from "./api";

// GET: Fetch all courses
export const fetchAllCourses = async () => {
  try {
    const response = await api.get("courses_6291132509044148");
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

// POST: Add a new course
export const addCourse = async (newCourse) => {
  try {
    const response = await api.post("courses_6291132509044148", newCourse);
    return response.data;
  } catch (error) {
    console.error("Error adding course:", error);
    throw error;
  }
};

// PUT: Update a course by ID
export const updateCourse = async (id, updatedCourse) => {
  try {
    const response = await api.put(`courses_6291132509044148/${id}`, updatedCourse);
    return response.data;
  } catch (error) {
    console.error("Error updating course:", error);
    throw error;
  }
};
