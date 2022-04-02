let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Kak Indra, Ada Yang Manggil😊
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@INDRABOT/i
handler.command = ['rpg']

module.exports = handler