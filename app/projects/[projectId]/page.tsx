'use client'
import { Card, CardBody } from "@nextui-org/react";
import {ProjectIcon} from "@/components/icons/projects";


const cardItems = [
  {
    count:"98",
    label:"Test Suites",
    icon: <ProjectIcon />
  },
  {
    count:"201",
    label:"Total Tests"
  },
  {
    count:"302",
    label:"UI Level Tests"
  },
  {
    count:"0",
    label:"API Tests"
  },
  {
    count:"0",
    label:"Web Tests"
  },
  {
    count:"0",
    label:"Drafted Tests"
  },
  
];
const draftItems = [
  {
    label:"Test 18",
    count:"2",
    date:"August 9, 2024"
  },
  {
    label:"Test 56",
    count:"7",
    date:"September 9, 2024"
  },
]

export default function ProjectDetails() {
  return (
    <section className="flex flex-col grow md:py-3">
      <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Project Details</h1>
      </div>
      <div className="container mx-auto my-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cardItems?.map((val,index)=>(  
          <div>      
          <Card>
            <CardBody>
              <div className="p-2 px-3">
              <div className="mb-6">
                {val?.icon ? val.icon : null }
                <span className="text-xl font-bold">{val?.count}</span>
                {/* <span className="ml-2">{`(${val.count})`}</span> */}
                </div>
              <div>{val?.label}</div>
              </div>
            </CardBody>
        </Card>
        </div>
      ))}
        </div>
      <h1 className="text-3xl font-bold">Last Executions</h1>
      <div className="container mx-auto my-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
        {draftItems?.map((val,index)=>(  
          <div>      
          <Card>
            <CardBody>
              <div className="p-2 px-4">
              <div className="mb-6">
                <span className="text-xl font-bold">{val?.count}</span>
                </div>
              <div>{val.label}</div>
              </div>
            </CardBody>
        </Card>
        </div>
      ))}
        </div>
    </section>
  );
}
