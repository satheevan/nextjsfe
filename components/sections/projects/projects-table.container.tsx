"use client";
import { ApiProjectList } from "@/apis/projectApis";
import { useProjectsStore } from "@/store/projects.store";
import { useEffect } from "react";
import ProjectsTableView from "../../ui/table/project.table";
import { Heading } from "@/components/ui/heading";
import { CreateProject } from "@/components/ui/model/projects.model";
import { Button } from "@nextui-org/button";

export const ProjectsTableContainer = () => {
  const { projects, setProjects, toggleIsOpenNewModal, isOpenNewModal } = useProjectsStore();

  const fetchProjectList = async () => {
    try {
      const result = await ApiProjectList();
      setProjects(result);
    } catch (err) {
      console.log("Error on fetch the project data", err);
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  console.log("ProjectDate", projects);

  const onEditClick = (projectId: any) => {
    // get by id api call
    // setEditedProjectData
    // setIsOpen for edit modal view
    //toggleIsOpenNewModal();
  };

  return (
    <>
      <div className="flex justify-between">
        <Heading>Project Listing</Heading>
        
        <Button onPress={toggleIsOpenNewModal} color="primary">
          Create Project
        </Button>
      </div>
      <CreateProject isOpenModal={isOpenNewModal} onOpenChange={toggleIsOpenNewModal} />

      <ProjectsTableView
        data={projects.length > 0 ? projects : []}
        onEditClick={onEditClick}
      />
    </>
  );
};
