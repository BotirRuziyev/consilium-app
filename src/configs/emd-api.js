import apiConfig from './api'

export default {
  webhook: (webhookPath) => `${apiConfig.apiEndpoint}/api/${apiConfig.space}/webhook/${webhookPath}`
}
