import api from "./api";

// GET: Fetch all users
export const fetchAllUsers = async () => {
  try {
    const response = await api.get("users_6291132509044148");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// POST: Add a new user
export const addUser = async (newUser) => {
  try {
    const response = await api.post("users_6291132509044148", newUser);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

// PUT: Update an existing user by ID
export const updateUser = async (id, updatedUser) => {
  try {
    const response = await api.put(`users_6291132509044148/${id}`, updatedUser);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
