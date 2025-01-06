import api from "@/config/axios";
import apiEndpoints from "./apiEndpoints";

// Example: Fetch user profile
export const ApiProjectList = async () => {
  const response = await api.get(`/${apiEndpoints?.projects}`);
  return response.data;
};

// Example: Update user profile
export const updateProjectItems = async (data: Record<string, any>) => {
  const response = await api.put("/user/profile", data);
  return response.data;
};

// Example: Fetch a list of items
export const fetchProjectItems = async () => {
  const response = await api.get("/items");
  return response.data;
};

// Get project statistics
export const fetchProjectStatistics = async (id?: number) => {
  const response = await api.get(`/${apiEndpoints?.projects}/${id}/${apiEndpoints?.project?.stats}?limit=10`)
  return response?.data;
}