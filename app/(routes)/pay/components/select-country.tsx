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

interface SelectCountryProps {
    value: string;
    onChange: (value: string | null) => void
}

const SelectCountry: React.FC<SelectCountryProps> = ({ value, onChange }) => {
    return (
        <Select defaultValue={value} onValueChange={(value) => onChange(value)}>
            <SelectTrigger>
                <SelectValue placeholder='Seleccionar pais' />
            </SelectTrigger>
            <SelectContent>

                <SelectGroup>
                    <SelectItem value='costarica' className=' cursor-pointer'>
                        Costa Rica
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SelectCountry