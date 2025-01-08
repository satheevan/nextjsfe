"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Heading } from "@/components/ui/heading";
import { DashboardCardItems } from "@/components/ui/card/dashboard-card";
import ProgressBar from "@/components/shared/multicolor-progress";
import { CreateNewSuites } from "@/components/ui/model/dashboard.model";
import { useEffect, useState } from "react";
import { ApiTestSuitesList } from "@/apis/testSuitesApi";
import { fetchProjectStatistics } from "@/apis/projectApis";
import { useProjectStore } from "@/store/project.store";
import { number } from "zod";



export default function ProjectDashboard() {

  const [testSuitesList, setTestSuitesList ] = useState([]);
  const [testStats, setTestStats] = useState({});
  const {currentProjectId}=useProjectStore()  

  const fetchTestSuitesList = async () => {
    try {
      const projectData = await ApiTestSuitesList(currentProjectId);
      console.log("test Suites in dashboard",projectData);
      
    } catch (err) {
      console.log("Error on fetch the test suites data", err);
    }
  };

  const showProjectStatistics = async () => {
    try {
      const response = await fetchProjectStatistics(currentProjectId);
      setTestStats(response);
    } catch (err) {
      console.log("Error on fetch the project statistics data", err);
    }
  }

  useEffect(() => {
    fetchTestSuitesList();
    showProjectStatistics();
  }, []);

  return (
    <section className="flex flex-col grow md:">
      <div className="flex justify-between">
        <Heading>Dashboard</Heading>
        <CreateNewSuites/>
      </div>
      <div className="my-5">
        <DashboardCardItems />
      </div>
      <Heading>Last Executions</Heading>
      <div className="gap-2 my-5 grid sm:grid-cols-1 md:grid-cols-2">
        <Card className="p-3">
          <CardHeader className="flex justify-between">
            <h4 className="text-base font-semibold text-textPrimary">
              Smoke Test
            </h4>
            <span className="text-sm">Friday, Oct 21, 2024</span>
          </CardHeader>
          <CardBody className="">
            <ProgressBar value1={94} value2={3} value3={1} />
          </CardBody>
        </Card>
        <Card className="p-3">
          <CardHeader className="flex justify-between">
            <h4 className="text-base font-semibold text-textPrimary">
              Regression Test
            </h4>
            <span className="text-sm">Monday, Oct 21, 2024</span>
          </CardHeader>
          <CardBody className="">
            <ProgressBar value1={86} value2={12} value3={2} />
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
