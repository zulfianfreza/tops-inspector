"use client";
import { Promo } from "@/lib/types";
import { numberFormat } from "@/utils/number-format";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PromoCard({ data }: { data: Promo }) {
    return (
        <div className=" border shadow group hover:shadow-xl transition hover:border duration-300 rounded-[20px] overflow-hidden">
            <div className=" bg-primary w-full py-5 text-center">
                <h1 className=" uppercase text-white font-bold text-[20px] lg:text-[30px]">
                    {data.title}
                </h1>
            </div>
            <div className=" aspect-[16/10] lg:aspect-square w-full relative border-b shadow-md">
                <Image
                    src={data.thumbnail}
                    fill={true}
                    alt="premium"
                    className=" object-cover"
                />
            </div>
            <div className=" px-[30px] py-10 text-center">
                <p className=" text-dark-silver text-[16px]">
                    {data.description}
                </p>
                <p className=" font-semibold text-[24px] mt-[30px] lg:text-[36px] text-danger line-through">
                    Rp {numberFormat(data.price)}
                </p>
                <p className=" font-semibold text-yankess text-[36px] lg:text-[48px]">
                    Rp {numberFormat(data.price_deal)}
                </p>
                <Link
                    href="https://wa.me/6289604401595"
                    target="_blank"
                    className="flex justify-center items-center mt-[30px] w-full rounded-full p-5 bg-secondary-light text-[20px] lg:text-[24px] font-bold hover:bg-secondary transition duration-300"
                >
                    Booking Sekarang !
                </Link>
            </div>
        </div>
    );
}
