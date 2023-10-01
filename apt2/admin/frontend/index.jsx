import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import AppStore from './AppStore'
import store from './redux/store'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <AppStore />
        </Provider>
    </React.StrictMode>
)
