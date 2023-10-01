/**
 * Logger for development
 * @param name string
 * @param data any
 * @param type debug' | 'error' |'info' |'log' |'warn'
 */
function logger(
    name: string,
    data?: any | undefined,
    type?: 'debug' | 'error' | 'info' | 'log' | 'warn'
) {
    if (
        typeof window == 'object' &&
        (window.location.host.includes('localhost') || window.location.host.includes('solu.run'))
    ) {
        switch (type) {
            case 'debug':
            case 'error':
            case 'info':
            case 'warn':
                console[type](`${name} :>> `, data)
                break

            default:
                console['log'](`${name} :>> `, data)
                break
        }
    }
}

export default logger
