import React from "react";

interface TimeUnitProps {
  value: number;
  label: string;
}

export function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center mx-4">
      <div className="bg-pink-100 rounded-lg p-4 min-w-[80px] text-center">
        <span className="text-3xl font-bold text-pink-600">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-gray-600 mt-2 text-sm">{label}</span>
    </div>
  );
}