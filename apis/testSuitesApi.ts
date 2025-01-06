import api from "@/config/axios";
import apiEndpoints from "./apiEndpoints";

let routeId = "";

function queryString(id: any) {
  routeId = id;
  return routeId;
}

// Example: Fetch user profile
export const ApiTestSuitesList = async (id: any) => {
  const response = await api.get(
    `${apiEndpoints?.projects}/${id}/${apiEndpoints?.testSuites}`
  );
  return response.data;
};

// Example: Update user profile
export const ApiTestSuitesDelete = async (id:any) => {
  const response = await api.put(`${apiEndpoints.projects}/${id}/${apiEndpoints.project.testSuiteDelete}/${id}`);
  return response.data;
};


// Add more methods as needed
