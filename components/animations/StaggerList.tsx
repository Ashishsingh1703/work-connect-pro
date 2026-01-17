"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StaggerListProps {
    children: React.ReactNode[];
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export function StaggerList({
    children,
    className = "",
    delay = 0,
    staggerDelay = 0.1,
}: StaggerListProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className={className}
        >
            {children.map((child, index) => (
                <motion.div key={index} variants={item}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}
