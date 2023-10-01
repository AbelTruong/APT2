const Months: any = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
}

/**
 *
 * @param {String | Number} datetime
 * @param {String} type
 * @returns String
 */
const formatDateTime = (datetime: any, type: string = 'YYYY-MM-DD') => {
    const newDate = new Date(datetime)
    const yyyy = newDate.getFullYear()
    const yyyyStr = `${yyyy}`
    const mm = newDate.getMonth() + 1
    const mmStr = `${mm < 10 ? `0` : ``}${mm}`
    const dd = newDate.getDate()
    const ddStr = `${dd < 10 ? `0` : ``}${dd}`

    const hour = newDate.getUTCHours() % 12
    const minute = newDate.getUTCMinutes()
    // const second = newDate.getUTCSeconds()
    const period = newDate.getUTCHours() >= 12 ? 'PM' : 'AM'

    switch (type) {
        case 'YYYY/MM/DD':
            // 2020/02/26
            return `${yyyyStr}/${mmStr}/${ddStr}`

        case 'YYYY-MM-DD':
            // 2020-02-26
            return `${yyyyStr}-${mmStr}-${ddStr}`

        case 'MM/DD/YYYY':
            // 02/26/2020
            return `${mmStr}/${ddStr}/${yyyyStr}`

        case 'MM/DD/YYYY HH:MM A':
            // 06/20/2023 8:44 AM
            return `${mmStr}/${ddStr}/${yyyyStr} ${hour}:${minute} ${period}`

        case 'Month DD, YYYY':
            // January 8, 2023
            return `${Months[mmStr]} ${ddStr}, ${yyyyStr}`

        case 'Month DD':
            // January 8
            return `${Months[mmStr]} ${ddStr}`

        case 'Month DD, YYYY HH:MM A':
            // January 8, 2023 8:44 AM
            return `${Months[mmStr]} ${ddStr}, ${yyyyStr} ${hour}:${minute} ${period}`

        case 'DD Month YYYY':
            // 8 January 2023
            return `${ddStr} ${Months[mmStr]} ${yyyyStr}`

        default:
            // 2020-02-26
            return `${yyyyStr}-${mmStr}-${ddStr}`
    }
}

export default formatDateTime
