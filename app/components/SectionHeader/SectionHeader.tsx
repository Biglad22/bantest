import clsx from "clsx";
import React from "react";

type SectionHeaderProps = {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "tertiary";
    className?: string;
};

// const sizeClasses = {
//     sm: "text-lg",
//     md: "text-2xl",
//     lg: "text-4xl",
// };

const variantClasses = {
    primary: "text-primary font-bold",
    secondary: "font-medium",
    tertiary: "font-regular",
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    children,
    size = "md",
    variant = "primary",
    className = "",
}) => {
    const classes = clsx(variantClasses[variant], className, "");

    switch (size) {
        case "lg":
            return <h3 className={classes}>{children}</h3>;

        case "md":
            return <h4 className={classes}>{children}</h4>;

        case "md":
            return <h5 className={classes}>{children}</h5>;
    }
};

export default SectionHeader;
