import React from "react";

export default function Map() {
    return (
        <div className=" mx-5 lg:mx-[100px] mt-5 lg:mt-10">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253496.1520549651!2d107.45423394999999!3d-6.90526405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x179b055071a3a2b%3A0x6707c0dae867421e!2sTops%20Inpector!5e0!3m2!1sid!2sid!4v1683876203305!5m2!1sid!2sid"
                className=" border-0 w-full aspect-video lg:aspect-[16/6]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}
