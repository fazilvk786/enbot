let handler = async (m, { conn, text }) => {
  if (text) {
    conn.welcome = text
    m.reply('Welcome set up successfull\n@user (Mention)')
  } else throw 'Where is the text?'
}
handler.help = ['setwelcome <text>']
handler.tags = ['owner']

handler.command = /^setwelcome$/i
module.exports = handler

