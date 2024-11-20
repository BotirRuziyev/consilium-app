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
  FormControlLabel,
  Checkbox,
  Grid,
  Link
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

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
  email: yup
    .string()
    .email('Введите валидный email')
    .required('Обязательное поле'),
  password: yup
    .string()
    .required('Обязательное поле')
})

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const { login } = useAuth()
  const [loading, setLoading] = useState(false)

  const onSubmit = (data) => {
    setLoading(true)
    login(
      data,
      () => setLoading(false),
      (err) => {
        setError('root.serverError', { type: 'custom', message: err.message })
        setLoading(false)
      }
    )
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Авторизация
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('email')}
            type="email"
            margin="normal"
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            {...register('password')}
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
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
            Войти
          </LoadingButton>
          <Grid container>
            <Grid item>
              <Link href="/registration" variant="body2">
                Нет аккаунта? Зарегистрируйтесь
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

export default Login
