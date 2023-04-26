"use client";
import { PromoList } from "@/lib/data/promo";
import Image from "next/image";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import PromoCard from "./PromoCard";

export default function Promo() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
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
        <section id="why">
            <div className=" px-5 lg:px-10 mt-[30px] text-center lg:mt-[60px] bg-primary py-5 text-white">
                <h1 className=" text-[28px] lg:text-[48px] font-bold">
                    PENAWARAN TERBAIK
                </h1>
                <p className=" text-[14px] lg:text-[20px]">
                    Tops Inspector memberikan penawaran layanan inspeksi mobil
                    yang terbaik !
                </p>
            </div>
            <div className=" w-full py-2.5 text-white text-[16px] lg:text-[20px] bg-danger flex items-center">
                <marquee>
                    Dapatkan promo deal hemat ! Dapatkan promo deal hemat !
                    Dapatkan promo deal hemat ! Dapatkan promo deal hemat !
                    Dapatkan promo deal hemat !
                </marquee>
            </div>
            <div className="">
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
                    containerClass=" mx-2.5 lg:mx-[30px] xl:mx-[80px] mt-[30px] flex items-stretch"
                    removeArrowOnDeviceType={["desktop"]}
                    itemClass="p-2.5 lg:p-[15px]"
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
                    {PromoList.map((promo, index) => (
                        <PromoCard key={index} data={promo} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
