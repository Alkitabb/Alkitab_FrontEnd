import { FormHelperText, InputAdornment, TextField } from '@mui/material';
import React from 'react';

function FormInput({ inputType, icon, placeholder, name, value, onChange, label, className }) {
    return (
        <div className='flex flex-col'>
            <TextField
                name={name}
                type={inputType}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${className === "error" ? 'outline outline-stop' : ''} bg-[#F6F7FB] placeholder:text-paragraph-1`}
                id="outlined-start-adornment"
                sx={{ width: '100%', "& fieldset": { border: "none" }, borderRadius: '8px' }}
                InputProps={{
                    startAdornment:
                        <InputAdornment position="start">
                            {icon}
                        </InputAdornment>,
                }}
            />
            <FormHelperText>{label ? label : null}</FormHelperText>
        </div>
    );
}

export default FormInput;
