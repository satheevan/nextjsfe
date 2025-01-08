import api from "@/config/axios";
import apiEndpoints from "./apiEndpoints";

// Example: Fetch user profile
export const ApiTestSuitesList = async (projectId?: number) => {
  console.log("api passing Id",projectId);
  const response = await api.get(
    `/${apiEndpoints?.projects}/${projectId}/${apiEndpoints?.testSuites}`
  );
  return response.data;
};

// Example: Update user profile
export const ApiTestSuitesDelete = async (id: any, projectId?: number) => {
  const response = await api.delete(
    `/${apiEndpoints.projects}/${projectId}/${apiEndpoints.project.testSuiteDelete}/${id}`
  );
  return response.data;
};

// Add more methods as needed
