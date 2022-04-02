let handler = function (m) {
  // this.sendContact(m.chat, '6282228302341', 'Indra Gans', m)
  conn.sendContact(m.chat, '6285754204575' , 'Putri Cans', m)
  conn.reply(m.chat, `Tuh Pacar Ku Jangan Galak² Ya >_<, Nanti Ku Banned Nanges`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['owner']
handler.command = /^(pacarowner)$/i

handler.owner = true

module.exports = handler
