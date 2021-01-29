let handler = async m => m.reply(`
╭─「 • Owner • 」
│ • @Vai838 [917306030148]
│ • @Narutumo
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
