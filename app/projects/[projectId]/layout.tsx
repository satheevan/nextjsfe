'use client'
import { Navbar } from "@/components/navbar";
import LeftSideNav from "@/components/ui/left-navbar";

export default function DashBoard({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex grow gap-1 py-8 md:py-0">
      <LeftSideNav/>
     <div className="flex flex-col grow md:py-0">
     <Navbar/>
     <div className="mx-5 flex grow">
       {children}
     </div>
     </div>
   </section>
    );
  }
  