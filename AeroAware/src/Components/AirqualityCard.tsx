import React from "react";

type AirQualityCardProps = {
  label: string;
  value: number | string;
  unit: string;
  description?: string;
};

const AirQualityCard: React.FC<AirQualityCardProps> = ({
  label,
  value,
  unit,
  description,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white text-center">
      <h2 className="text-xl font-semibold">{label}</h2>
      <p className="text-3xl font-bold">
        {value} {unit}
      </p>
      {description && <p className="text-gray-600 mt-2">{description}</p>}
    </div>
  );
};

export default AirQualityCard;
