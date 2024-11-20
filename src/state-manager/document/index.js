import { createEffect, createStore } from 'effector'
import axios from 'axios'

import EMDApiConfig from 'src/configs/emd-api'

const getDoc = createEffect(async ({ id }) => {
  const { data } = await axios.post(EMDApiConfig.webhook('get-doc'), { id })

  return data
})

const docView = createStore({
  details: {},
  loading: false
})
  .on(getDoc, (state) => {
    return { ...state, loading: true }
  })
  .on(getDoc.doneData, (state, payload) => {
    return {
      ...state,
      details: payload.data,
      loading: false
    }
  })

export { getDoc }
export default { docView }
