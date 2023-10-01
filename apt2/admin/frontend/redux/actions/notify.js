import slices from '../slices'

const sync = (dispatch, data) => {
  return new Promise((resolve, reject) => {
    dispatch(slices.notify.actions.showNotify(data))
    setTimeout(() => {
      resolve()
    }, 3000)
  })
}

export const showNotify = async (dispatch, data) => {
  await sync(dispatch, data)
  dispatch(slices.notify.actions.hideNotify())
}

export const hideNotify = (dispatch) => {
  dispatch(slices.notify.actions.hideNotify())
}
