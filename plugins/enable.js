let handler = async (m, { usedPrefix, command, text, args }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let type = (args[0] || '').toLowerCase()
  switch (type) {
    case 'welcome':
      chat.welcome = isEnable
      break
    default:
      return m.reply(`
List option: welcome

Content:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim())
  }
  m.reply(`
*${type}* succeeded in turning*${isEnable ? 'on' : 'off'}* for this chat
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff))$/i

module.exports = handler
