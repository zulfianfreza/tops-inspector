import { Promo } from "../types";

export const PromoList: Promo[] = [
    {
        title: "premium",
        thumbnail: "/premium.png",
        description:
            "City car, small sedan (e.g. Honda Jazz, Daihatsu Xenia, Toyota Avanza)",
        price: 300000,
        price_deal: 250000,
    },
    {
        title: "pertalite",
        thumbnail: "/pertalite.png",
        description:
            "Full Size sedan, SUV (e.g. Toyota Fortuner, Mazda CX-5, Nissan X-Trail, Honda Accord)",
        price: 400000,
        price_deal: 350000,
    },
    {
        title: "pertamax",
        thumbnail: "/pertamax.png",
        description:
            "Eropa Car, Luxury MPV (e.g. Toyota Alphard, Audi, BMW) / Mobil Usia 10 Tahun Keatas",
        price: 500000,
        price_deal: 425000,
    },
];
