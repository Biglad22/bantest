import type { Variants } from "framer-motion";

export const cardParentAnime: Variants = {
    initial: {
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    hover: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const cardTextAnime: Variants = {
    initial: {
        fontWeight: 700,
        color: "rgba(242, 175, 129, 1)",
    },
    hover: {
        fontWeight: 900,
        color: "rgba(242, 175, 129, 1)",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const cardSmallTextAnime: Variants = {
    initial: { color: "rgba(255, 255, 255, 1)" },
    hover: {
        color: "rgba(27, 27, 27, 1)",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};
