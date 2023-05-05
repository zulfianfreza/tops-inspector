"use client";
import Image from "next/image";
import React from "react";

export default function Driver() {
    return (
        <section>
            <div className="mx-5 lg:mx-[100px] flex flex-col lg:flex-row mt-[60px] items-center">
                <div className="flex-1 p-5 lg:p-10 w-full flex justify-center">
                    <div className=" relative w-full h-[286px] sm:h-[410px]">
                        <Image
                            src="/car.png"
                            fill={true}
                            alt=""
                            className=" object-contain"
                        />
                    </div>
                </div>
                <div className=" flex-1 bg-yankess p-5 lg:px-[30px] lg:py-[50px] space-y-[15px]">
                    <h1 className=" text-white text-[36px] lg:text-[56px]">
                        Butuh Jasa Driver ?{" "}
                        <span className=" font-bold">Tops Driver</span> siap
                        mengantar anda kemana pun !
                    </h1>
                    <div className=" bg-danger p-2.5 text-white text-[16px] lg:text-[20px]">
                        <p>*Daerah Bandung Sekitarnya</p>
                    </div>
                    <button className=" gap-x-[15px] w-full py-[10px] flex items-center px-[20px] bg-white rounded-full">
                        <Image src="/wa.png" height={40} width={40} alt="wa" />
                        <h1 className=" text-[16px] font-medium lg:text-[36px]">
                            Hubungi Tops Driver
                        </h1>
                    </button>
                </div>
            </div>
        </section>
    );
}
