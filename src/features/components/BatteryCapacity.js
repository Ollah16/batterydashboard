import React from 'react'
import { useBatteryData } from '../../context/BatteryContext';

const BatteryCapacity = () => {
    const { batteryData: { capacity } } = useBatteryData();

    return (
        <div className="text-center -mt-10 mb-0">
            <p className="m-0 text-xs font-semibold tracking-tight">Battery Capacity</p>
            <p className="m-0 font-semibold text-lg text-softGreen dark:text-limeAccent leading-none">{capacity}</p>
        </div>
    )
}

export default BatteryCapacity