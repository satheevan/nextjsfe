import { Author } from "./user";

export interface ProjectEnvironment {
    environmentName: string;
    id: number;
    isExternalURL: boolean;
    url: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    accountId: number;

    // timestamps
    createdAt: string;
    updatedAt: string;

    // author
    createdBy: number;
    updatedBy: number;

    creator?: Author;
    updater?: Author;

    // manager
    projectManagerId: number;
    projectManager?: Author;

    // environments
    projectEnvironments?: ProjectEnvironment[]
}