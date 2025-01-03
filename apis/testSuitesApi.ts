import api from "@/config/axios";

let routeId = "";

function queryString(id: any) {
  routeId = id;
  return routeId;
}
const apiTestSuites = {
  projects: `/projects/`,
  testSuiteList: `/test-suits?isDraft=false/`,
};

// Example: Fetch user profile
export const ApiTestSuitesList = async (id: any) => {
  const response = await api.get(
    apiTestSuites.projects + id + apiTestSuites.testSuiteList
  );
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

// Add more methods as needed
