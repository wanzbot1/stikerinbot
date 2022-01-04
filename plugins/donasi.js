let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, fla + 'donasi', `
┌「 *Donasi • Emoney* 」
├ 
├ 
└────
`.trim(), '© icebotz', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
