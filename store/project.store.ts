import { Project } from "@/types/project";
import { create } from "zustand";

// Define the Zustand store
interface ProjectStore {
  currentProjectId?: number;
  currentProject?: Project;

  // methods
  setCurrentProjectId: (id: number) => void;
  setCurrentProject: (project: Project) => void;
}

// Create the Zustand store
export const useProjectStore = create<ProjectStore>((set) => ({


  setCurrentProject: (currentProject: Project) => set(({ currentProject })),
  setCurrentProjectId: (currentProjectId: number) => set({ currentProjectId })
}));
