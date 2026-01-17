"use client";

import { motion, useInView, UseInViewOptions, Variants } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
    once?: boolean;
}

export function FadeIn({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    direction = "up",
    fullWidth = false,
    once = true,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });

    const getVariants = (): Variants => {
        const distance = 20;
        const initial = { opacity: 0, x: 0, y: 0 };

        switch (direction) {
            case "up":
                initial.y = distance;
                break;
            case "down":
                initial.y = -distance;
                break;
            case "left":
                initial.x = distance;
                break;
            case "right":
                initial.x = -distance;
                break;
        }

        return {
            hidden: initial,
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration,
                    delay,
                    ease: "easeOut"
                }
            },
        };
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={getVariants()}
            className={className}
            style={{ width: fullWidth ? "100%" : "auto" }}
        >
            {children}
        </motion.div>
    );
}
