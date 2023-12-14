"use client";

import { useRouter } from "next/navigation";

export default function Back() {
    const router = useRouter();
    return (
        <div onClick={router.back || router.push("/")} className="w-10 h-10 bg-white text-icon rounded-full flex items-center justify-center text-4xl">
            <svg className="w-6 h-6 fill-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
            </svg>
        </div>
    );
}
