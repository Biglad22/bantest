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
            className={`p-3 w-full lg:w-fit text-center leading-none rounded-full font-medium transition-all duration-200 backdrop-blur-sm leading-none
        ${
            active
                ? "bg-secondary/40 border border-secondary  text-white"
                : "bg-white/40 text-white hover:bg-white/30 border border-white/20 hover:border-white/30"
        }`}
        >
            {label}
        </a>
    );
};

export default NavLinkItem;
