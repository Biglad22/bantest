// CountUpStat.tsx
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import React from "react";

interface CountUpStatProps {
    target: number;
    prefix?: string;
    suffix?: string;
    duration?: number; // in milliseconds
    className?: string;
}

export default function CountUpStat({
    target,
    prefix = "",
    suffix = "",
    duration = 2000,
    className = "",
}: CountUpStatProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = React.useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: "some" });

    useEffect(() => {
        if (!isInView || hasAnimated) return;

        setHasAnimated(true);
        const startTime = performance.now();

        const animate = (time: number) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * target);
            setCount(value);

            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [isInView, target, duration, hasAnimated]);

    return (
        <span className={className} ref={ref}>
            {prefix}
            {count.toLocaleString()}
            {suffix}
        </span>
    );
}
