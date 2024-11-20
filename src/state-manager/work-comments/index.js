import { createEffect, createStore } from 'effector'
import axios from 'axios'

import EMDApiConfig from 'src/configs/emd-api'

const getWorkComments = createEffect(async ({
  limit = 100,
  page = 0
}) => {
  const { data } = await axios.post(EMDApiConfig.webhook('get-work-comments'), {
    limit,
    page
  })

  return data
})

const workCommentsList = createStore({
  data: [],
  count: 0,
  loading: false
})
  .on(getWorkComments, (state) => {
    return { ...state, loading: true }
  })
  .on(getWorkComments.doneData, (state, payload) => {
    return {
      ...state,
      data: payload.data,
      count: payload.count,
      loading: false
    }
  })

export { getWorkComments }
export default { workCommentsList }
