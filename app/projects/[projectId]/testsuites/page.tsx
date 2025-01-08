"use client";
import { Heading } from "@/components/ui/heading";
import { SuitesCardItems } from "@/components/ui/card/suites-card";
import { CreateTestSuite } from "@/components/ui/model/test-suites-new.model";
import { useEffect, useState } from "react";
import { ApiTestSuitesDelete, ApiTestSuitesList } from "@/apis/testSuitesApi";
import { useParams } from "next/navigation";
import { useProjectStore } from "@/store/project.store";

const DraftItems = [
  {
    name: "Test 18",
    // count: "2",
    createdAt: "August 9, 2024",
  },
  {
    name: "Test 56",
    // count: "7",
    createdAt: "September 9, 2024",
  },
];

export default function TestSuites() {
  const [testSuitesList, setTestSuitesList] = useState([]);
  const { currentProjectId } = useProjectStore();
  const params = useParams();
  let ProjectId = currentProjectId;

  console.log("Project Id", currentProjectId, params.projectId);

  const fetchProjectList = async () => {
    try {
      console.log("api passing Id", ProjectId, params.projectId);
      const result = await ApiTestSuitesList(ProjectId || +params.projectId);
      console.log("test suite", result, result.length);

      setTestSuitesList(result);
    } catch (err) {
      console.log("api passing Id", ProjectId);
      console.log("Error on fetch the test suites data", err);
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  console.log("card list:", testSuitesList);

  const deleteId = (id: any) => {
    console.log("delete suite", id);
    DeleteTestSuite(id, ProjectId);
  };
  const DeleteTestSuite = async (id: number, projectId?: number) => {
    try {
      console.log("Delete the test suite");
      const result = await ApiTestSuitesDelete(id, projectId);
      console.log("api Result", result);

      fetchProjectList();
    } catch (err) {
      console.log("Error on delete the test suite");
    }
  };
  return (
    <section className="flex flex-col grow md:py-3">
      <div className="flex justify-between pb-3">
        <Heading>Test Suites</Heading>
        <CreateTestSuite />
      </div>
      <SuitesCardItems
        cardItems={testSuitesList}
        onDelete={deleteId}
        projectId={+params.projectId}
      />
      <Heading>Draft Test</Heading>
      <SuitesCardItems
        cardItems={[]}
        onDelete={deleteId}
        projectId={+params.projectId}
      />
    </section>
  );
}
