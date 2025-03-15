import React, { memo, useCallback, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { useThemeContext } from '../context/ThemeContext';
import { useBatteryData } from '../context/BatteryContext';
import BatteryHealth from './components/BatteryHealth';
import BatteryUptime from './components/BatteryUptime';

const BatteryGraph = memo(({ isDesktop }) => {
    const { isExpanded, batteryData } = useBatteryData();
    const { isDarkMode } = useThemeContext();
    const axisFill = useMemo(() => (isDarkMode ? "#fff" : "#000000"), [isDarkMode]);
    const strokeFill = useMemo(() => (isDarkMode ? "#fff" : "#000000"), [isDarkMode]);

    const CustomTooltip = useCallback(({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-900 text-white p-3 rounded-lg shadow-xl opacity-90">
                    <p className="text-sm">{`Time: ${label}`}</p>
                    <p className="font-semibold text-xl">{`Charge: ${payload[0].value}%`}</p>
                </div>
            );
        }
        return null;
    }, []);

    const animationProps = React.useMemo(() => ({
        initial: {
            opacity: 0,
            x: isDesktop ? (isExpanded ? "0%" : "50%") : "0%",
            y: isDesktop ? "0%" : (isExpanded ? "0%" : "50%"),
            height: isDesktop ? "auto" : (isExpanded ? "320px" : "0px"),
        },
        animate: {
            opacity: isExpanded ? 1 : 0,
            x: isDesktop ? (isExpanded ? "0%" : "50%") : "0%",
            y: isDesktop ? "0%" : (isExpanded ? "0%" : "50%"),
            height: isDesktop ? "auto" : (isExpanded ? "100%" : "0px"),
        },
    }), [isDesktop, isExpanded]);

    return (
        <motion.div
            {...animationProps}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="position-relative overflow-hidden w-full lg:w-7/2 overflow-x-auto flex-1 h-full"
        >
            <div className='flex gap-10 justify-between mb-7'>
                <BatteryHealth />
                <BatteryUptime />
            </div>

            <ResponsiveContainer width="100%" height={351} className="-ml-10">
                <LineChart data={batteryData.chargeHistory}>
                    <rect rx="2" x={isDesktop ? "23%" : "21%"} y="10" width="10" height="30" className='fill-limeAccent' />
                    <text
                        x="25%"
                        y={20}
                        textAnchor="start"
                        dominantBaseline="middle"
                        fontSize={16}
                        fontWeight="bold"
                        fill={strokeFill}
                    >
                        Battery Charge History <br />
                    </text>
                    <text
                        x="25%"
                        y={38}
                        textAnchor="start"
                        fontSize={12}
                        className='fill-gray-400'
                    >
                        Last 12 Hours
                    </text>
                    <XAxis dataKey="time" stroke={strokeFill} tick={{ fontSize: 12, fontWeight: 400, fill: axisFill }} />
                    <YAxis domain={[0, 100]} stroke={strokeFill} tick={{ fontSize: 12, fontWeight: 400, fill: axisFill }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="charge"
                        stroke="#4CAF80"
                        strokeWidth={3}
                        dot={{ r: 6 }}
                        activeDot={{ r: 8, stroke: '#fff', strokeWidth: 2 }}
                        animationDuration={1000}
                    />
                </LineChart>
            </ResponsiveContainer>
        </motion.div >
    );
});

export default BatteryGraph;
