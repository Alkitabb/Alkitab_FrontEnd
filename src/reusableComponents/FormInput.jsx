import * as React from 'react';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

export default function CustomizedInputsStyleOverrides({
    inputType,
    icon,
    name,
    value,
    onChange,
    label,
    className,
    helperText,
}) {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const outerTheme = useTheme();

    // Determine the border color based on the className prop
    const borderColor = className === 'error' ? '#E74C3C' : '#E0E3E7';

    // Determine the background color based on whether the input has a value or not
    const backgroundColor = className === 'error' && value ? '#FDEDEC' : (value ? '#F8F9F9' : 'transparent');


    const customTheme = (outerTheme) =>
        createTheme({
            palette: {
                mode: outerTheme.palette.mode,
            },
            components: {
                MuiTextField: {
                    styleOverrides: {
                        root: {
                            '--TextField-brandBorderColor': borderColor,
                            '--TextField-brandBorderHoverColor': '#B2BAC2',
                            '--TextField-brandBorderFocusedColor': '#6F7E8C',
                            backgroundColor: backgroundColor, // Add background color
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

    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
                label={label}
                name={name}
                type={inputType === 'password' ? (showPassword ? 'text' : 'password') : inputType}
                value={value}
                onChange={onChange}
                autoComplete="on"
                fullWidth
                InputProps={{
                    startAdornment: icon ? (
                        <InputAdornment position="start">{icon}</InputAdornment>
                    ) : null,
                    endAdornment:
                        inputType === 'password' && (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                }}
                helperText={helperText}
            />
        </ThemeProvider>
    );
}
