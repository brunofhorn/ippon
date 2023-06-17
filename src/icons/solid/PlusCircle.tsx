import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function PlusCircle({ color = "#34495E", width = 20, height = 20 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 20 20">
            <path
                fill={color}
                d="M10 0a10 10 0 100 20 10 10 0 000-20zm3.69 10.73h-2.94v2.94a.75.75 0 11-1.5 0v-2.92H6.31a.75.75 0 110-1.5h2.94V6.31a.75.75 0 011.5 0v2.94h2.94a.75.75 0 110 1.5v-.02z"
            ></path>
        </svg>
    );
}
