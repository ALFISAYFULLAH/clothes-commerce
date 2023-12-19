'use client'
import React, { useState } from "react";

export default function DescProduct({ desc }) {
    const [descLength, setLength] = useState(100)

    if (desc.length < 100) {
        return <p>{desc}</p>
    } else {
        return (
            <>
                <p className="text-sm sm:hidden tracking-tight text-primary mt-4 pr-4">
                    {desc.substring(0, descLength)}
                    <span className="cursor-pointer text-primary font-semibold" onClick={() => setLength(descLength === 100 ? desc.length : 100)}>
                        {descLength === 100 ? "  More..." : "  Lebih sedikit"}
                    </span>
                </p>
                <p className="hidden sm:block tracking-tight text-primary mt-4 pr-4">{desc}</p>
            </>
        );
    }
}
