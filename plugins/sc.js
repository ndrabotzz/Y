
await conn.send2Button(m.chat, info, `${botol}`, '⋮☰ INFO', '.info', 'OWNER', '.owner', ftrol)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

let botol = global.botwm