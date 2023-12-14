import Link from "next/link";
import React from "react";

const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12];

export default function Card() {
    return (
        <>
            {cardList.map((card) => (
                <div key={card} className="max-w-[200px] w-[48%] h-auto bg-white relative mb-4 border-2">
                    <Link href={`/product/${card}`}>
                        <div className="w-full max-h-[230px] h-[48vw] bg-white border-2"></div>
                        <div className="h-16"></div>
                        <div className="h-10 w-full mt-4"></div>
                    </Link>
                </div>
            ))}
        </>
    );
}
