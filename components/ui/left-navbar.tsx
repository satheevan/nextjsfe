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
import { useEffect, useState } from "react";
import {useProjectStore} from "../../store/project.store"



function LeftSideNav() {
  const [menuItems,setMenuItems]= useState([])
  const [shortHand,setShortHand]= useState(false)
  const navigate = useRouter();

  const {currentProjectId} =useProjectStore()

const menus=[
  {key:"dashboard",name:"DashBoard",path:`/projects/${currentProjectId}/dashboard`,icon:<Dashboard/>},
  {key:"suits",name:"Test Suites",path:`/projects/${currentProjectId}/testsuites`,icon:<TestSuites/>},
  {key:"execution",name:"Test Exec",path:`/projects/${currentProjectId}/testexe`,icon:<TestExe/>},
  {key:"dux",name:"DUX",path:`/projects/${currentProjectId}/dux`,icon:<DUX/>},
  {key:"synthetic",name:"Synthetic",path:"",icon:<Synthetic/>}
]

  useEffect(()=>{
    // setMenuItems(menus)
  },[])

  return (
    <div className={`hidden sm:block ${shortHand?"w-20":"w-60"} pt-2 bg-leftSideBar`}>
      <div className=" my-5 mb-8 ml-5 relative ...">
        <Logo className="text-center" />
        <span
          className="absolute -right-4 -top-1.5 cursor-pointer z-50"
          onClick={() => setShortHand(!shortHand)}
        >
          <ToggleButton />
        </span>
      </div>
      <div className="flex flex-col grow justify-between gap-60">
        <div className="flex flex-col">
          
          <Listbox aria-label="Navigation menu">
            {
              menus.map((menu,index)=>(
                <ListboxItem
                key={menu.key}
                href={menu.path}
                >
              <div className="flex items-center ml-5 gap-2 text-white">
                {menu.icon} {shortHand?"":menu.name}
              </div>
            </ListboxItem>
        ))
            }
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
