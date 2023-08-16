import { FormHelperText, InputAdornment, TextField } from '@mui/material';
import React from 'react';

function FormInput({ inputType, icon, placeholder, name, value, onChange, label }) {
    return (
        <div className='flex flex-col gap-1'>
            <FormHelperText>{label ? label : 'Add form label'}</FormHelperText>
            <TextField
                name={name}
                type={inputType}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='bg-[#F6F7FB] placeholder:text-paragraph-1'
                id="outlined-start-adornment"
                sx={{ width: '100%', "& fieldset": { border: 'none' }, borderRadius: '8px' }}
                InputProps={{
                    startAdornment:
                        <InputAdornment position="start">
                            {icon}
                        </InputAdornment>,
                }}
            />
        </div>
    );
}

export default FormInput;
