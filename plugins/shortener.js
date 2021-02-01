
let fetch = require('node-fetch')
let handler = async (m, { conn, command, args }) => {
  let full = /f$/i.test(command)
  if (!args[0]) return conn.reply(m.chat, 'No url', m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch('https://tinyurl.com/api-create.php?url=0' + encodeURIComponent(url) + '&full=' + full)).buffer()
conn.reply(m.chat,ss, url, m)
}
handler.help = ['shortener'].map(v => v + ' <url>')
handler.tags = ['tools']
handler.command = /^(shortener)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
