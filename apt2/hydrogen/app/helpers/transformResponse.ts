const transformResponse = ({ data, error }: { data?: any; error?: any }) => {
    let _error = undefined
    if (!_error && error && typeof error == 'string') {
        _error = { message: _error }
    }
    if (!_error && error && typeof Array.isArray(error) && error[0]) {
        _error = error[0].message
            ? { ...error[0], message: error[0].message }
            : { message: JSON.stringify(error[0]) }
    }
    if (!_error && error && typeof error == 'object') {
        _error = error.message
            ? { ...error, message: error.message }
            : { message: JSON.stringify(error) }
    }

    return { data, error: _error }
}

export default transformResponse
