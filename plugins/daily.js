let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    conn.reply(m.chat, '+500 XP', m)  
    global.DATABASE._data.users[m.sender].exp += 500
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else conn.reply(m.chat, 'You have claimed your daily XP for today', m)
}
handler.help = ['claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
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

