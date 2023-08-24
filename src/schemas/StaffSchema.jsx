import * as yup from 'yup'


export const addNewStaff = yup.object().shape({

    staffName: yup.string().min(3).max(15, "Must the 15 or less").required("Required"),

    staffEmail: yup.string().email("Must be a Valid email").required('Required'),

    staffPhoneNumber: yup.string().min(3).required("Add a contact number"),

    staffCity: yup.string().required("Required").min(3, "Value must be 3 or more"),

    staffStreet: yup.string().required("Required").min(3, "Value must be 3 or more"),

    staffCountry: yup.string().required("Required").min(3, "Value must be 3 or more"),

})