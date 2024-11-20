import { createEffect, createStore } from 'effector'
import axios from 'axios'

import EMDApiConfig from 'src/configs/emd-api'

const getDocs = createEffect(async ({
  limit = 100,
  page = 0,
  query,
  sort
}) => {
  const { data } = await axios.post(EMDApiConfig.webhook('get-docs'), {
    limit,
    page,
    query,
    sort
  })

  return data
})

const docsList = createStore({
  data: [],
  count: 0,
  loading: false
})
  .on(getDocs, (state) => {
    return { ...state, loading: true }
  })
  .on(getDocs.doneData, (state, payload) => {
    return {
      ...state,
      data: payload.data,
      count: payload.count,
      loading: false
    }
  })

export { getDocs }
export default { docsList }
