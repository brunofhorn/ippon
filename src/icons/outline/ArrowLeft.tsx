import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function ArrowLeft({ color = "#1D1D1D", width, height }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 20 20">
            <path
                fill={color}
                d="M9.734 1.733a.5.5 0 10-.708-.706L.418 9.645A.494.494 0 00.27 10a.499.499 0 00.146.353l8.61 8.62a.5.5 0 10.708-.706L1.976 10.5H19.23a.5.5 0 100-1H1.976l7.758-7.767z"
            ></path>
        </svg>
    );
}
