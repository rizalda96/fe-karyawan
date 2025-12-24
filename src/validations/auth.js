
import { yup } from '@/plugins/yup-config.js';

export default function schemaLogin() {
  return yup.object().shape({
    username: yup.string().required().label('Username'),
    password: yup.string().required().label('Password'),
  });
}
