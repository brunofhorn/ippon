import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function Trash({ color = "#34495E", width = 14, height = 14 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 14 14">
            <path
                fill={color}
                d="M5.667 5.354a.333.333 0 00-.334.333v4.393a.333.333 0 10.667 0V5.687a.333.333 0 00-.333-.333zM8.071 5.451a.333.333 0 01.569.236v4.393a.333.333 0 11-.667 0V5.687c0-.088.035-.173.098-.236z"
            ></path>
            <path
                fill={color}
                fillRule="evenodd"
                d="M13.16 2.274H9.493v-.547A1.213 1.213 0 008.313.514H5.647a1.213 1.213 0 00-1.22 1.213v.547H.833a.333.333 0 000 .666h.994l.806 9.44a1.207 1.207 0 001.194 1.114h6.3a1.207 1.207 0 001.206-1.107l.794-9.44h1.033a.333.333 0 100-.667v-.006zm-8.067-.547a.547.547 0 01.547-.547h2.667a.547.547 0 01.526.547v.547h-3.74v-.547zm5.587 10.6a.554.554 0 01-.547.5H3.827a.546.546 0 01-.54-.5L2.493 2.94h8.947l-.76 9.387z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
