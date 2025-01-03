"use client";

import CreateTestSuitePage from "@/components/ui/test-suites/create-test-suite";

export default function TestSuits() {
  const testCase = [
    { key: "1", label: "test1" },
    { key: "2", label: "test2" },
    { key: "3", label: "test3" },
  ];

  return (
    <section className="flex flex-col grow md:py-3">
      <div className="flex flex-wrap mr-4">
        {/* <div className="flex grow gap-2">
          <div className="basis-2/5">
            <div className="flex gap-2">
              <span onClick={() => alert("working")} className="cursor-pointer">
                <ActionBack color="primary" />
              </span>
              <Heading>Title Name</Heading>
            </div>
            <div className="mt-8 pb-5">
              <DefaultCard className={"flex"}>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold flex gap-3 items-center">
                    Create New Test
                    <span>
                      <ImpIcon />
                    </span>
                  </h3>
                  <PlayIcon />
                </div>
                <div className="mb-12">
                  <div className="mt-6">
                    <Input
                      endContent={
                        <span className="cursor-pointer">
                          <EnterIcon />
                        </span>
                      }
                      className="mb-2"
                      key={""}
                      description={""}
                      label="Create URL"
                      labelPlacement={"outside"}
                      placeholder="Enter URL"
                      type="text"
                    />
                  </div>
                  <div className="mt-5 flex justify-between items-center gap-3">
                    <Input
                      endContent={
                        <span className="cursor-pointer">
                          <SuccessTickIcon />
                        </span>
                      }
                      className=""
                      key={""}
                      description={""}
                      label="Test Step"
                      labelPlacement={"outside"}
                      placeholder="Enter Test Step Here..."
                      type="text"
                    />
                    <div className="flex mt-6 gap-2">
                      <span className="cursor-pointer">
                        <PlayIcon size={28} />
                      </span>
                      <span className="cursor-pointer">
                        <ActionDots />
                      </span>
                    </div>
                  </div>
                </div>
              </DefaultCard>
              <div className="flex mt-6 grow gap-2">
                <Button color="primary" className="basis-1/2" variant="solid">
                  Save Test
                </Button>
                <Button color="primary" className="basis-1/2" variant="solid">
                  Publish
                </Button>
              </div>
            </div>
          </div>
          <div className="basis-3/5 bg-white p-3 rounded-md">
            <iframe
              src="https://www.google.com/"
              width="650"
              height="500"
              sandbox="allow-scripts"
              loading="lazy"
              // frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              // tabIndex="0"
            ></iframe>
          </div>
        </div> */}
        <CreateTestSuitePage />
      </div>
    </section>
  );
}
