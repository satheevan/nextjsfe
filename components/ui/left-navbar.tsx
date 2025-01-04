import { Listbox, ListboxItem } from "@nextui-org/react";
import { FormsIcon } from "../icons/forms";
import {
  Dashboard,
  DUX,
  InviteMembers,
  ProductChanges,
  Synthetic,
  TestExe,
  TestSuites,
  ToggleButton,
} from "../icons/menu";
import { Logo } from "../icons/logo";
import { useRouter } from "next/navigation";

function LeftSideNav() {
  const navigate = useRouter();
  return (
    <div className="hidden sm:block w-60 pt-2 bg-leftSideBar">
      <div className=" my-5 mb-8 ml-5 relative ...">
        <Logo className="text-center" />
        <span
          className="absolute -right-4 -top-1.5 ... z-50"
          onClick={() => console.log(navigate)}
        >
          <ToggleButton />
        </span>
      </div>
      <div className="flex flex-col grow justify-between gap-60">
        <div className="flex flex-col">
          <Listbox aria-label="Navigation menu">
            <ListboxItem
              key="dashboard"
              href="/projects/[projectId]/dashboard"
            >
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
                <DUX /> DUX
              </div>
            </ListboxItem>
            <ListboxItem key="synthetic" href="">
              <div className="flex items-center ml-5 gap-2 text-white">
                <Synthetic /> Synthetic
              </div>
            </ListboxItem>
          </Listbox>
        </div>
        <div>
          <Listbox>
            <ListboxItem key="productchange" href="">
              <div className="flex items-center ml-5 gap-2 text-white">
                <ProductChanges /> Product Changes
              </div>
            </ListboxItem>
            <ListboxItem key="invitemember" href="">
              <div className="flex items-center ml-5 gap-2 text-white">
                <InviteMembers /> Invite Members
              </div>
            </ListboxItem>
          </Listbox>
        </div>
      </div>
    </div>
  );
}
export default LeftSideNav;
