import Constants from '../constants'

const transformPageTitle = (title: string) => {
    return `${title} | ${Constants.Signature}`
}

export default transformPageTitle
