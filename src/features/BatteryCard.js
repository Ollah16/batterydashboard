import React, { useEffect, useState } from "react";
import BatteryGraph from "./BatteryGraph";
import BatteryDetail from "./BatteryDetail";

const BatteryCard = () => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    const debounce = (fn, delay) => {
        let timeout;
        return function (...args) {
            clearTimeout(timeout)
            timeout = setTimeout(() => fn(...args), delay)
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        const debounceResize = debounce(handleResize, 200);
        window.addEventListener("resize", debounceResize);
        return () => window.removeEventListener("resize", debounceResize);
    }, []);

    return (
        <div className="w-full mx-auto p-6">
            <div className="relative flex items-center overflow-hidden w-full flex-col gap-y-10 md:flex-row min-h-auto md:min-h-auto md:h-auto">
                <BatteryDetail isDesktop={isDesktop} />
                <BatteryGraph isDesktop={isDesktop} />
            </div>
        </div>
    );
};

export default BatteryCard;
