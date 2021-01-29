let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Question:* ${command} ${text}
*Answer:* ${pickRandom(['Yes','Maybe yes','Maybe','Probably not','Not','Impossible'])}
`.trim(), m)
}
handler.help = ['is <Question>']
handler.tags = ['shells']
handler.command = /^is/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

