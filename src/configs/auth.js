import apiConfig from './api'

export default {
  meEndpoint: `${apiConfig.apiEndpoint}/api/${apiConfig.space}/auth/me`,
  loginEndpoint: `${apiConfig.apiEndpoint}/api/${apiConfig.space}/auth/login`,
  impersonationEndpoint: `${apiConfig.apiEndpoint}/api/${apiConfig.space}/auth/impersonation`,
  checkRegisterEndpoint: `${apiConfig.apiEndpoint}/api/${apiConfig.space}/auth/check`,
  registerEndpoint: `${apiConfig.apiEndpoint}/api/${apiConfig.space}/auth/register`,
  forgotRequestEndpoint: `${apiConfig.apiEndpoint}/api/${apiConfig.space}/auth/forgot`,
  forgotCheckCodeEndpoint: (requestId) =>
    `${apiConfig.apiEndpoint}/api/${apiConfig.space}/auth/forgot/${requestId}`,
  forgotChangePasswordEndpoint: (requestId) =>
    `${apiConfig.apiEndpoint}/api/${apiConfig.space}/auth/forgot/${requestId}`,
  updateEndpoint: `${apiConfig.apiEndpoint}/api/${apiConfig.space}/user`,
  pingEndpoint: `${apiConfig.apiEndpoint}/api/${apiConfig.space}/user/ping`,
  storageTokenKeyName: 'accessToken',
  headerTokenKeyName: 'token',
  onTokenExpiration: 'refreshToken', // logout | refreshToken
  captchaSiteKey: import.meta.env.VITE_PUBLIC_RECAPTCHA_SITE_KEY || ''
}
