import Contact from "@/components/Contact";
import Driver from "@/components/Driver";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Navbar from "@/components/Navbar";
import Promo from "@/components/Promo";
import Service from "@/components/Service";
import Why from "@/components/Why";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Tops Inspector",
    icons: "/logo-sqaure.png",
    description:
        "Pemeriksaan Mobil Profesional - Inspector Mobil menyediakan layanan inspeksi mobil yang komprehensif oleh tim ahli yang berpengalaman. Dapatkan laporan pemeriksaan rinci untuk membantu Anda membuat keputusan yang cerdas dalam membeli atau menjual mobil bekas.",
};

export default function Home() {
    return (
        <div className=" min-h-screen relative">
            <Navbar />
            <Hero />
            <Service />
            <How />
            <Why />
            <Promo />
            {/* <Driver /> */}
            <Contact />
            <Footer />
        </div>
    );
}
