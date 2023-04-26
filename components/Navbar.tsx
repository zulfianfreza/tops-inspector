"use client";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Element, Link as LinkRS, Events, scrollSpy } from "react-scroll";

export default function Navbar() {
    const [active, setActive] = useState<string>("");
    return (
        <>
            <Element name="home">
                <div className=" w-full py-3 lg:py-4 text-white text-[16px] lg:text-[24px] bg-primary flex items-center">
                    <marquee>
                        inpeksi kendaraan berkualitas & berpengalaman ! inpeksi
                        kendaraan berkualitas & berpengalaman ! inpeksi
                        kendaraan berkualitas & berpengalaman !
                    </marquee>
                </div>
            </Element>
            <div className=" px-5 lg:px-[40px] flex justify-between items-center py-5 sticky top-0 z-50 bg-white/90 backdrop-blur">
                <div className="w-[172px] lg:w-[225px] h-16 lg:h-20 relative">
                    <Image
                        src="/logo.png"
                        fill={true}
                        alt="logo"
                        className=" object-contain"
                    />
                </div>
                <nav className=" gap-x-5 text-lg items-center text-[24px] hidden lg:flex">
                    <LinkRS
                        to="home"
                        spy={true}
                        smooth="easeInOutQuart"
                        duration={1000}
                        className={` cursor-pointer py-[15px] duration-300 transition px-2.5 border-b-[2px] hover:bg-secondary-lighten hover:border-b-secondary hover:text-secondary-dark ${
                            active == "home"
                                ? " bg-secondary-lighten border-b-secondary text-secondary-dark"
                                : "bg-transparent border-b-transparent text-yankess"
                        }`}
                        onSetActive={() => setActive("home")}
                        onSetInactive={() => setActive("")}
                        activeClass="bg-secondary-lighten border-b-secondary text-secondary-dark"
                    >
                        Home
                    </LinkRS>
                    <LinkRS
                        to="service"
                        spy={true}
                        smooth="easeInOutQuart"
                        duration={1000}
                        activeClass=" bg-secondary-lighten border-b-secondary text-secondary-dark"
                        offset={-120}
                        className={` cursor-pointer py-[15px] duration-300 transition px-2.5 border-b-[2px] hover:bg-secondary-lighten hover:border-b-secondary hover:text-secondary-dark ${
                            active == "service"
                                ? " bg-secondary-lighten border-b-secondary text-secondary-dark"
                                : "bg-transparent border-b-transparent text-yankess"
                        }`}
                        onSetActive={() => setActive("service")}
                        onSetInactive={() => setActive("")}
                    >
                        Our Service
                    </LinkRS>
                    <LinkRS
                        to="how"
                        spy={true}
                        smooth="easeInOutQuart"
                        duration={1000}
                        activeClass=" bg-secondary-lighten border-b-secondary text-secondary-dark"
                        offset={-120}
                        className={` cursor-pointer py-[15px] duration-300 transition px-2.5 border-b-[2px] hover:bg-secondary-lighten hover:border-b-secondary hover:text-secondary-dark ${
                            active == "how"
                                ? " bg-secondary-lighten border-b-secondary text-secondary-dark"
                                : "bg-transparent border-b-transparent text-yankess"
                        }`}
                        onSetActive={() => setActive("how")}
                        onSetInactive={() => setActive("")}
                    >
                        How Heru Work
                    </LinkRS>
                    <LinkRS
                        to="contact"
                        spy={true}
                        smooth="easeInOutQuart"
                        duration={1000}
                        offset={-120}
                        className=" cursor-pointer bg-secondary-light text-yankess px-5 py-2.5 flex rounded-full items-center gap-x-4"
                        onSetActive={() => setActive("contact")}
                        onSetInactive={() => setActive("")}
                    >
                        <Image
                            src="/contact.png"
                            height={40}
                            width={40}
                            alt="wa"
                        />
                        Contact Heru Inspector
                    </LinkRS>
                </nav>
                <Menu
                    as="div"
                    className="relative inline-block lg:hidden text-left"
                >
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-primary p-3 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <Image
                                src="/menu.png"
                                height={17}
                                width={21}
                                alt=""
                            />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="p-2 space-y-2 text-[16px] lg:text-[20px]">
                                <Menu.Item>
                                    <>
                                        <LinkRS
                                            to="home"
                                            spy={true}
                                            smooth="easeInOutQuart"
                                            duration={1000}
                                            activeClass=" bg-secondary-lighten text-secondary"
                                            className={` cursor-pointer flex w-full items-center rounded-md px-2.5 py-2.5 hover:bg-secondary-lighten hover:text-secondary duration-300 transition ${
                                                active == "home"
                                                    ? "bg-secondary-lighten text-secondary "
                                                    : "bg-white text-yankess"
                                            }`}
                                            onSetActive={() =>
                                                setActive("home")
                                            }
                                            onSetInactive={() => setActive("")}
                                        >
                                            Home
                                        </LinkRS>
                                    </>
                                </Menu.Item>
                                <Menu.Item>
                                    <>
                                        <LinkRS
                                            to="service"
                                            spy={true}
                                            smooth="easeInOutQuart"
                                            duration={1000}
                                            activeClass=" bg-secondary-lighten"
                                            offset={-105}
                                            className={` cursor-pointer flex w-full hover:bg-secondary-lighten hover:text-secondary duration-300 transition items-center rounded-md px-2.5 py-2.5 ${
                                                active == "service"
                                                    ? "bg-secondary-lighten text-secondary "
                                                    : "bg-white text-yankess"
                                            }`}
                                            onSetActive={() =>
                                                setActive("service")
                                            }
                                            onSetInactive={() => setActive("")}
                                        >
                                            Our Service
                                        </LinkRS>
                                    </>
                                </Menu.Item>
                                <Menu.Item>
                                    <>
                                        <LinkRS
                                            to="how"
                                            spy={true}
                                            smooth="easeInOutQuart"
                                            duration={1000}
                                            activeClass=" bg-secondary-lighten"
                                            offset={-105}
                                            className={` cursor-pointer flex w-full items-center rounded-md px-2.5 py-2.5 hover:bg-secondary-lighten hover:text-secondary duration-300 transition  ${
                                                active == "how"
                                                    ? "bg-secondary-lighten text-secondary "
                                                    : "bg-white text-yankess"
                                            }`}
                                            onSetActive={() => setActive("how")}
                                            onSetInactive={() => setActive("")}
                                        >
                                            How Heru Work
                                        </LinkRS>
                                    </>
                                </Menu.Item>
                                <hr />
                                <Menu.Item>
                                    <>
                                        <LinkRS
                                            to="contact"
                                            spy={true}
                                            smooth="easeInOutQuart"
                                            duration={1000}
                                            activeClass=" bg-secondary-lighten"
                                            offset={-105}
                                            className=" bg-secondary-light w-full text-yankess px-5 py-2.5 flex rounded-full items-center gap-x-4"
                                        >
                                            <Image
                                                src="/contact.png"
                                                height={40}
                                                width={40}
                                                alt="wa"
                                            />
                                            Contact Heru Inspector
                                        </LinkRS>
                                    </>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </>
    );
}
