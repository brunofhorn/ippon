import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function Users({ color = "#34495E", width = 14, height = 10 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 14 10">
            <path fill={color} d="M4.525 5.333H4.52h.007-.002z"></path>
            <path
                fill={color}
                fillRule="evenodd"
                d="M5.961 4.896a2.593 2.593 0 01-1.436.437 2.607 2.607 0 01-2.599-2.586 2.593 2.593 0 114.035 2.149zm-.079-3.518A1.927 1.927 0 104.52 4.667 1.933 1.933 0 006.446 2.74c0-.51-.203-1.001-.564-1.362z"
                clipRule="evenodd"
            ></path>
            <path
                fill={color}
                d="M1.698 6.658a4 4 0 012.829-1.171 4 4 0 014.053 4 .34.34 0 01-.333.333.333.333 0 01-.334-.333 3.36 3.36 0 10-6.72 0 .34.34 0 01-.333.333.333.333 0 01-.333-.333 4 4 0 011.171-2.829z"
            ></path>
            <path
                fill={color}
                fillRule="evenodd"
                d="M12.3 3.973a2.18 2.18 0 10-2.196 2.18 3.334 3.334 0 00-1.15.214.333.333 0 00-.022.615c.08.037.172.041.255.011a2.666 2.666 0 013.453 1.6c.108.297.165.61.167.927a.333.333 0 00.333.333.34.34 0 00.333-.333c0-.394-.07-.784-.207-1.153a3.333 3.333 0 00-3.124-2.214 2.18 2.18 0 002.158-2.18zm-3.693 0a1.513 1.513 0 113.026 0 1.513 1.513 0 01-3.026 0z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
