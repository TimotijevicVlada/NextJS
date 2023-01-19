// Custom react hook for checking window size, also working on resizing
import { useState, useEffect } from "react";

function useWindowSize() {
    const isWindowClient = typeof window === "object";

    const [windowSize, setWindowSize] = useState(isWindowClient ? window.innerWidth : undefined);

    useEffect(() => {
        // This function will be called on screen resize
        const setSize = () => {
            setWindowSize(window.innerWidth);
        };

        if (isWindowClient) {
            // Adding resize event listener
            window.addEventListener("resize", setSize);

            // Removing event listener
            return () => window.removeEventListener("resize", setSize);
        }
    }, [isWindowClient, setWindowSize]);

    return windowSize;
}

export default useWindowSize;