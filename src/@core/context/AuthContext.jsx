// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Modules Imports
import Cookies from 'js-cookie'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  token: null,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  impersonation: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  checkRegister: () => Promise.resolve(),
  register: () => Promise.resolve(),
  forgot: () => Promise.resolve(),
  forgotCheckCode: () => Promise.resolve(),
  forgotChangePassword: () => Promise.resolve(),
  update: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = Cookies.get(authConfig.storageTokenKeyName)
      if (storedToken) {
        setLoading(true)
        axios.defaults.headers.common.Authorization = `${authConfig.headerTokenKeyName} ${storedToken}`

        await axios
          .post(authConfig.meEndpoint, {}, {})
          .then(async response => {
            const { data } = response.data
            setLoading(false)
            setUser({ ...data })
            setToken(storedToken)
          })
          .catch(() => {
            setUser(null)
            setToken(null)
            setLoading(false)
          })
      } else {
        setUser(null)
        setToken(null)
        setLoading(false)
      }
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleImpersonation = (params, errorCallback) => {
    axios
      .post(authConfig.impersonationEndpoint, { token: params.token })
      .then(async (response) => {
        const { data } = response.data

        Cookies.set(authConfig.storageTokenKeyName, data.token, { expires: params.rememberMe ? 90 : undefined })

        axios.defaults.headers.common.Authorization = `${authConfig.headerTokenKeyName} ${data.token}`

        setUser({ ...data })
        setToken(data.token)
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogin = (params, resolveCallback, errorCallback) => {
    axios
      .post(authConfig.loginEndpoint, { login: params.email.trim(), password: params.password })
      .then((response) => {
        const { data } = response.data
        Cookies.set(authConfig.storageTokenKeyName, data.token, { expires: params.rememberMe ? 90 : undefined })

        axios.defaults.headers.common.Authorization = `${authConfig.headerTokenKeyName} ${data.token}`

        if (resolveCallback) resolveCallback(response)

        setUser({ ...data })
        setToken(data.token)
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleUpdate = (params) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.put(authConfig.updateEndpoint, params)

        const { data } = response.data

        setUser({ ...data })

        resolve(data)
      } catch (err) {
        reject(err)
      }
    })
  }

  const handleLogout = () => {
    setUser(null)
    setToken(null)
    Cookies.remove(authConfig.storageTokenKeyName)
    // router.push('/login')
  }

  const handleRegister = (params, errorCallback, resolveCallback) => {
    axios
      .post(authConfig.registerEndpoint, {
        firstName: params.firstName,
        lastName: params.lastName,
        login: params.login.trim(),
        password: params.password,
        customFields: params.customFields,
        captchaToken: params.captchaToken
      })
      .then(() => {
        handleLogin(
          { email: params.email, password: params.password, rememberMe: true },
          resolveCallback,
          errorCallback
        )
      })
      .catch((err) => (errorCallback ? errorCallback(err) : null))
  }

  const handleCheckRegister = (
    { login, captchaToken },
    resolveCallback,
    errorCallback
  ) => {
    axios
      .post(authConfig.checkRegisterEndpoint, {
        login: login.trim(),
        captchaToken
      })
      .then(() => {
        if (resolveCallback) resolveCallback()
      })
      .catch((err) => (errorCallback ? errorCallback(err) : null))
  }

  const handleForgot = (
    params,
    successCallback,
    errorCallback
  ) => {
    axios
      .post(authConfig.forgotRequestEndpoint, { email: params.email })
      .then((resp) => (successCallback ? successCallback(resp) : null))
      .catch((err) => (errorCallback ? errorCallback(err) : null))
  }

  const handleForgotCheckCode = (
    params,
    successCallback,
    errorCallback
  ) => {
    axios
      .post(authConfig.forgotCheckCodeEndpoint(params.requestId), { code: params.code })
      .then((resp) => (successCallback ? successCallback(resp) : null))
      .catch((err) => (errorCallback ? errorCallback(err) : null))
  }

  const handleForgotChangePassword = (
    params,
    successCallback,
    errorCallback
  ) => {
    axios
      .put(authConfig.forgotCheckCodeEndpoint(params.requestId), {
        newPassword1: params.newPassword1,
        newPassword2: params.newPassword2
      })
      .then((resp) => (successCallback ? successCallback(resp) : null))
      .catch((err) => (errorCallback ? errorCallback(err) : null))
  }

  const values = {
    user,
    loading,
    token,
    setUser,
    setLoading,
    impersonation: handleImpersonation,
    login: handleLogin,
    logout: handleLogout,
    checkRegister: handleCheckRegister,
    register: handleRegister,
    forgot: handleForgot,
    forgotCheckCode: handleForgotCheckCode,
    forgotChangePassword: handleForgotChangePassword,
    update: handleUpdate
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
