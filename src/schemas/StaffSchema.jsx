import * as yup from 'yup'


const addNewStaff = yup.object().shape({

    staffName: yup.string().max(15, "Must the 15 or less").required("Required"),

    staffEmail: yup.string().email("Must be a Valid email").required('Required'),

    staffPhoneNumber: yup.string().min(3).number()

})