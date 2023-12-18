import React from "react";
import Image from "next/image";
import Back from "@/components/Back";
import FavouriteToggle from "@/components/FavouriteToggle";
import getResponse from "@/libs/getResponse";
import ProductImage from "@/components/ProductImage";
import DescProduct from "@/components/DescProduct";

export default async function page({ params: { id } }) {
    const Product = await getResponse(`products/${parseInt(id)}`);
    console.log(Product.images);
    return <ProductPage Product={Product} />;
}

function ProductPage({ Product }) {
    return (
        <section className="relative mb-24">
            <div className="absolute z-10 top-4 w-full h-12 flex justify-between px-[5%]">
                <Back />
                <FavouriteToggle />
            </div>
            <div className="bg-secondary h-[600px] w-full flex justify-center items-center">
                <Image className="w-full h-full object-contain scale-75 bg-transparent" src={Product?.image} width={400} height={600} alt={Product?.title} />
            </div>

            <div className="bg-white -mt-20 rounded-t-[50px] relative z-10 pt-1 px-4">
                <div className="px-[5%] font-poppins">
                    <div className="flex justify-between mt-4">
                        <h4 className="tracking-tighter text-green-700 font-semibold">Terjual { Product.rating.count }</h4>
                        <h5>{ Product.rating.rate }⭐</h5>
                    </div>

                    <h1 className="mt-4 font-bold capitalize text-2xl text-green-600">{Product?.title}</h1>
                    <DescProduct desc={Product?.description}/>
                </div>
            </div>

            <nav className="fixed max-w-4xl bottom-0 z-10 w-full h-16 px-[5%] flex items-center justify-between bg-white font-poppins">
                <div className="text-slate-800">
                    <h4 className="tracking-tighter capitalize">total price</h4>
                    <p className="text-2xl md:text-3xl font-semibold text-primary">${Product?.price}</p>
                </div>

                <button className="px-8 py-3 font-bold rounded-full bg-primary text-white">Add to Cart 🧳</button>
            </nav>
        </section>
    );
}
