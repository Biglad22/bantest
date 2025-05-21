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
    size = "sm",
    variant = "primary",
    className = "",
}) => {
    const classes = clsx(variantClasses[variant], className, "");

    switch (size) {
        case "lg":
            return <h2 className={classes}>{children}</h2>;

        case "md":
            return <h3 className={classes}>{children}</h3>;

        case "sm":
            return <h4 className={classes}>{children}</h4>;
    }
};

export default SectionHeader;
