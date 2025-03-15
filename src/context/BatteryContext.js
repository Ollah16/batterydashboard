import React, { createContext, useState, useContext, useMemo, useEffect, useCallback } from 'react';
import { generateMockBatteryData } from '../utils/api';

const BatteryContext = createContext(null);

export const BatteryProvider = ({ children }) => {

    const [isExpanded, setExpanded] = useState(false);
    const [batteryData, setBatteryData] = useState(generateMockBatteryData());

    const getEnergyData = useCallback(() => {
        setBatteryData(generateMockBatteryData());
    }, []);

    useEffect(() => {
        getEnergyData();
        const interval = setInterval(() => {
            getEnergyData();
        }, 60000);

        return () => clearInterval(interval);
    }, [getEnergyData]);

    const contextValue = useMemo(() => ({
        batteryData,
        isExpanded,
        setExpanded
    }), [batteryData, isExpanded]);

    return (
        <BatteryContext.Provider value={contextValue}>
            {children}
        </BatteryContext.Provider>
    );
};

export const useBatteryData = () => {
    return useContext(BatteryContext);
};
