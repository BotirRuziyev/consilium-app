// ** React Imports
import { useState } from 'react'
import { useForm } from 'react-hook-form'

// ** MUI Imports
import { 
  Typography,
  TextField,
  Box,
  Container,
  Avatar,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import FormControl from '@mui/material/FormControl'

// ** Hooks
import { useAuth } from '@core/hooks/useAuth'

// ** YUP Imports
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(yup) // extend yup

// ** Source code Imports
import Copyright from '@layouts/components/copyright'

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('Обязательное поле'),
  lastName: yup
    .string()
    .required('Обязательное поле'),
  login: yup
    .string()
    .email('Введите валидный email')
    .required('Обязательное поле'),
  password: yup
    .string()
    .required('Обязательное поле'),
  passwordConfirmation: yup
    .string()
    .required('Обязательное поле')
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
  customFields: yup.object().shape({
    middleName: yup
    .string()
    .required('Обязательное поле'),
    Должность: yup.string().required('Обязательное поле'),
    'Табельный номер': yup.number().required('Обязательное поле')
  })
})

const Registration = () => {
  const { 
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) })
  const auth = useAuth()
  const [loading, setLoading] = useState(false)
  const [position, setPosition] = useState('')

  const onSubmit = (data) => {
    setLoading(true)
    auth.register(
      data,
      () => setLoading(false),
      (err) => {
        setError('root.serverError', { type: 'custom', message: err.message })
        setLoading(false)
      }
    )
  }

  const handlePositionChange = (event) => {
    setPosition(event.target.value)
  }

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <AccountCircleOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('firstName')}
            type="text"
            margin="normal"
            fullWidth
            label="Имя"
            name="firstName"
            autoFocus
          />
          <TextField
            {...register('lastName')}
            type="text"
            margin="normal"
            fullWidth
            label="Фамилия"
            name="lastName"
          />
          <TextField
            {...register('customFields.middleName')}
            type="text"
            margin="normal"
            fullWidth
            label="Отчество"
            name="customFields.middleName"
          />
          <TextField
            {...register('customFields[Табельный номер]')}
            type="text"
            margin="normal"
            fullWidth
            label="Табельный номер"
            name="customFields[Табельный номер]"
          />
          <FormControl
            fullWidth
            margin="normal">
            <InputLabel id="position-label">Должность</InputLabel>
            <Select
              {...register('customFields.Должность')}
              labelId="position-label"
              id="position-label"
              label="Должность"
              name="customFields.Должность"
              fullWidth
              value={position}
              onChange={handlePositionChange}
            >
              <MenuItem value="Главный врач">Главный врач</MenuItem>
              <MenuItem value="Заместитель главного врача">Заместитель главного врача</MenuItem>
              <MenuItem value="Главный фельдшер">Главный фельдшер</MenuItem>
              <MenuItem value="Начальник управления врач-методист">Начальник управления врач-методист</MenuItem>
              <MenuItem value="Заведующий подстанцией">Заведующий подстанцией</MenuItem>
              <MenuItem value="Старший фельдшер подстанции">Старший фельдшер подстанции</MenuItem>
              <MenuItem value="Старший врач подстанции">Старший врач подстанции</MenuItem>
              <MenuItem value="Врач скорой медицинской помощи">Врач скорой медицинской помощи</MenuItem>
              <MenuItem value="Фельшер скорой медицинской помощи">Фельшер скорой медицинской помощи</MenuItem>
              <MenuItem value="Медицинская сестра">Медицинская сестра</MenuItem>
              <MenuItem value="Врач - психиатр">Врач - психиатр</MenuItem>
              <MenuItem value="Врач анестезиолог-реаниматолог">Врач анестезиолог-реаниматолог</MenuItem>
              <MenuItem value="Медицинская сестра - анестезист">Медицинская сестра - анестезист</MenuItem>
              <MenuItem value="Диспетчер дежурной комнаты">Диспетчер дежурной комнаты</MenuItem>
              <MenuItem value="Диспетчер подстанции">Диспетчер подстанции</MenuItem>
              <MenuItem value="Медработник по предрейсовому осмотру">Медработник по предрейсовому осмотру</MenuItem>
              <MenuItem value="Заведующий отделом">Заведующий отделом</MenuItem>
              <MenuItem value="Врач отдела контроля качества">Врач отдела контроля качества</MenuItem>
              <MenuItem value="Заведующий учебного отдела">Заведующий учебного отдела</MenuItem>
              <MenuItem value="Врач скорой медицинской помощи">Врач скорой медицинской помощи</MenuItem>
              <MenuItem value="Старший фельдшер сектора медицинского обеспечения">Старший фельдшер сектора медицинского обеспечения</MenuItem>
            </Select>
          </FormControl>
          <TextField
            {...register('login')}
            type="email"
            margin="normal"
            fullWidth
            label="Email"
            name="login"
            autoComplete="email"
            error={!!errors.login}
            helperText={errors.login?.message}
          />
          <TextField
            {...register('password')}
            margin="normal"
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
          {...register('passwordConfirmation')}
            margin="normal"
            fullWidth
            name="passwordConfirmation"
            label="Подтверждение пароля"
            type="password"
            error={!!errors.passwordConfirmation}
            helperText={errors.passwordConfirmation?.message}
          />
          {errors?.root?.serverError && (
            <Typography sx={{ mb: 1 }} variant="body2" color="error.main">
              {errors?.root?.serverError?.message}
            </Typography>
          )}
          <LoadingButton
            sx={{ mb: 1 }}
            type="submit"
            fullWidth
            variant="contained"
            loading={loading}
          >
            Зарегистрироваться
          </LoadingButton>
        </form>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

export default Registration
