import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router";

type Props = { className?: string };

export default function SiteMap({ className }: Props) {
    // Define your routes
    const navItems = [
        { name: "Home", path: "/#home" },
        { name: "About", path: "/#about-us" },
        { name: "Services", path: "/#our-services" },
        { name: "Why us", path: "/#why-us" },
    ];

    const classes = clsx(
        "flex flex-wrap gap-2 flex-col sm:flex-row items-center",
        className || ""
    );

    return (
        <>
            {/* Right section - NavLinks */}
            <div className={classes}>
                {navItems.map(({ name, path }) => (
                    <NavLink
                        key={name}
                        to={path}
                        className={({ isActive }: any) =>
                            `rounded-full px-4 py-2 transition border sm:w-fit ${
                                isActive
                                    ? "bg-white text-black border-white"
                                    : "text-white border-white hover:bg-white hover:text-black"
                            }`
                        }
                    >
                        {name}
                    </NavLink>
                ))}
            </div>
        </>
    );
}
