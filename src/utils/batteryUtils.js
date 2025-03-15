export const getBatteryFillHeight = (chargeLevel, innerHeight) => {
    return (chargeLevel / 100) * innerHeight;
};

export const getBatteryY = (fillHeight, innerHeight) => {
    return 20 + (innerHeight - fillHeight);
};

export const getBatteryColor = (chargeLevel) => {
    if (chargeLevel >= 75) return "#4CAF50";
    if (chargeLevel >= 50) return "#259876";
    if (chargeLevel >= 25) return "#FFB300";
    return "#F44336";
};
