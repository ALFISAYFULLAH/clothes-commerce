"use client"
import Image from "next/image";
import { useState } from "react";

export default function ProductImage({ images }) {
    const [Image, setImage] = useState(0);

    return (
        <>
            <img className="w-full h-full object-cover md:object-contain" src={images[Image] || "/images/placeholder.png"} alt="" width={400} height={600} />;
            <div className="absolute bottom-4 z-20 w-10/12 flex justify-center">
                <div className="flex gap-4">
                    {images.map((image, index) => (
                        <div key={index} className={`rounded-xl overflow-hidden ${Image === index && "border-2 border-navbar"}`}>
                            <img onClick={() => setImage(index)} className="w-14 h-14 object-cover" src={image} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}