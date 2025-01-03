"use client";
import { CreateProject } from "@/components/ui/model/projects.model";
import { ProjectCardItems } from "@/components/ui/card/project-card";
import { MainProjectData } from "@/data/tableProject";
import { Heading } from "@/components/ui/heading";
import ProjectTable from "../../components/ui/table/project.table";
import { useEffect } from "react";
import { ApiProjectList } from "@/apis/projectApis";
import { useProjectStore } from "@/store/project.store";


console.log("coluumn data", MainProjectData.ProjectColumns);
// const columnData:ColumnData=MainProjectData.ProjectColumns;
export default function Main() {

  const {projects,setProjects}= useProjectStore()

  const fetchProjectList = async () => {
    try {
      const result = await ApiProjectList();
      const projectData = result.map((data:any)=>({
        id:data.id,
        projectName:data.name,
        totalTest:data.createdBy,
        totalSuits:data.createdBy
      }));
      setProjects(projectData)
    } catch (err) {
      console.log("Error on fetch the project data", err);
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  console.log("ProjectDate",projects);
  
  return (
    <div className="flex flex-col grow">
      
      <Heading>Project Portal</Heading>
      <header className="h-42 mt-5">
        <ProjectCardItems />
      </header>
      <main className="mt-10">
        <div className="flex justify-between">
          <Heading>Project Listing</Heading>
          <CreateProject />
        </div>
        <p></p>
        <ProjectTable data={projects}/>
      </main>
    </div>
  );
}
