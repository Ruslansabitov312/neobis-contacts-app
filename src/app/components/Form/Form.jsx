import { Formik, Form, useField } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { editContact } from '../../redux/contactsSlice'
import './Form.sass'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  )
}

const CustomForm = ({
  id,
  city,
  country,
  email,
  firstName,
  lastName,
  phoneNumber,
  website,
}) => {
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  const submitHandle = () => {
    dispatch(editContact(...data, id))
  }
  console.log(data)
  return (
    <Formik
      initialValues={{
        firstname: firstName,
        lastname: lastName,
        city: city,
        country: country,
        phone: phoneNumber,
        email: email,
        website: website,
      }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .min(2, 'Минимум 2 символа.')
          .required('Пожалуйста, заполните это поле.'),
        lastname: Yup.string()
          .min(2, 'Минимум 2 символа.')
          .required('Пожалуйста, заполните это поле.'),
        city: Yup.string()
          .min(2, 'Минимум 2 символа.')
          .required('Пожалуйста, заполните это поле.'),
        country: Yup.string()
          .min(2, 'Минимум 2 символа.')
          .required('Пожалуйста, заполните это поле.'),
        phone: Yup.string()
          .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            'Недействительный номер телефона.'
          )
          .min(10, 'Введите в международном формате: +996 xxx xx xx xx.')
          .max(13, 'Не больше 13 символов.')
          .required('Пожалуйста, заполните это поле.'),
        email: Yup.string()
          .email('Неправильный email адрес!')
          .required('Пожалуйста, заполните это поле.'),
        website: Yup.string()
          .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Введите правильный URL.'
          )
          .required('Пожалуйста, заполните это поле.'),
      })}
      onSubmit={(values) => setData(values)}
    >
      <Form className='form'>
        <MyTextInput
          label='Имя' 
          id='firstname' 
          name='firstname' 
          type='text'
        />

        <MyTextInput
          label='Фамилия'
          id='lastname'
          name='lastname'
          type='text'
        />

        <MyTextInput 
          label='Город' 
          id='city' 
          name='city' 
          type='text' 
        />

        <MyTextInput 
          label='Страна' 
          id='country' 
          name='country' 
          type='text'
        />

        <MyTextInput
          label='Номер телефона'
          id='phone'
          name='phone'
          type='text'
        />

        <MyTextInput 
          label='Ваша почта' 
          id='email' 
          name='email' 
          type='email' 
        />

        <MyTextInput 
          label='Вебсайт' 
          id='website' 
          name='website' 
          type='text' 
        />

        <button type='submit' onClick={() => submitHandle()}>
          Сохранить
        </button>
      </Form>
    </Formik>
  )
}

export default CustomForm
