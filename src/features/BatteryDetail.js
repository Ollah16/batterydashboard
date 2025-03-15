import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useBatteryData } from "../context/BatteryContext";
import BatteryStatus from "./components/BatteryStatus";
import BatteryCapacity from "./components/BatteryCapacity"
import BatteryCharge from "./components/BatteryCharge"
import BatteryIconBase from "../assets/icons/batteryIcon/BatteryIconBase";

const BatteryDetail = ({ isDesktop }) => {
    const { isExpanded, setExpanded } = useBatteryData();

    const animationProps = useMemo(() => ({
        initial: {
            x: isDesktop ? "50%" : "0%",
            y: isDesktop ? "0%" : "50%",
            opacity: 0,
        },
        animate: {
            x: isDesktop ? (isExpanded ? "0%" : "50%") : "0%",
            y: isDesktop ? "0%" : (isExpanded ? "0%" : "50%"),
            opacity: 1,
        }
    }), [isExpanded, isDesktop]);

    return (
        <motion.div
            {...animationProps}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`flex-1 flex flex-col items-center w-full lg:w-5/12 lg:max-w-[45%] h-full cursor-pointer`}
            onClick={() => setExpanded(!isExpanded)}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="flex gap-10">
                    <BatteryStatus />
                    <BatteryCharge />
                </div>
                <BatteryIconBase />
                <BatteryCapacity />
            </div>
        </motion.div >
    );
};

export default BatteryDetail;
