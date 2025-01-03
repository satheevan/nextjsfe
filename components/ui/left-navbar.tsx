import { Listbox, ListboxItem } from "@nextui-org/react";
import { FormsIcon } from "../icons/forms";
import { Dashboard, DUX, Synthetic, TestExe, TestSuites, ToggleButton } from "../icons/menu";
import { Logo } from "../icons/logo";

function LeftSideNav() {
  return (
    <div className="hidden sm:block w-60 pt-2 bg-leftSideBar">
      <div className=" my-5 mb-8 relative ...">
        <Logo className="text-center"/>
        <div className="absolute right-0 top-0 ...">
        <ToggleButton />
        </div>
      </div>
      <Listbox  aria-label="Navigation menu">
        <ListboxItem key="dashboard" className="hover:bg-yellow-400" href="/projects/[projectId]/dashboard">
          <div className="flex items-center ml-5 gap-2 text-white">
            <Dashboard /> DashBoard
          </div>
        </ListboxItem>
        <ListboxItem key="suits" href="/projects/[projectId]/testsuites">
          <div className="flex items-center ml-5 gap-2 text-white">
          <TestSuites /> Test Suites
          </div>
        </ListboxItem>
        <ListboxItem key="execution" href="/projects/[projectId]/testexe">
          <div className="flex items-center ml-5 gap-2 text-white">
          <TestExe /> Test Exec
          </div>
        </ListboxItem>
        <ListboxItem key="dux" href="/projects/[projectId]/dux">
        <div className="flex items-center ml-5 gap-2 text-white">
         <DUX/> DUX
         </div>
        </ListboxItem>
        <ListboxItem key="synthetic" href="/projects/[projectId]/synthetic">
        <div className="flex items-center ml-5 gap-2 text-white">
        <Synthetic/>  Synthetic
        </div>
        </ListboxItem>
      </Listbox>
    </div>
  );
}
export default LeftSideNav;