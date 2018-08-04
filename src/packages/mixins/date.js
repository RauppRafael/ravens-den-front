import moment from 'moment'

export default {

    methods: {
        date(date) {
            date = moment(date)
            const sameWeek = date.isSame(moment(), 'week');
            const format = sameWeek ? 'dddd' : 'MMM, D'
            return date.format(format)
        },

        time(date) {
            return moment(date).format('HH:mm')
        },

        formatDate(date, format = 'LL') {
            return moment(date).format(format)
        }

    },

}
