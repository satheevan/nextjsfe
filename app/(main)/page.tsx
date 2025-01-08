// "use client";
import { ProjectCardItems } from "@/components/ui/card/project-card";
import { Heading } from "@/components/ui/heading";
import { ProjectsTableContainer } from "@/components/sections/projects/projects-table.container";


// console.log("coluumn data", MainProjectData.ProjectColumns);
// const columnData:ColumnData=MainProjectData.ProjectColumns;
export default function MainPage() {

  
  return (
    <div className="flex flex-col grow">
      
      <Heading>Project Portal</Heading>
      <header className="h-42 mt-5">
        <ProjectCardItems />
      </header>
      <main className="mt-10">
        <ProjectsTableContainer />
      </main>
    </div>
  );
}
