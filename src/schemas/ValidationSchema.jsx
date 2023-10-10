import * as yup from 'yup'

// At least one uppercase letter || At least one lowercase letter || At least one digit (number) || At least one special character (!@#$%&) || No whitespace characters || Minimum length of 12 characters.
const passwordRule = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-{}[\]|:;"'<>,.?/~])(?!.*\s).{8,}$/

// Registration Page Schema ==========>>>>>>>>>>
export const signUpSchema = yup.object().shape(
    {
        businessName:
            yup.string().required("Required").max(15).min(5),

        // lastName:
        //     yup.string().required("Required").max(15, "Must be 15 or less").min(5),

        email:
            yup.string().email("Must be a valid email").required("Required"),

        password:
            yup.string().min(5).matches(passwordRule, "Your password is as weak as your strokes... smh").required("Required"),

        confirmPassword:
            yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Required")
    }
);

// Login Schema ==========>>>>>>>>>>
export const loginSchema = yup.object().shape(
    {
        email:
            yup.string().email().required("Enter your registered email"),
            
        password:
            yup.string().required("Required").min(5)
    }
);