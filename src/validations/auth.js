
import { yup } from '@/plugins/yup-config.js';

export default function schemaLogin() {
  return yup.object().shape({
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().label('Password'),
  });
}

export const schemaForgetPassword = () => {
  return yup.object().shape({
    email: yup.string().required().email().label('Email'),
  });
}

export const schemaForgotPassword = () => {
  return yup.object().shape({
    password: yup.string().label('Password').min(8).required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-\/:-@\[-`{-~])[A-Za-z\d!-\/:-@\[-`{-~]{8,}$/, "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    confirmPassword: yup.string().label('Confirm Password').required().oneOf([yup.ref('password'), null], 'Passwords must match'),
  });
}
