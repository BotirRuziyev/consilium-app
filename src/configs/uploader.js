import apiConfig from './api'

export default {
  tus: {
    enabled: true,
    endpoint: (integrationId = 'default') => `${apiConfig.apiEndpoint}/api/${apiConfig.space}/uploader/chunk/${integrationId}/s3/`,
    chunkSize: 64 * 1024 * 1024,
    staticUrl: import.meta.env.VITE_PUBLIC_STATIC
  },
  goldenRetreaver: {
    enabled: false,
    serviceWorker: false
  },
  fileUrl: (integrationId = 'default') => `${apiConfig.apiEndpoint}/api/${apiConfig.space}/uploader/chunk/${integrationId}/file`
}
