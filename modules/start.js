const config = require('../config')
const axios = require('axios')

async function get(battery, phn_info) {

    if (battery.plugged) {
        var batttxt = `${battery.battery}% (Charging)`
    } else {
        var batttxt = `${battery.battery}%`
    }

    return ({
        msg: `*Whatsbot* _(1.5.0)_\n\nThis chat is Powered By *Uvindu Bro*\n\n*🔋 Battery:* ${batttxt}\n*📱 Device:* ${phn_info.device_manufacturer} ${phn_info.device_model}\n*🚀 WA Version:* ${phn_info.wa_version}\n*📥 PM permit:* ${config.pmpermit_enabled}\n*🔇 Mutetime:* ${config.pmpermit_mutetime/60} Minutes\n\n*Uvindu Bro Website*\n` + "```https://www.uvindubro.tk```",
        mimetype: "image/jpeg",
        data: Buffer.from(((await axios.get('https://telegra.ph/file/62c432d33ca058a5caab5.jpg', { responseType: 'arraybuffer' })).data)).toString('base64'),
        filename: "start.jpg"
    })
}

module.exports = {
    get
}
