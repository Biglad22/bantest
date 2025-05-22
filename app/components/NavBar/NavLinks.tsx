// components/Navbar.tsx
import React, { useState, useContext } from "react";
import NavLinkItem from "./NavLinkItem";
import clsx from "clsx";
import { Logo } from "~/assets/images";
import { PiCaretRightBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "~/utils/data/navLinks";
import { PageTrackerContext } from "~/context/Pagetracker";

const Navbar: React.FC<{ className?: string }> = ({ className }) => {
    const { activeSection } = useContext(PageTrackerContext);
    const classes = clsx(
        "flex  gap-3 px-parent-hor py-4 fixed top-0 left-0 z-50 items-center justify-between w-full bg-black/20 backdrop-blur-sm",
        className || ""
    );
    const [menuIsActive, setMenuIsActive] = useState(false);

    const menuTrayClass = clsx(
        "absolute top-full space-y-4 lg:space-y-0 lg:right-0 transition-all duration-500 w-fit p-6 bg-surface-dark rounded-md lg:contents",
        menuIsActive ? "right-0" : "right-[-100%]"
    );

    return (
        <nav className={classes}>
            <img src={Logo} alt="Savuney" className="h-6" />
            <div className={menuTrayClass}>
                <div className="flex flex-col items-center justify-center lg:flex-row gap-2">
                    {navLinks.map((link) => (
                        <NavLinkItem
                            key={link.href}
                            href={link.href}
                            label={link.label}
                            active={activeSection === link.href.substring(1)}
                        />
                    ))}
                </div>
                <a
                    href="#"
                    className="flex items-center gap-2 leading-none p-3 bg-surface-purple border-2 border-primary text-primary rounded-full font-medium "
                >
                    <span>Get Started</span>
                    <PiCaretRightBold />
                </a>
            </div>
            <span>
                <button
                    onClick={() => setMenuIsActive(!menuIsActive)}
                    className="lg:hidden p-2 rounded-full  text-background-main"
                >
                    <GiHamburgerMenu className="size-8" />
                </button>
            </span>
        </nav>
    );
};

export default Navbar;
