let handler = async m => m.reply(`
╭─「 • Created by • 」
│ • @Vai838 [917306030148]
│ • @Narutumo
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^owner$/i

module.exports = handler
