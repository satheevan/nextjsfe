"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Autocomplete, AutocompleteItem, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
// import Autocompletion from "./autocomplete";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

import React, { useEffect, useState } from "react";
import { Logout } from "../icons/actions";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import { useProjectsStore } from "@/store/projects.store";
import { useProjectStore } from "@/store/project.store";
import { Project } from "@/types/project";
import { ProjectLogo } from "../icons/logo";

interface ProjectDetails {
  projectList: Project[];
}

export const Navbar = () => {
  const router = useRouter();
  const params = useParams();
  const { projects, setProjects } = useProjectsStore();
  const { currentProjectId, setCurrentProjectId } = useProjectStore();
  const [toggleBtn, setToggleBtn] = useState(false);

  function InititalData() {
    if (typeof params === "object") {
      console.log("toggleBtn", Object.keys(params).length === 0);
      setToggleBtn(Object.keys(params).length === 0); // Empty object
    }
  }
  useEffect(() => {
    InititalData();
  }, []);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-lg",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
  const handleLogout = () => {
    Cookies.remove("authToken");
    router.push("/login");
  };
  console.log("project value",projects );

  return (
    <NextUINavbar maxWidth="full" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          {/* <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              width={210}
              alt="Logo"
              src="../asset/images/logo.jpg"
              />
              </NextLink> */}
        </NavbarBrand>
        {toggleBtn && (
          <div className="flex justify-center items-center gap-2">
            <span onClick={() => router.push("/")}>
              <ProjectLogo />
            </span>
            <NavbarContent>
              <NavbarItem className="hidden sm:flex">{searchInput}</NavbarItem>
            </NavbarContent>
          </div>
        )}
      </NavbarContent>

      {/* <Autocompletion options={Projects}/> */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {!toggleBtn && (
          // <NavbarItem className="hidden sm:flex gap-2">
          //   <Autocomplete className="max-w-xs" placeholder="Select a project">
          //     <AutocompleteItem key="project1" value="project1">
          //       Project 1
          //     </AutocompleteItem>
          //     <AutocompleteItem key="project2" value="project2">
          //       Project 2
          //     </AutocompleteItem>
          //     <AutocompleteItem key="project3" value="project3">
          //       Project 3
          //     </AutocompleteItem>
          //   </Autocomplete>
          // </NavbarItem>
          <NavbarItem className="hidden sm:flex gap-2">
            <Autocomplete className="max-w-xs" placeholder="Select a project">
              {
                projects.map((project,index)=>(
                <AutocompleteItem
                  key={index}
                  value={project.id}
                >
                  {project.name}
                </AutocompleteItem>
              ))
              }
            </Autocomplete>
          </NavbarItem>
        )}
        {/* <ThemeSwitch /> */}
        <NavbarItem className="hidden md:flex">
          <div
            className=" flex justify-center items-center gap-3 cursor-pointer"
            onClick={handleLogout}
          >
            Log Out
            {/* <UserCard name="User 1" email="user@gmail.com" profilePhoto={userImg.src}></UserCard> */}
            <Logout size={24} width={16} height={17} />
          </div>
        </NavbarItem>
      </NavbarContent>
{/*  */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link> */}
        <ThemeSwitch />
        <span >
        <NavbarMenuToggle />
        </span>
      </NavbarContent>
    </NextUINavbar>
  );
};
