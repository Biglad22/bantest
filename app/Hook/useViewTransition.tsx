import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

type Props = {
    setView: () => void;
    removeView: () => void;
    amount?: number;
};

const useViewTransition = ({ setView, removeView, amount }: Props) => {
    const cardWrapper = useRef(null); // ref for entire card
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const wrapperController = useAnimation();

    //========= track view state of main card wrapper
    const wrapperIsInView = useInView(cardWrapper, {
        amount: amount || 0.5,
        once: false,
    });

    useEffect(() => {
        //checks screen size
        const checkScreen = () => setIsLargeScreen(window.innerWidth >= 650); // Tailwind's lg breakpoint
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    useEffect(() => {
        if (wrapperIsInView && !isLargeScreen) {
            setView(); // updates the activeCard value in parent
        }

        if (!wrapperIsInView && !isLargeScreen) {
            removeView(); // updates the activeCard value in parent
        }
    }, [wrapperIsInView, wrapperController]);

    return {
        cardWrapper,
        wrapperController,
        isLargeScreen,
    };
};

export default useViewTransition;

export const useActiveCard = () => {
    /// this track the statCard that just entered view
    const [activeCards, setActiveCards] = useState<Array<number>>([]);
    const updateActiveCards = (index: number) =>
        setActiveCards((o) => [...o, index]);
    const reduceActiveCards = (index: number) => {
        const newActiveCards = activeCards.filter((card) => card !== index);
        setActiveCards(() => newActiveCards);
    };
    const latestCard = useMemo(() => {
        return Math.max(...activeCards);
    }, [activeCards]);

    return {
        latestCard,
        updateActiveCards,
        reduceActiveCards,
    };
};
