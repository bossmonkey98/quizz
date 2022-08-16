import { Box } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from 'react'

export const SelectField = ({ label,formData,setFormData,options }) => {
    const [opt ,setOpt] = useState()
    return (
        <Box mt={3} width="100%">
            <FormControl required fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select
                    value={opt}
                    label={label}
                    onChange={(e) => {
                        e.preventDefault()
                        setOpt(e.target.value)
                        if (label === "Category") setFormData({ ...formData, category: e.target.value })
                        if (label === "Difficulty") setFormData({ ...formData, difficulty: e.target.value.toLowerCase() })
                }}
                >
                    {options.map((i) => (
                        <MenuItem value={i} key={i.id}>
                            {i}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};
