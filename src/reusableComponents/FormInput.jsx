import * as React from 'react';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { InputAdornment } from '@mui/material';

const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        // '--TextField-brandBorderColor': `${className === "error" ? "#fefefe" : '#E0E3E7'}`,
                        '--TextField-brandBorderColor': '#E0E3E7',
                        '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderFocusedColor': '#6F7E8C',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: 'var(--TextField-brandBorderColor)',
                    },
                    root: {
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderHoverColor)',
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    });

export default function CustomizedInputsStyleOverrides({ inputType, icon, placeholder, name, value, onChange, label, className }) {
    const outerTheme = useTheme();

    return (

        <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
                label={label}
                name={name}
                type={inputType}
                value={value}
                onChange={onChange}
                autoComplete='on'
                fullWidth
                // className='bg-background'
                // InputProps={{
                //     startAdornment: icon ?
                //         <InputAdornment position="start">
                //             {icon}
                //         </InputAdornment> : null,
                // }}
            />
        </ThemeProvider>
    );
}