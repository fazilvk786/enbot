let handler = async (m, { command, text }) => {
  let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
  m.reply(Buffer.from(txt, 'base64').toString('utf-8'))
}
handler.help = ['utf8']
handler.tags = ['tools']
handler.command = /^utf8$/i

module.exports = handler
