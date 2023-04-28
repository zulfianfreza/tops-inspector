"use client";
import {
    Accordion,
    AccordionItem as Item,
    AccordionItemProps,
} from "@szhsin/react-accordion";
import Image from "next/image";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Element } from "react-scroll";

const AccordionItem = ({ header, children, ...rest }: AccordionItemProps) => (
    <Item
        {...rest}
        header={({ state: { isEnter } }) => (
            <>
                {header}
                <FaChevronDown
                    className={`ml-auto transition-transform duration-300 ease-in-out lg:w-6 lg:h-10 w-3 h-5 ${
                        isEnter && "rotate-180"
                    }`}
                />
            </>
        )}
        className="w-full rounded-[10px] overflow-hidden"
        buttonProps={{
            className: ({ isEnter }) =>
                `flex w-full p-4 text-left text-[16px] lg:text-[32px] items-center font-bold hover:bg-primary-light transition duration-300 ease-in-out text-primary ${
                    isEnter ? "bg-primary-light" : "bg-white"
                }`,
        }}
        contentProps={{
            className:
                "bg-white transition-height duration-200 ease-in-out text-[12px] lg:text-[24px] text-primary",
        }}
        panelProps={{ className: "p-4" }}
    >
        {children}
    </Item>
);

export default function How() {
    return (
        <Element name="how">
            <div className="w-full p-5 lg:py-10 lg:px-10 xl:px-[100px] mt-[30px] gap-y-[30px] bg-[#042457] flex lg:flex-row flex-col gap-x-[30px] items-stretch">
                <div className=" w-full lg:w-[532px] rounded-[20px] h-[600px] relative overflow-hidden">
                    <Image
                        src="/how.png"
                        fill={true}
                        alt="how"
                        className=" object-cover"
                    />
                    <div className="absolute bg-black/20 m-4 bottom-0 rounded-xl backdrop-blur-sm p-4">
                        <h1 className=" text-[44px] lg:text-[54px] text-white leading-normal font-bold">
                            How Tops Inspector Work?
                        </h1>
                        <p className=" text-[16px] lg:text-[20px] text-white">
                            Tops Inspector akan memberikan experience yang
                            terbaik dalam menjalankan pekerjaan.
                        </p>
                    </div>
                </div>
                <Accordion
                    transition
                    transitionTimeout={200}
                    className="w-full space-y-5 lg:space-y-10 flex-1"
                >
                    <AccordionItem
                        header="Hubungin melalui WhatsApp"
                        initialEntered
                    >
                        Hubungi WhatsApp untuk mendapatkan informasi seputar
                        inpeksi mobil ataupun jasa lainnya dari{" "}
                        <span className=" font-bold">Tops Inspector</span>
                    </AccordionItem>

                    <AccordionItem header="Booking & Konfirmasi">
                        Booking jadwal dan dapatkan dari{" "}
                        <span className=" font-bold">
                            Tops Inspector Hari kerja Flexible
                        </span>{" "}
                        tergantung dengan{" "}
                        <span className=" font-bold">
                            perjanjian dengan costumer, hubungi segera !
                        </span>
                    </AccordionItem>

                    <AccordionItem header="Dapatkan Layanan Terbaik">
                        Dapatkan layanan terbaik dan{" "}
                        <span className=" font-bold">experience</span> terbaik
                        dari pelayanan{" "}
                        <span className=" font-bold">Tops Inspector</span> !
                        dengan
                        <span>
                            pengalaman di dunia otomotif -/+ 20 Tahun
                        </span>{" "}
                        menjadi{" "}
                        <span className=" font-bold">
                            kelebihan untuk meningkatkan kepuasan layanan kepada
                            Customer
                        </span>
                    </AccordionItem>

                    <AccordionItem header="Pembayaran Mudah & Terjangkau">
                        <span className=" font-bold">Dapatkan Promo</span> dari
                        setiap pemeriksaan / inpeksi mobil ! pembayaran{" "}
                        <span className=" font-bold">Cash</span> ataupun{" "}
                        <span className=" font-bold">Transfer</span> !
                    </AccordionItem>
                </Accordion>
            </div>
        </Element>
    );
}
