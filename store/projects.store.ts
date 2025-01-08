import { Project } from "@/types/project";
import { create } from "zustand";

// Define the Zustand store
interface ProjectsStore {
  projects: Project[]; // Array of user objects
  isOpenNewModal: boolean;
  setProjects: (project:Project[])=>void;
  toggleIsOpenNewModal: () => void;
  addProject: (project: Project) => void; // Function to add a user
  removeProject: (id: number) => void; // Function to remove a user by ID
  updateProject: (id: number, updatedProject: Partial<Project>) => void; // Update a user
}

// Create the Zustand store
export const useProjectsStore = create<ProjectsStore>((set) => ({
  projects: [], // Initial state: empty list

  isOpenNewModal: false,

  setProjects: (projects) => set(() => ({ projects })),

  toggleIsOpenNewModal: () => set((state) => ({ isOpenNewModal: !state?.isOpenNewModal })),
  
  // Add a new user
  addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, project],
    })),

  // Remove a user by ID
  removeProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== id),
    })),

  // Update a user by ID
  updateProject: (id, updatedProject) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === id ? { ...project, ...updatedProject } : project
      ),
    })),
}));
