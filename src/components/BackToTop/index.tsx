import React, { useState, useEffect } from "react";
import styles from "./BackToTop.module.scss";

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            const isMobileScreen = window.matchMedia("(max-width: 360px)").matches;
            const isSmallScreen = window.matchMedia("(max-width: 1366px)").matches;
            const isFullScreen = window.matchMedia("(max-width: 1920px)").matches;

            if ((window.scrollY > 2500 && isFullScreen) ||
                (window.scrollY > 2000 && isSmallScreen) ||
                (window.scrollY > 100 && isMobileScreen)) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };



        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className={styles.backToTop}>
            {isVisible && (
                <button onClick={scrollToTop} className={styles.backToTopButton}>
                    ↑
                </button>
            )}
        </div>
    );
};

export default BackToTop;