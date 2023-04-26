"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Element } from "react-scroll";

export default function Service() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <Element name="service">
            <div className="lg:mt-[60px] mt-[30px] w-full overflow-hidden">
                <div className=" mx-5 lg:mx-10 xl:mx-[100px]">
                    <div className=" w-full p-5 bg-secondary-light border-l-[3px] space-y-5 border-l-secondary">
                        <h1 className=" text-[36px] lg:text-[54px] font-bold leading-none text-yankess">
                            Our Service
                        </h1>
                        <p className=" text-[12px] lg:text-[20px] text-yankess">
                            Tops Inspector memberikan services yang terbaik !
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <Carousel
                        responsive={responsive}
                        swipeable={false}
                        draggable={false}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="transform 300ms ease-in-out"
                        transitionDuration={500}
                        containerClass=" mx-2.5 lg:mx-[30px] xl:mx-[80px] mt-[30px]"
                        removeArrowOnDeviceType={["desktop"]}
                        itemClass="p-2.5 lg:p-2.5 xl:p-5"
                        sliderClass=""
                        customLeftArrow={
                            <button className=" p-2.5 bg-[#E5E5E5] absolute top-1/2 -translate-y-1/2 left-2.5 cursor-pointer rounded-full ">
                                <FaChevronLeft className=" h-6 w-6" />
                            </button>
                        }
                        customRightArrow={
                            <button className=" p-2.5 bg-[#E5E5E5] absolute top-1/2 -translate-y-1/2 right-2.5 cursor-pointer rounded-full ">
                                <FaChevronRight className=" h-6 w-6" />
                            </button>
                        }
                    >
                        <div className="rounded-lg overflow-hidden">
                            <div className="p-5 text-center uppercase text-[24px] font-bold bg-secondary">
                                <p>Surat Surat</p>
                            </div>
                            <div className="p-5 bg-yankess flex flex-col items-center">
                                <div className="w-[130px] h-[130px] mb-5 rounded-full bg-white flex justify-center items-center">
                                    <Image
                                        src="/service1.png"
                                        height={90}
                                        width={90}
                                        alt="service"
                                    />
                                </div>
                                <div className="w-full space-y-4">
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek STNK</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Lembar Pajak</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek BPKB</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Faktur</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Service Terakhir</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 rounded-lg overflow-hidden">
                            <div className="py-5 text-center uppercase text-[24px] font-bold bg-secondary">
                                <p>Mesin Transmisi</p>
                            </div>
                            <div className="p-5 bg-yankess flex flex-col items-center">
                                <div className="w-[130px] h-[130px] mb-5 rounded-full bg-white flex justify-center items-center">
                                    <Image
                                        src="/service2.png"
                                        height={90}
                                        width={90}
                                        alt="service"
                                    />
                                </div>
                                <div className="w-full space-y-4">
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Kebocoran Mesin</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Radiator</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Panel Indikator</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Transmisi Mesin</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Sistem Rem</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 rounded-lg overflow-hidden">
                            <div className="py-5 text-center uppercase text-[24px] font-bold bg-secondary">
                                <p>Interior</p>
                            </div>
                            <div className="p-5 bg-yankess flex flex-col items-center">
                                <div className="w-[130px] h-[130px] mb-5 rounded-full bg-white flex justify-center items-center">
                                    <Image
                                        src="/service3.png"
                                        height={90}
                                        width={90}
                                        alt="service"
                                    />
                                </div>
                                <div className="w-full space-y-4">
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Kondisi Interior</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Kondisi Jok & Trim</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Fitur Interior</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Sistem AC</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Indikasi Banjir</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 rounded-lg overflow-hidden">
                            <div className="py-5 text-center uppercase text-[24px] font-bold bg-secondary">
                                <p>Eksterior</p>
                            </div>
                            <div className="p-5 bg-yankess flex flex-col items-center">
                                <div className="w-[130px] h-[130px] mb-5 rounded-full bg-white flex justify-center items-center">
                                    <Image
                                        src="/service4.png"
                                        height={90}
                                        width={90}
                                        alt="service"
                                    />
                                </div>
                                <div className="w-full space-y-4">
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Panel Body</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Under Body</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Kaca & Wiper</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Fungsi Lampu</p>
                                    </div>
                                    <div className="flex items-center gap-x-2.5 text-white">
                                        <Image
                                            src="/ceklist.png"
                                            height={20}
                                            width={20}
                                            alt="checklist"
                                        />
                                        <p>Cek Indikasi Tabrakan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </Element>
    );
}
