import React from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const provinces = ['San José', 'Alajuela', 'Heredia', 'Cartago', 'Limon', 'Puntarenas', 'Guanacaste']

interface SelectProvinceProps {
    value: string;
    onChange: (value: string | null) => void
}

const SelectProvince: React.FC<SelectProvinceProps> = ({ value, onChange }) => {
    return (
        <Select value={value} onValueChange={(value) => onChange(value)}>
            <SelectTrigger>
                <SelectValue placeholder='Seleccionar provincia' />
            </SelectTrigger>
            <SelectContent>

                <SelectGroup>
                    {provinces.map((province) => (
                        <SelectItem key={province} value={province} className=' cursor-pointer'>
                            {province}
                        </SelectItem>
                    ))}

                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SelectProvince