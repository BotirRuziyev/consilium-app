import { createEffect, createStore } from 'effector'
import axios from 'axios'

import EMDApiConfig from 'src/configs/emd-api'

const getUserDocs = createEffect(async ({
  limit = 100,
  page = 0
}) => {
  const { data } = await axios.post(EMDApiConfig.webhook('get-user-docs'), {
    limit,
    page
  })

  return data
})

const upsertUserDocs = createEffect(async (payload) => {
  const { data } = await axios.put(EMDApiConfig.webhook('upsert-user-docs'), payload)

  return data
})

const userDocsList = createStore({
  data: [],
  count: 0,
  loading: false
})
  .on(getUserDocs, (state) => {
    return { ...state, loading: true }
  })
  .on(getUserDocs.doneData, (state, payload) => {
    return {
      ...state,
      data: payload.data,
      count: payload.count,
      loading: false
    }
  })
  .on(upsertUserDocs.doneData, (state, payload) => {
    return {
      ...state,
      data: [...state.data, payload],
      count: state.count + 1,
    }
  })

export { getUserDocs, upsertUserDocs }
export default { userDocsList }
