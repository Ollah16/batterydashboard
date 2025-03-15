import React from 'react'

const BatteryHealth = () => {
    return (
        <div className="flex flex-col w-5/12 items-center gap-1 justify-center border-2 p-3 rounded-lg shadow-md shadow-softGreen dark:shadow-tealPrimary border-softGreen dark:border-tealPrimary">
            <p className="text-sm font-semibold">Battery Health</p>
            <p className="text-4xl font-bold text-tealPrimary">85.2%</p>
        </div>)
}

export default BatteryHealth