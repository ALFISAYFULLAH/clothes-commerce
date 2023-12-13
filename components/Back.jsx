"use client";

import { useRouter } from "next/navigation";

export default function Back() {
    const router = useRouter()
    return (
        <div onClick={router.back || router.push('/')} className="w-12 h-12 bg-white text-green-600 rounded-full flex items-center justify-center text-4xl">
            ⬅
        </div>
    );
}
