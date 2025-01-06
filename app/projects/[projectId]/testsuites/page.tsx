"use client";
import { Heading } from "@/components/ui/heading";
import { SuitesCardItems } from "@/components/ui/card/suites-card";
import { CreateTestSuite } from "@/components/ui/model/test-suites-new.model";
import { useEffect, useState } from "react";
import { ApiTestSuitesList } from "@/apis/testSuitesApi";
import { useParams } from "next/navigation";
import { stringify } from "querystring";

const cardItems = [
  {
    label: "Test 98",
    count: "2",
    date: "August 9, 2024",
  },
  {
    label: "Test 556",
    count: "7",
    date: "September 9, 2024",
  },
  {
    label: "Test 398",
    count: "0",
    date: "August 9, 2024",
  },
  {
    label: "Test 948",
    count: "2",
    date: "August 9, 2024",
  },
  {
    label: "Test 29",
    count: "2",
    date: "August 9, 2024",
  },
];
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
  const params = useParams();

  console.log("params", params.projectId);

  const fetchProjectList = async () => {
    try {
      const result = await ApiTestSuitesList(93);
      // const data  = await result.json()
      console.log("test suite",result,result.length);


      setTestSuitesList(result)
    } catch (err) {
      console.log("Error on fetch the test suites data", err);
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  console.log("card list:",testSuitesList);
  
  return (
    <section className="flex flex-col grow md:py-3">
      <div className="flex justify-between pb-3">
        <Heading>Test Suites</Heading>
        <CreateTestSuite />
      </div>
      <SuitesCardItems cardItems={testSuitesList} />
      <Heading>Draft Test</Heading>
      <SuitesCardItems cardItems={[]} />
    </section>
  );
}
