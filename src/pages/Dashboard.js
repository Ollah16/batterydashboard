import React from 'react';
import Button from '../components/ui/Button';
import { useThemeContext } from '../context/ThemeContext';
import { LightModeIcon } from '../assets/icons/LightModeIcon';
import { DarkModeIcon } from '../assets/icons/DarkModeIcon';
import BatteryCard from '../features/BatteryCard';

const Dashboard = () => {
    const { isDarkMode, toggleTheme } = useThemeContext();

    return (
        <div className={`min-h-dvh flex items-center justify-center transition-colors duration-300`}>
            <div className="w-full">
                <div className="flex justify-end mb-4 absolute top-5 right-5">
                    <Button
                        onClick={toggleTheme}
                        className="relative px-4 py-2rounded-lg group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-softGreen dark:focus:ring-tealPrimary transform hover:scale-105 hover:bg-gray-600/10 z-10"
                        aria-label={`Switch to ${isDarkMode ? 'Light Mode' : 'Dark Mode'}`}
                    >
                        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                        <span className="absolute bottom-full inline-block mb-2 left-1/2 w-full transform translate-y-32 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded p-1">
                            {`Switch to ${isDarkMode ? 'Light Mode' : 'Dark Mode'}`}
                        </span>
                    </Button>
                </div>
                <BatteryCard />
            </div>
        </div>
    );
};

export default Dashboard;
