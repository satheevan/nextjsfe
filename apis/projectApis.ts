import api from '@/config/axios';

const apiProjects = {
  projectList :"/projects/",
}


// Example: Fetch user profile
export const ApiProjectList = async () => {
    const response = await api.get(apiProjects.projectList);
    return response.data;
  };
  
  // Example: Update user profile
  export const updateProjectItems = async (data: Record<string, any>) => {
    const response = await api.put('/user/profile', data);
    return response.data;
  };
  
  // Example: Fetch a list of items
  export const fetchProjectItems = async () => {
    const response = await api.get('/items');
    return response.data;
  };
  
  // Add more methods as needed