import apiConfig from './api'

export default {
  getTableRows: (tableId) => `${apiConfig.apiEndpoint}/api/${apiConfig.space}/database/${tableId}/row`,
  usertTableRow: (tableId) => `${apiConfig.apiEndpoint}/api/${apiConfig.space}/database/${tableId}/row`,
}
