import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LightDarkMode from '../LightDarkMode'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  console.log('props :>> ', props)
  const { primaryActions } = props

  const [showMenubars, setShowMenuBars] = useState(false)

  console.log('🚀🚀🚀 ~ file: index.jsx:13 ~ Navigation ~ showMenubars:', showMenubars)

  return (
    <nav className="px-2 sm:px-4 py-2.5 border-b-2">
      <div className="flex flex-wrap items-center justify-between">
        <div
          className="w-10 h-10 md:hidden text-te-light dark:text-te-dark"
          type="button"
          onClick={() => setShowMenuBars(!showMenubars)}
        >
          {showMenubars ? (
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
        <div className="text-green-900 hover:text-te-light dark:text-te-dark m-2 font-bold text-[32px]">
          <Link to="/">APT2</Link>
        </div>
        <div className="flex md:order-2">
          {/* Dark mode switcher */}
          <div>
            <LightDarkMode {...props} />
          </div>
          {/* Dark mode switcher end */}
        </div>
        <div className="text-te-light dark:text-te-dark md:flex justify-between items-center w-full md:w-auto md:order-1">
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            {primaryActions?.length > 0 &&
              primaryActions.map((action) => (
                <li key={action.pathname}>
                  <Link to={action.pathname}>{action.label}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  primaryActions: PropTypes.array,
}

Navigation.defaultProps = {
  primaryActions: [],
}

export default Navigation
