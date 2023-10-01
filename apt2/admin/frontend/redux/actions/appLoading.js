import slices from '../slices'

export const showAppLoading = (dispatch, data) => {
  console.log('run')
  dispatch(slices.appLoading.actions.showAppLoading())
}

export const hideAppLoading = (dispatch) => {
  dispatch(slices.appLoading.actions.hideAppLoading())
}
