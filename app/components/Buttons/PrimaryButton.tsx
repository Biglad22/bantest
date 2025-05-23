import React from "react";
import { motion } from "framer-motion";
import { buttonTap, buttonHover } from "~/Animations/Button-animation";
import clsx from "clsx";
import { PiCaretRightBold } from "react-icons/pi";

type Props = React.ComponentPropsWithoutRef<"button"> & {
    icon?: React.ReactNode;
};

export default function PrimaryButton({
    children,
    className,
    icon,
    ...props
}: Props) {
    const classes: string = clsx(
        className || "",
        "flex items-center cursor-pointer justify-center p-3 gap-2 w-fit rounded-4xl bg-primary border-3 border-background-main font-semibold",
        icon && "pr-2"
    );

    return (
        <motion.div
            whileHover={buttonHover}
            whileTap={buttonTap}
            className="w-fit "
        >
            <button {...props} className={classes}>
                {children}
                {icon && icon}
                {!icon && (
                    <span className="block rounded-full p-2 bg-secondary border border-background-main">
                        <PiCaretRightBold className="text-base" />
                    </span>
                )}
            </button>
        </motion.div>
    );
}
