import { motion } from "framer-motion";
import { useMemo } from "react";
import BatteryIconOutline from "./BatteryIconOutline";
import BatteryIconFill from "./BatteryIconFill";
import BatteryIconStatusText from "./BatteryIconStatusText";
import BatteryIconCap from "./BatteryIconCap";
import { getBatteryColor, getBatteryFillHeight, getBatteryY } from "../../../utils/batteryUtils";
import { useBatteryData } from "../../../context/BatteryContext";

const BatteryIconBase = () => {
    const { batteryData: { chargeLevel } } = useBatteryData();

    const safeChargeLevel = Math.max(0, Math.min(100, Number(chargeLevel) || 0));

    const batteryColor = useMemo(() => getBatteryColor(safeChargeLevel), [safeChargeLevel]);
    const batteryInnerHeight = 260;
    const fillHeight = getBatteryFillHeight(safeChargeLevel, batteryInnerHeight);
    const fillY = getBatteryY(fillHeight, batteryInnerHeight);

    const isFullCharge = safeChargeLevel === 100;

    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
        >
            <svg
                viewBox="0 0 200 300"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="350"
                className="flex-shrink-0"
                aria-label="Battery Icon"
            >
                <BatteryIconCap />
                <BatteryIconOutline />

                <BatteryIconFill
                    fillHeight={fillHeight}
                    fillY={fillY}
                    batteryColor={batteryColor}
                    isFullCharge={isFullCharge}
                />

                <BatteryIconStatusText chargeLevel={safeChargeLevel} />
            </svg>
        </motion.div>
    );
};

export default BatteryIconBase;
