import React from 'react'
import PropTypes from 'prop-types'

const Toast = (props) => {
  const { error, content, actions } = props
  return (
    <div>
      {!error ? (
        <div
          className="pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-success-100 bg-clip-padding text-sm text-success-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
          id="static-example"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-te-autohide="false"
          data-te-toast-init
          data-te-toast-show
        >
          <div className="flex items-center justify-between rounded-t-lg border-b-2 border-success/20 bg-success-100 bg-clip-padding px-4 pb-2 pt-2.5">
            <p className="flex items-center font-bold text-success-700">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="check-circle"
                className="mr-2 h-4 w-4 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                />
              </svg>
              Success
            </p>
          </div>
          <div className="break-words rounded-b-lg bg-success-100 px-4 py-4 text-success-700">
            {content}
          </div>
        </div>
      ) : (
        <div
          className="pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-danger-100 bg-clip-padding text-sm text-danger-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
          id="static-example"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-te-autohide="false"
          data-te-toast-init
          data-te-toast-show
        >
          <div className="flex items-center justify-between rounded-t-lg border-b-2 border-danger-200 bg-danger-100 bg-clip-padding px-4 pb-2 pt-2.5 text-danger-700">
            <p className="flex items-center font-bold text-danger-700">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="times-circle"
                className="mr-2 h-4 w-4 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                />
              </svg>
              Error
            </p>
          </div>
          <div className="break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700">
            {content}
          </div>
        </div>
      )}
    </div>
  )
}

Toast.propTypes = {
  error: PropTypes.bool,
  content: PropTypes.string,
}

Toast.defaultProps = {
  error: true,
  content: '',
}

export default Toast
