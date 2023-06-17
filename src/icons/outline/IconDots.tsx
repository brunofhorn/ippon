import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function IconDots({ color = "#34495E", width = 3, height = 14 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 3 14">
            <path
                fill={color}
                d="M1.078 2.531c.174.117.379.179.589.179a1.07 1.07 0 001.06-1.06 1.06 1.06 0 10-1.65.881zM1.667 8.06A1.06 1.06 0 112.727 7a1.07 1.07 0 01-1.06 1.06zM1.667 13.41a1.06 1.06 0 111.06-1.06 1.07 1.07 0 01-1.06 1.06z"
            ></path>
        </svg>
    );
}
