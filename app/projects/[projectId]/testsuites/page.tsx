"use client";
import { useRouter } from "next/router";
import { Heading } from "@/components/ui/heading";
import { SuitesCardItems } from "@/components/ui/card/suites-card";
import { CreateTestSuite } from "@/components/ui/model/test-suites-new.model";
import { useEffect, useState } from "react";
import { ApiTestSuitesList } from "@/apis/testSuitesApi";
import { useParams } from "next/navigation";

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
    label: "Test 18",
    count: "2",
    date: "August 9, 2024",
  },
  {
    label: "Test 56",
    count: "7",
    date: "September 9, 2024",
  },
];
const router = useRouter;

export default function TestSuites() {

  const [testSuitesList, setTestSuitesList ] = useState([])
  const params = useParams()

  console.log("params",params.projectId);
  

    const fetchProjectList = async () => {
      try {
        const result = await ApiTestSuitesList(93);
        console.log("test suite",result);
        
        // setTestSuitesList(result)
      } catch (err) {
        console.log("Error on fetch the test suites data", err);
      }
    };
  
    useEffect(() => {
      fetchProjectList();
    }, []);

  return (
    <section className="flex flex-col grow md:py-3">
      <div className="flex justify-between pb-3">
        <Heading>Test Suites</Heading>
        <CreateTestSuite/>
      </div>
        <SuitesCardItems cardItems={cardItems} />
      <Heading>Draft Test</Heading>
        <SuitesCardItems cardItems={DraftItems} />
    </section>
  );
}
