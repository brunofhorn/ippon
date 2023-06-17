import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function Plus({ color = "#1D1D1D", width = 20, height = 20 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 20 20">
            <path
                fill={color}
                d="M10.5.77a.5.5 0 10-1 0v8.74H.77a.5.5 0 100 1H9.5v8.73a.5.5 0 101 0v-8.73h8.73a.5.5 0 100-1H10.5V.77z"
            ></path>
        </svg>
    );
}
