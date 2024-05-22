'use client'

import { useLogic } from "./useLogic";

interface ButtonProps {
    label: string;
    color: string;
    background: string;
    radius: string | number;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    fontWeight?: string;
    styles?: any;
    href?: string;
}

export default function Button({
    label,
    color,
    background,
    radius,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    fontWeight,
    styles,
    href
}:ButtonProps) {
    const { handleRedirect } = useLogic()
    return (
        <button 
            color={color}
            style={{
                ...styles,
                borderRadius: radius,
                background,
                paddingTop,
                paddingBottom,
                paddingLeft,
                paddingRight,
                fontWeight,
            }}
            onClick={() => handleRedirect(href ?? '/')}
        >
            {label}
        </button>
    );
}
