import clsx from "clsx";
import React from "react";
import { navLinks } from "~/utils/data/navLinks";

type Props = { className?: string };

export default function SiteMap({ className }: Props) {
    const classes = clsx(
        "flex flex-wrap gap-2 flex-col w-full  sm:w-fit sm:flex-row items-center justify-center",
        className || ""
    );

    const linkClass = clsx(
        "rounded-full px-4 py-2 transition border w-full text-center sm:w-fit bg-transparent text-white border-white"
    );

    return (
        <>
            {/* Right section - NavLinks */}
            <div className={classes}>
                {navLinks.map(({ label, href }) => (
                    <a href={href} className={linkClass} key={label}>
                        {label}
                    </a>
                ))}
            </div>
        </>
    );
}
