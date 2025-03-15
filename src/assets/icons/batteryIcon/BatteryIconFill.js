const BatteryIconFill = ({ fillHeight, fillY, batteryColor, isFullCharge }) => (
    <>
        {fillHeight > 0 && (
            isFullCharge ? (
                <rect
                    x="15"
                    y={fillY + 5}
                    width="170"
                    height={fillHeight - 10}
                    rx="8"
                    ry="8"
                    fill={batteryColor}
                />
            ) : (
                <path
                    d={`M 15 ${fillY} H 185 V 265 Q 185 275 175 275 H 25 Q 15 275 15 265 V ${fillY} Z`}
                    fill={batteryColor}
                />
            )
        )}
    </>
);

export default BatteryIconFill;
