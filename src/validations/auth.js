
import { yup } from '@/plugins/yup-config.js';

export default function schemaLogin() {
  return yup.object().shape({
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().label('Password'),
  });
}
