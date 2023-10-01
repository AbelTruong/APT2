import React from 'react'
import AppContainer from './AppContainer'
import { useDispatch, useSelector } from 'react-redux'
import actions from './redux/actions'
import reducer from './redux/reducer'

const AppStore = (props) => {
  const dispatch = useDispatch()

  let reduxState = {}
  Object.keys(reducer).forEach((key) => (reduxState[key] = useSelector((state) => state[key].data)))

  let reduxActions = {}
  Object.keys(actions).forEach((key) => {
    reduxActions[key] = async (data) => await actions[key](dispatch, data)
  })

  return <AppContainer {...reduxState} actions={reduxActions} dispatch={dispatch} />
}

export default AppStore
