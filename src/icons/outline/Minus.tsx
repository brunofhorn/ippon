import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function Minus({ color = "#1D1D1D", width = 20, height = 2 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 20 2">
            <path
                fill={color}
                fillRule="evenodd"
                d="M.27 1a.5.5 0 01.5-.5h18.46a.5.5 0 110 1H.77a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
