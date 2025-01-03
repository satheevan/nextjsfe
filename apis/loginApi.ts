import api from "@/config/axios";

const apiAuth = {
    userAuth :"/auth/login",
    userRegister :"/user/profile",
    userList :"/items",
}


// Example: Login
export const ApiLogin = async (email: string, password: string) => {
    const response = await api.post(apiAuth.userAuth, { email, password });
    return response.data;
  };
  
  // Example: Fetch user profile
  export const ApiUserProfile = async () => {
    const response = await api.get(apiAuth.userRegister);
    return response.data;
  };
  
  // Example: Update user profile
  export const updateUserProfile = async (data: Record<string, any>) => {
    const response = await api.put(apiAuth.userRegister, data);
    return response.data;
  };
  
  // Example: Fetch a list of items
  export const fetchItems = async () => {
    const response = await api.get(apiAuth.userList);
    return response.data;
  };
  
  // Add more methods as needed