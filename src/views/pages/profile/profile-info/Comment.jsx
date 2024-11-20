// ** React Imports
import { useState, useEffect } from 'react'

// ** Modules imports
import { useForm } from 'react-hook-form'
import clsx from 'clsx'

const Comment = ({ user, onUpdate }) => {
  const [loading, setLoading] = useState(false)

  const { setValue, register, handleSubmit } = useForm({
    initialValue: {
      customFields: {
        'Комментарий': user?.customFields?.['Комментарий']
      }
    }
  })

  useEffect(() => {
    setValue('customFields.Комментарий', user?.customFields?.['Комментарий'])
  }, [user])

  const onSubmit = async (value) => {
    try {
      setLoading(true)

      await onUpdate({
        customFields: {
          ...user.customFields,
          ...value.customFields
        }
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="profile-info__row">
        <div className="profile-info__cell">
          <h5 className="profile-info__row-name">Комментарий</h5>
        </div>
        <div className="profile-info__cell">
          <textarea
            className="g-textarea profile-info__textarea"
            placeholder="Напишите свои пожелания по работе."
            {...register('customFields.Комментарий')}
          />
        </div>
      </div>
      <div className="profile-info__row m-submit">
        <button
          className={clsx(
            'g-button',
            { 'disabled': loading }
          )}
          type="submit"
        >
          Опубликовать
        </button>
      </div>
    </form>
  )
}

export default Comment