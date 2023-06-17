import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function Eye({ color = "#1D1D1D", width = 20, height = 14 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 20 14">
            <path
                fill={color}
                fillRule="evenodd"
                d="M7.497 4.467a3.57 3.57 0 012.525-1.045 3.58 3.58 0 012.52 1.05 3.64 3.64 0 011.05 2.53 3.58 3.58 0 01-3.57 3.56 3.57 3.57 0 01-2.525-6.095zm.707 4.342a2.57 2.57 0 001.813.753 2.58 2.58 0 002.575-2.56 2.61 2.61 0 00-.76-1.83 2.54 2.54 0 00-1.81-.75 2.57 2.57 0 00-1.818 4.387z"
                clipRule="evenodd"
            ></path>
            <path
                fill={color}
                fillRule="evenodd"
                d="M10.132.962c3.53 0 7.02 2.46 9.13 4.78a1.88 1.88 0 010 2.52c-2.08 2.26-5.59 4.7-9.25 4.78h-.14c-3.52 0-7.01-2.46-9.12-4.78a1.86 1.86 0 010-2.52c2.13-2.35 5.64-4.86 9.25-4.78h.13zm-.13 11.07c3.35-.06 6.68-2.46 8.52-4.46h-.01a.85.85 0 00.01-1.15c-1.99-2.2-5.28-4.54-8.5-4.46h-.14c-3.2 0-6.38 2.29-8.38 4.46a.85.85 0 000 1.15c1.99 2.2 5.15 4.52 8.5 4.46z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
