import React from 'react'
import { useBatteryData } from '../../context/BatteryContext';
import { ChargeIcon } from '../../assets/icons/ChargeIcon'

const BatteryCharge = () => {
    const { batteryData: { chargeLevel } } = useBatteryData();

    return (
        <div className="flex flex-col justify-center items-center">
            <ChargeIcon />
            <p className="mt-5 text-xs font-semibold tracking-tight">Current Charge Level</p>
            <p className="m-0 font-semibold text-lg text-[#84DD89] dark:text-[#D0EF38] leading-none">{chargeLevel}%</p>
        </div>
    )
}

export default BatteryCharge