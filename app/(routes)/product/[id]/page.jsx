import React from "react";
import Image from "next/image";
import Card from "@/components/Card";
import Back from "@/components/Back";
import FavouriteToggle from "@/components/FavouriteToggle";

export default async function page({ params: { id } }) {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    const listProdct = data;

    const resProduct = fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    console.log(await resProduct)
    const Product = {}
    console.log(id)
    return (
        <section className="relative mb-24">
            <div className="absolute z-10 top-4 w-full h-12 flex justify-between px-[5%]">
                <Back />
                <FavouriteToggle />
            </div>
            <div className="bg-secondary h-[600px] w-full flex justify-center relative rounded-bl-[50px] ">
                <Image className="w-full h-full object-cover md:object-contain" src={""} alt={Product?.title} width={400} height={600} />
            </div>

            <div className="bg-white -mt-20 rounded-t-[50px] relative z-10 pt-16">
                <div className="px-[5%] font-poppins">
                    <div className="flex justify-between mt-4">
                        <h4 className="tracking-tighter text-green-700">females style</h4>
                        <h5>5⭐</h5>
                    </div>

                    <h1 className="mt-4 font-bold capitalize text-2xl text-green-600">{Product?.title}</h1>
                    <h2 className="mt-4 text-lg font-semibold tracking-tight capitalize text-green-500">{Product?.description}</h2>
                </div>

                <div className="px-[5%] mt-8">
                    <h1 className="font-poppins uppercase font-bold text-xl">rekomendasi</h1>
                    <div className="columns-2 space-y-3 gap-3">
                        <Card listProduct={listProdct}/>
                    </div>
                </div>

                <div className="dots mx-auto mt-8"></div>
            </div>

            <nav className="fixed bottom-0 z-10 w-full h-16 px-[10%] flex items-center justify-between bg-white font-poppins">
                <div className="text-slate-800">
                    <h4 className="tracking-tighter capitalize">total price</h4>
                    <p className="text-2xl md:text-3xl font-semibold text-primary">${Product?.price}</p>
                </div>

                <button className="px-8 py-3 font-bold rounded-full bg-primary text-white">Add to Cart 🧳</button>
            </nav>
        </section>
    );
}
