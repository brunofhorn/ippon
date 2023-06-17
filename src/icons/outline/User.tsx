import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function User({ color = "#1D1D1D", width = 18, height = 20 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 18 20">
            <path
                fill={color}
                fillRule="evenodd"
                d="M9.938.362a4.81 4.81 0 10-1.876 9.436A4.81 4.81 0 009.938.362zM7.542 1.56a3.81 3.81 0 112.916 7.04 3.81 3.81 0 01-2.916-7.04z"
                clipRule="evenodd"
            ></path>
            <path
                fill={color}
                d="M3.697 13.937A7.5 7.5 0 0116.5 19.24a.5.5 0 001 0 8.5 8.5 0 10-17 0 .5.5 0 001 0 7.5 7.5 0 012.197-5.303z"
            ></path>
        </svg>
    );
}
