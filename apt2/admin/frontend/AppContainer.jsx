import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import LoadingPage from './components/LoadingPage'
import Toast from './components/Toast'

const AppContainer = (props) => {
  const { appLoading, notify, actions } = props

  const toastMarkup = notify?.show && (
    <Toast error={notify.error} content={notify.message} actions={actions} />
  )

  return (
    <div className="bg-bg-light dark:bg-bg-dark font-secondary">
      <BrowserRouter>
        <App {...props} />

        {appLoading?.loading && <LoadingPage {...appLoading} />}

        {toastMarkup}
      </BrowserRouter>
    </div>
  )
}

AppContainer.propTypes = {}

export default AppContainer
