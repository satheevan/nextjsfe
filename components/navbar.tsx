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

import { Autocomplete, AutocompleteItem,Image } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { button, link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
// import Autocompletion from "./autocomplete";
import { Projects } from "@/data/default";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

import { useState } from "react";
import { Logout } from "./icons/actions";

interface IProject{
  name :string
}

export const Navbar = () => {

  const [projectList,setProjectList]=useState<IProject[]>([]);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

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
        <NavbarContent>
          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        </NavbarContent>
        {/* <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul> */}
      </NavbarContent>

      {/* <Autocompletion options={Projects}/> */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {

        <NavbarItem className="hidden sm:flex gap-2">
          <Autocomplete className="max-w-xs" placeholder="Select a project">
            <AutocompleteItem key="project1" value="project1">
              Project 1
            </AutocompleteItem>
            <AutocompleteItem key="project2" value="project2">
              Project 2
            </AutocompleteItem>
            <AutocompleteItem key="project3" value="project3">
              Project 3
            </AutocompleteItem>
          </Autocomplete>
          <ThemeSwitch />
        </NavbarItem>
}
        <NavbarItem className="hidden md:flex">
          <div className="">
            {/* <UserCard name="User 1" email="user@gmail.com" profilePhoto={userImg.src}></UserCard> */}
           <Logout size={24} width={16} height={17}/>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
