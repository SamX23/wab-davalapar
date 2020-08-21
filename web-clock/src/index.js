import "./style/index.css"
import $ from "jquery"
import moment from 'moment'

// Basic setup webclock using jquery
const displayTime = () => {
    moment.locale('id')
    $('.time').text(moment().format('LTS'))
    $('.date').text(moment().format('LL'))
}

const updateTime = () => {
    displayTime()
    setTimeout(updateTime, 1000)
}

updateTime()