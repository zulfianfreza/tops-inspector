"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Element } from "react-scroll";

export default function Contact() {
    return (
        <Element name="contact">
            <div className="mx-5 lg:mx-[40px] mt-[30px] lg:mt-[60px]">
                <div className="p-5 lg:py-[30px] lg:px-[40px]  bg-primary relative flex flex-col lg:flex-row gap-x-10 justify-between overflow-hidden gap-y-5">
                    <Image
                        src="/logo2.png"
                        height="272"
                        width="552"
                        alt=""
                        className=" absolute top-1/2 -translate-y-1/2 hidden lg:block left-0"
                    />
                    <Image
                        src="/WhatsApp.png"
                        height="272"
                        width="271"
                        alt=""
                        className=" absolute top-1/2 -translate-y-1/2 lg:right-0 right-1/2 translate-x-1/2 lg:translate-x-0"
                    />
                    <h1 className="text-[36px]  lg:text-[56px] text-white">
                        Contact <br />
                        <span className=" font-bold">Tops Inspector</span>
                    </h1>
                    <div className="flex items-center gap-x-10 z-10 flex-col lg:flex-row gap-y-5">
                        <Link
                            href=""
                            className=" bg-white px-5 py-2.5 w-full hover:bg-primary-light transition duration-200 hover:text-primary lg:w-auto text-yankess flex rounded-full items-center gap-x-4 float-left text-[16px] lg:text-[20px]"
                        >
                            <Image
                                src="/wa.png"
                                height={40}
                                width={40}
                                alt="wa"
                            />
                            WhatsApp
                        </Link>
                        <Link
                            href=""
                            className=" bg-white px-5 py-2.5 w-full hover:bg-primary-light transition duration-200 hover:text-primary lg:w-auto text-yankess flex rounded-full items-center gap-x-4 float-left text-[16px] lg:text-[20px]"
                        >
                            <Image
                                src="/fb.png"
                                height={40}
                                width={40}
                                alt="wa"
                            />
                            Facebook
                        </Link>
                        <Link
                            href=""
                            className=" bg-white px-5 py-2.5 w-full hover:bg-primary-light transition duration-200 hover:text-primary lg:w-auto text-yankess flex rounded-full items-center gap-x-4 float-left text-[16px] lg:text-[20px]"
                        >
                            <Image
                                src="/instagram.png"
                                height={40}
                                width={40}
                                alt="wa"
                            />
                            Instagram
                        </Link>
                    </div>
                </div>
            </div>
        </Element>
    );
}
