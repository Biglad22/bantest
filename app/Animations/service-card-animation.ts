import type { Variants } from "framer-motion";

export const cardParentAnime: Variants = {
    initial: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        border: "2px solid rgba(255, 255, 255, 0)",
    },
    hover: {
        backgroundColor: "rgba(30, 0, 96, 1)",
        border: "2px solid rgba(255, 255, 255, 1)",
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const cardIconAnime: Variants = {
    initial: {
        border: "2px solid rgba(255, 255, 255, 0)",
    },
    hover: {
        border: "2px solid rgba(255, 255, 255, 1)",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const cardTextAnime: Variants = {
    initial: {},
    hover: {
        color: "rgba(255, 255, 255, 1)",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const cardSmallTextAnime: Variants = {
    initial: {},
    hover: {
        color: "rgba(255, 255, 255, 0.7)",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};
