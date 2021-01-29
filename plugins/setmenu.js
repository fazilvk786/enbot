let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menu set up successful\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Menu direset', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' set up successfull\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' direset', m)
    }
  }
}
handler.help = ['', 'before','header','body','footer','after'].map(v => 'setmenu' + v + ' <teks>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefix)
%exp (Exp)
%limit (Limit)
%name (Name)
%weton (Weton today)
%week (day)
%date (date)
%time (time)
%uptime (Uptime Bot)
%totalreg (total number of users in the database)
%npmname
%npmdesc
%version
%github

Section of Menu Header & Footer:
%category (category)

Bagian Menu Body:
%cmd (Command)
%islimit (if the command is in limit)
`.trim()
