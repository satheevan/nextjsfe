'use client'
import LeftSideNav from "@/components/ui/left-navbar";
import { Navbar,  } from "@/components/navbar";

export default function TestExe({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex grow gap-1 py-8 md:py-0">
       {/* <LeftSideNav/> */}
      <div className="flex flex-col grow gap-1 md:py-0">
      {/* <Navbar/> */}
      <div className="flex grow">
        {children}
      </div>
      </div>
    </section>
    );
  }
  