import type { TargetAndTransition } from "framer-motion";

export const buttonHover: TargetAndTransition = {
    scale: 1.025,
    transition: {
        type: "spring",
        stiffness: 300,
    },
};

export const buttonTap: TargetAndTransition = {
    scale: 0.95,
};
