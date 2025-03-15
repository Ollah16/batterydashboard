import React from 'react'

const BatteryUptime = () => {
    return (
        <div className="flex flex-col w-7/12 items-center gap-1 justify-center border-2 p-3 rounded-lg shadow-md shadow-softGreen dark:shadow-tealPrimary border-softGreen dark:border-tealPrimary">
            <p className="text-sm font-semibold">Battery Uptime</p>
            <p className="text-2xl font-bold text-tealPrimary">12:06:15:04</p>
            <p className="text-xs">Days : Hrs : Mins : Secs</p>
        </div>
    )
}

export default BatteryUptime