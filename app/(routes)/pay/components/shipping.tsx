import { Checkbox } from '@/components/ui/checkbox';
import React, { useState } from 'react';

interface ShippingMethodProps {
    options: {
        name: string;
        value: number;
    }[];
    value: string | null;
    onChange: (value: string | null) => void;
}

const ShippingMethod: React.FC<ShippingMethodProps> = ({ options, value, onChange }) => {
    return (
        <div className="space-y-4">
            {options.map((option) => (
                <div
                    key={option.name}
                    className="flex items-center px-3 py-4 rounded-md border gap-x-4"
                >
                    <Checkbox
                        checked={value === option.name}
                        onCheckedChange={(isChecked) => {
                            onChange(isChecked ? option.name : null)
                            console.log(option.name)
                        }
                        }
                    />
                    <p>
                        {option.name}
                        {option.value !== 0 && `: ${option.value}`}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ShippingMethod;
