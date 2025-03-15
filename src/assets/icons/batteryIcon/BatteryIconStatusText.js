const BatteryIconStatusText = ({ chargeLevel }) => (
    <text
        x="100"
        y="160"
        fontSize="40"
        fontWeight="bold"
        className="fill-tealPrimary"
        textAnchor="middle"
    >
        {chargeLevel}%
    </text>
);

export default BatteryIconStatusText;
