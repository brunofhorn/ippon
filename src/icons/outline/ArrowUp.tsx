import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function ArrowUp({ color = "#1D1D1D", width, height }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 20 20">
            <path
                fill={color}
                d="M18.982 9.047l-8.63-8.63a.36.36 0 00-.16-.15.5.5 0 00-.38 0 .36.36 0 00-.16.11l-8.63 8.67a.48.48 0 000 .7.48.48 0 00.7 0l7.78-7.77v17.29a.5.5 0 101 0V1.977l7.78 7.77a.48.48 0 00.7 0 .478.478 0 000-.7z"
            ></path>
        </svg>
    );
}
