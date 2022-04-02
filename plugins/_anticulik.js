let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」


• *Telkomsel:* 6282228302341


Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6282228302341', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler