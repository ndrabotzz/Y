let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/tag.webp')
conn.fakeReply(m.chat, stc, '6282228302341@s.whatsapp.net', '*Kenapa Tag Owner Saya*')
}
handler.customPrefix = /^(@6282228302341)$/i
handler.command = ['fun']

module.exports = handler
(