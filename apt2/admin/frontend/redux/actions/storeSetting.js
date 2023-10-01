import slices from '../slices'

export const setStoreSetting = async (dispatch, data) => {
  try {
    let _data = data || 'hello'
    return dispatch(slices.storeSetting.actions.setData(data))
  } catch (error) {
    // dispatch(slices.notify.actions.showNotify({ message: error.message, error: true }))
    console.log('error', error)
  }
}
