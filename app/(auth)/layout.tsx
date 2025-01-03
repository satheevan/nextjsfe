"use client";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";
import dashboardImg from "@/asset/images/login/dashboard.png";

export default function Login({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex max-sm:flex-col max-md:flex-row grow gap-1 py-0">
      <div className="mx-3 basis-2/5">{children}</div>
      <div className="p-8 basis-3/5">
        <div className="bg-loginbg p-4 pl-14 pr-0 border rounded-2xl">
          <div className="px-8">
            <Heading>Quick test Creation</Heading>
            <p className="py-2 text-sm">
              Simplify and speed up the process of creating tests with our
              intuitive interface.
            </p>
          </div>
          <div>
            <Image
              className="object-right pr-0"
              height={"468"}
              // width={"664"}
              src={dashboardImg}
              alt="dashboard"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
