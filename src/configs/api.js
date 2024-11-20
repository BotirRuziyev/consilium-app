export default {
  space: import.meta.env.VITE_PUBLIC_EMD_SPACE || 'app-a357c37c',
  apiEndpoint: import.meta.env.VITE_PUBLIC_ENDPOINT_API || 'https://api.emd.one',
  wsEndpoint: import.meta.env.VITE_PUBLIC_ENDPOINT_WS,
  staticUrl: 'https://static.emd.one/consilium/application',
  landingUrl: import.meta.env.VITE_PUBLIC_ENDPOINT_LANDING || 'https://consilium72.ru'
}