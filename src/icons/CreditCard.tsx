import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function CreditCard({ color = "#34495E", width = 14, height = 10 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 14 10">
            <path fill={color} d="M8.991 7.223a.347.347 0 000 .694h2.77a.347.347 0 000-.694h-2.77z"></path>
            <path
                fill={color}
                fillRule="evenodd"
                d="M2.569.333c-1.229 0-2.236.99-2.236 2.24v4.855c0 1.23.988 2.239 2.236 2.239h8.862c1.229 0 2.236-.99 2.236-2.24V2.573c0-1.23-.988-2.239-2.236-2.239H2.57zM1.065 2.225a1.539 1.539 0 011.504-1.198h8.862c.74 0 1.348.514 1.504 1.198H1.065zm-.039.694v1.403h11.947V2.919H1.027zm0 4.509V5.016h11.947v2.412c0 .862-.693 1.544-1.542 1.544H2.57a1.539 1.539 0 01-1.543-1.544z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
