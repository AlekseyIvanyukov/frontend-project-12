import { object, string, ref } from 'yup';

export const channelNamesShema = (channelNames) => object({
  name: string()
    .min(3, 'не менее 3 символов')
    .max(20, 'не более 20 символов')
    .notOneOf(channelNames, 'Такое имя уже есть'),
});

const validateYupSchema = () => object().shape({
  username: string()
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов')
    .required('Поле обязательно'),
  password: string()
    .min(6, 'Минимум 6 символов')
    .required('Поле обязательно'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Пароли должны совпадать')
    .required('Поле обязательно'),
});

export default validateYupSchema;