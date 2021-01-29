let handler = async (m, { conn, text }) => {
  if (text) {
    conn.welcome = text
    m.reply('Bye set up successful\n@user (Mention)')
  } else throw 'Where is the text?'
}
handler.help = ['setbye <text>']
handler.tags = ['owner']

handler.command = /^setbye$/i
module.exports = handler

