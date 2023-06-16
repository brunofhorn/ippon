import React from "react";

import { ISvgIcon } from "@/interfaces/icons";

export default function CloseMenu({ color, width = 40, height = 40 }: ISvgIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 40 40">
            <g filter="url(#filter0_d_565_110906)">
                <rect width="32" height="32" x="4" y="2" fill="#969AA3" rx="8" shapeRendering="crispEdges"></rect>
                <path
                    fill="#FFFDFD"
                    d="M22.98 24.583a.494.494 0 01-.353-.147l-5.84-5.813a.9.9 0 010-1.28l5.84-5.84a.5.5 0 01.706.68l-5.773 5.773 5.773 5.774a.5.5 0 01-.353.853z"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_d_565_110906"
                    width="40"
                    height="40"
                    x="0"
                    y="0"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_565_110906"></feBlend>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_565_110906" result="shape"></feBlend>
                </filter>
            </defs>
        </svg>
    );
}
