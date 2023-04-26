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
    title: "Heru Inspector",
    description:
        "Heru Inspector adalah layanan profesional untuk memeriksa / inpeksi kondisi Mobil Bekas sebelum dibeli atau dijual oleh teknisi yang terlatih, Heru Inspector akan memberikan laporan rinci tentang kondisi kendaraan.",
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
