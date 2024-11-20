// ** React Imports
import { useState } from 'react'

// ** Modules Imports
import { useForm } from 'react-hook-form'
import clsx from 'clsx'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import YupPassword from 'yup-password'

// ** Source code Imports
import Modal from '@core/components/modal'
import { useAuth } from '@core/hooks/useAuth'

YupPassword(yup)

const schema = yup.object().shape({
  login: yup
    .string()
    .email('Введите валидный email')
    .required('Обязательное поле'),
  oldPassword: yup
    .string()
    .required('Обязательное поле'),
  newPassword1: yup
    .string()
    .test(
      'test-new-password-length',
      'Пароль слишком короткий',
      (value) => {
        if (value) return value.length >= 8

        return true
      }
    )
    .test(
      'test-new-password-latin',
      'Пароль должен содержать латинские буквы',
      (value) => {
        if (value) return /[a-zA-Z]/.test(value)

        return true
      }
    )
    .test(
      'test-new-password-numbers',
      'Пароль должен содержать цифры',
      (value) => {
        if (value) return /[0-9]/.test(value)

        return true
      }
    )
    .test(
      'test-new-password-symbols',
      'Пароль должен содержать специальные символы ! @ # $ % ^ & *',
      (value) => {
        if (value) return /[!@#$%^&*]/.test(value)

        return true
      }
    ),
  newPassword2: yup
    .string()
    .test(
      'test-confirm-password',
      'Обязательное поле',
      (value, context) => {
        if (context.parent.newPassword1) return value

        return true
      }
    )
    .oneOf([yup.ref('newPassword1'), null], 'Пароли должны совпадать')
})

const PasswordChangeModal = ({isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const { user, update } = useAuth() 
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)

    try {
      await update({
        _id: user._id,
        accountStatus: user.accountStatus,
        firstName: user.firstName,
        lastName: user.lastName,
        patronymicName: user.patronymicName,
        staffManage: user.staffManage,
        customFields: user.customFields,
        ...data,
      })

      setLoading(false)

      onClose()
    } catch (err) {
      setLoading(false)

      setError(
        'root.serverError',
        { type: 'custom', message: err.message }
      )
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="g-modal__header">Изменение пароля</h3>
      <p className="g-modal__text">Убедитесь, что ваш новый пароль содержит:</p>
      <ul className="password-change__instructions">
        <li>не менее 8 знаков латинского алфавита;</li>
        <li>заглавные и строчные буквы;</li>
        <li>цифры;</li>
        <li>специальные символы  ! @ # $ % ^ & *.</li>
      </ul>
      <form className="g-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="g-form__row">
          <div className="g-form__column password-change__column">
            <label className="g-form__label m-required">Адрес электронной почты</label>
            <input {...register('login')} type="email" className="g-form__input" placeholder="Введите адрес электронной почты" />
            {!!errors.login && (<div className="g-form__validation-error">{errors.login?.message}</div>)}
          </div>
          <div className="g-form__column password-change__column m-right">
            <label className="g-form__label">Текущий пароль</label>
            <input {...register('oldPassword')} type="password" className="g-form__input" placeholder="Введите текущий пароль" />
            {!!errors.oldPassword && (<div className="g-form__validation-error">{errors.oldPassword?.message}</div>)}
            <div className="password-change__recovery">
              <a href="/" className="g-link">Забыли пароль?</a>
            </div>
          </div>
        </div>
        <div className="g-form__row">
          <div className="g-form__column password-change__column">
            <label className="g-form__label">Новый пароль</label>
            <input {...register('newPassword1')} type="password" className="g-form__input" placeholder="Введите новый пароль" />
            {!!errors.newPassword1 && (<div className="g-form__validation-error">{errors.newPassword1?.message}</div>)}
          </div>
          <div className="g-form__column password-change__column m-right">
            <label className="g-form__label">Введите новый пароль</label>
            <input {...register('newPassword2')} type="password" className="g-form__input" placeholder="Введите текущий пароль" />
            {!!errors.newPassword2 && (<div className="g-form__validation-error">{errors.newPassword2?.message}</div>)}
          </div>
        </div>
        <div>
        {errors?.root?.serverError && (
          <div className="g-form__validation-error">
            {errors?.root?.serverError?.message}
          </div>
        )}
        </div>
        <div className="g-form__row password-change__buttons">
          <div className="g-button-group">
            <button type="button" className="g-button" onClick={onClose}>Отмена</button>
            <button
              className={clsx(
                'g-button',
                'm-blue',
                { 'disabled': loading }
              )}
              type="submit"
            >
              Сохранить
            </button>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default PasswordChangeModal