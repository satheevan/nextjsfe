import {create} from 'zustand';

interface AuthState{
    isLogggedIn:boolean;
    token:string|null;
    login:(token:string)=>void;
    logout:()=>void;
}

export const useAuthStore = create<AuthState>((set)=>({
    isLogggedIn:false,
    token:null,
    login:(token)=> set({isLogggedIn:true,token}),
    logout:()=>set({isLogggedIn:false,token:null})
}))