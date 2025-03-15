export function generateMockBatteryData() {
    const chargeLevel = Math.floor(Math.random() * 101);
    return {
        capacity: "5000mAh",
        chargeLevel,
        status: chargeLevel < 100 ? "Charging" : "Not Charging",
        chargeHistory: generateMockChargeHistory(chargeLevel),
    };
}

export function generateMockChargeHistory(currentCharge) {
    let history = [];
    let charge = 0;
    for (let hour = 0; hour <= 12; hour++) {
        charge = Math.min(currentCharge, charge + Math.floor(Math.random() * 20));
        history.push({ time: `${hour}:00`, charge });
    }
    return history;
}
