import React from 'react'
import PropTypes from 'prop-types'
import Routes from './Routes.jsx'
import Navigation from './components/Navigation/index.jsx'
import Footer from './components/Footer/index.jsx'

const App = (props) => {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager('./pages/**/!(*.test.[jt]sx)*.([jt]sx)')

  let primaryActions = [
    {
      label: 'Home',
      pathname: '/',
    },
    {
      label: 'About Me',
      pathname: '/about-abel',
    },
    {
      label: 'Blogs',
      pathname: '/blogs',
    },
    {
      label: 'Youtube Feed',
      pathname: '/youtube-feed',
    },
    {
      label: 'Submit',
      pathname: '/submit',
    },
  ]

  return (
    <div className="container mx-auto w-full flex flex-col min-h-screen">
      <Navigation {...props} primaryActions={primaryActions} />
      <div className="flex-1">
        <Routes pages={pages} appProps={props} />
      </div>
      <Footer />
    </div>
  )
}

App.propTypes = {}

export default App
