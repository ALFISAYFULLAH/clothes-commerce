import React from "react";
import Image from "next/image";
import Card from "@/components/Card";
import Back from "@/components/Back";

export default function page({ params: { id } }) {
    let imageList = [];
    for (let i = 1; i <= id; i++) {
        imageList.push(i);
    }
    return (
        <section className="relative mb-24">
            <div className="absolute z-10 top-4 w-full h-12 flex justify-between px-[5%]">
                <Back />
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-4xl text-red-600">❤</div>
            </div>
            <div className="bg-green-500 h-96 w-full flex justify-center relative">
                <div className="absolute bottom-4 bg-white flex items-center px-1 w-fit max-w-[90%] md:max-w-md h-16 overflow-x-scroll">
                    <div className="flex items-center gap-2">
                        {imageList.map((item) => (
                            <Image key={id} className={`w-14 h-14 rounded-lg bg-green-400 ${item === 2 ? "border-2 border-green-800" : ""}`} src="https://placehold.co/50x50" alt="" width={50} height={50} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-[5%] font-poppins">
                <div className="flex justify-between mt-4">
                    <h4 className="tracking-tighter text-green-700">females style</h4>
                    <h5>5⭐</h5>
                </div>

                <h1 className="mt-4 font-bold capitalize text-2xl text-green-600">product name</h1>
                <h2 className="mt-4 text-lg font-semibold tracking-tight capitalize text-green-500">product description</h2>
                <p className="tracking-tight font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ab at explicabo aut totam similique, error beatae laudantium laboriosam porro officia labore, minus aliquam! In eveniet, inventore, neque doloribus adipisci
                    deserunt ut magni fugit ullam recusandae veniam, suscipit dolore exercitationem laborum ea sapiente explicabo tempore ex cumque nam. Reprehenderit, vel.
                </p>
            </div>

            <div className="px-[5%] mt-8">
                <h1 className="font-poppins uppercase font-bold text-xl">rekomendasi</h1>
                <div className="flex flex-wrap gap-y-4 gap-x-2 justify-between">
                    <Card />
                </div>
            </div>

            <div className="dots mx-auto mt-8"></div>

            <nav className="fixed bottom-0 w-full h-16 px-[10%] flex items-center justify-between bg-green-600 font-poppins">
                <div className="text-slate-800">
                    <h4 className="tracking-tighter capitalize">total price</h4>
                    <p className="text-3xl font-semibold text-white">$18.00</p>
                </div>

                <button className="px-8 py-3 font-bold rounded-full bg-green-800 text-white">Add to Cart 🧳</button>
            </nav>
        </section>
    );
}