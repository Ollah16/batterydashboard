import React from 'react'
import { useBatteryData } from '../../context/BatteryContext';

const BatteryStatus = () => {
    const { batteryData: { chargeLevel, status } } = useBatteryData();

    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-5xl font-extrabold mb-5 text-tealPrimary">{chargeLevel}%</p>
            <p className="m-0 text-xs font-semibold tracking-tight">Charging Status</p>
            <p className="m-0 font-semibold text-lg text-softGreen dark:text-limeAccent leading-none">{status}</p>
        </div>
    )
}

export default BatteryStatus