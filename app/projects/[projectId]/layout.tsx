"use client";
import { Navbar } from "@/components/navbar";
import LeftSideNav from "@/components/ui/left-navbar";

export default function DashBoard({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex grow gap-1 py-8 md:py-0">
      {/* <div className="basis-2/6"> */}
        <LeftSideNav />
      {/* </div> */}
      <div className="basis-2/6 flex flex-col grow md:py-0">
        <Navbar />
        <div className="mx-5 flex grow">{children}</div>
      </div>
    </section>
  );
}
