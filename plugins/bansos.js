let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
  try {
    global.DATABASE.data.users[m.sender].lastbansos = global.db.data.users[m.sender].lastbansos || 0
    let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 91}}`.trim() //🗿
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    let kbansos = './lib/kbansos.jpg'
    let mbansos = './lib/mbansos.jpg'
    let botol = global.botwm
    //let name = conn.getName[m.sender]
    let __timers = (new Date - global.db.data.users[m.sender].lastbansos)
    let _timers = (1 - __timers) 
    let timers = clockString(_timers)
    let user = global.db.data.users[m.sender]
    if (new Date - global.db.data.users[m.sender].lastbansos > 300000) {
      if (Aku > Kamu) {
        conn.sendFile( m.chat, kbansos, 'b.jpg', `Kamu Korupsi Dana Bansos Tapi Kamu TertangkapðŸš“\n\nAkibatnya Kamu Harus Membayar\nðŸ“‰Denda Sebesar Rp 3,000,000`, m)
        user.money -= 3000000
        global.db.data.users[m.sender].lastbansos = new Date * 1
      } else if (Aku < Kamu) {
        user.money += 3000000
        conn.sendFile( m.chat, mbansos, 'b.jpg', `Selamat Kamu Berhasil Korupsi Dana BansosðŸ’¸\n\nHasilnya Kamu Mendapatkan\nðŸ“ˆUang Sebesar Rp 3,000,000,000,000`, m)
        global.db.data.users[m.sender].lastbansos = new Date * 1
      } else {
        conn.sendButton( m.chat, `Yahh Kamu Gagal Dalam Korupsi, Mungkin Gak Punya Keahlian KorupsiðŸ¤£\n\nKamu Juga Tidak Masuk Penjara Karna Kamu Melarikan DiriðŸƒ`, `${botol}`, `Kembali`, `${usedPrefix}menu`, m)
        global.db.data.users[m.sender].lastbansos = new Date * 1
      }
    } else conn.sendButton(m.chat, `Tadi Sudah Korupsi, KapanÂ² Lagi AjaðŸ’°\n\nDan Kamu Harus Menunggu Selama Agar Bisa Korupsi Bansos Kembali \nâ–¸ ðŸ•“ *${timers}*`, `${botol}`, `â‹®â˜° Menu`, `${usedPrefix}menu`, m)
  } catch (e) {
    throw `${e}`
  }
}

handler.help = ['bansos1]','bansos2','bansos3','bansos4','bansos5']
handler.tags = ['rpg']
handler.command = /^(bansos1|bansos2|bansos3|bansos4|bansos5|korupsi1|korupsi2|korupsi3|korupsi4|korupsi5)$/i
handler.premium = false
handler.register = true
handler.limit = true

handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
