// components/NavLinkItem.tsx
import React from "react";

interface NavLinkItemProps {
    href: string; // e.g. "#about", "#services"
    label: string;
    active: boolean;
    onClick?: () => void; // optional scroll-to behavior
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({
    href,
    label,
    active,
    onClick,
}) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`p-3 w-fit rounded-full font-medium transition-all duration-200 backdrop-blur-sm leading-none
        ${
            active
                ? "bg-secondary/40 border border-secondary  text-white"
                : "bg-white/20 text-white hover:bg-white/30"
        }`}
        >
            {label}
        </a>
    );
};

export default NavLinkItem;
