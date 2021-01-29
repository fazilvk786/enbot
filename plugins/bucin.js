let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['quote']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
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
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "I have no special talent. I am only passionately curious. Albert Einstein",
  "Wisely, and slow. They stumble that run fast. William Shakespeare",
  "If you judge people, you have no time to love them. Mother Teresa",
  "Whenever you find yourself on the side of the majority, it is time to pause and reflect. Mark Twain",
  "All that we are is the result of what we have thought. Buddha",
  "The most courageous act is still to think for yourself. Aloud. Coco Chanel",
  "Insanity: doing the same thing over and over again and expecting different results. Albert Einstein",
  "The greatest wealth is to live content with little. Plato",
  "The future belongs to those who prepare for it today. Malcolm X",
  "Don’t count the days, make the days count. Muhammad Ali",
  "Be kind whenever possible. It is always possible. Dalai Lama",
  "Well done is better than well said. Benjamin Franklin",
  "The root of suffering is attachment. Buddha",
  "I think, therefore I am. René Descartes",
  "To be, or not to be, that is the question. William Shakespeare",
  "It is not in the stars to hold our destiny but in ourselves. William Shakespeare",
"Be yourself; everyone else is already taken. Oscar Wilde",  
  "That which does not kill us makes us stronger. Friedrich Nietzsche",
  "It’s not whether you get knocked down, it’s whether you get up. Vince Lombardi",
  "Go confidently in the direction of your dreams. Live the life you have imagined. Henry David Thoreau",
  "Life is either a daring adventure, or nothing. Helen Keller ",
  "Education is the most powerful weapon which you can use to change the world. Nelson Mandela",
  "Genius is one percent inspiration, ninety-nine percent perspiration. Thomas A. Edison",
  "Better to die standing than to live on your knees. Ernesto “Che” Guevara",
  "Big Brother is watching you. George Orwell",
  "It always seems impossible until it’s done. Nelson Mandela",
  "I don’t think of all the misery but of the beauty that still remains. Anne Frank",
  "Little by little, one travels far. J.R.R. Tolkien ",
  "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times. Bruce Lee",
  "A man who stands for nothing will fall for anything. Malcolm X",
  "Love all, trust a few, do wrong to none. William Shakespeare",
  "By failing to prepare, you are preparing to fail. Benjamin Franklin",
  "Whatever you are, be a good one. Abraham Lincoln",
  "Puns are the highest form of literature. Alfred Hitchcock",
  "Not all those who wander are lost. J.R.R. Tolkien",
  "Winners never quit, and quitters never win. Vince Lombardi",
  "Man – a being in search of meaning. Plato",
  "Believe you can and you’re halfway there. Theodore Roosevelt",
  "It’s fun to do the impossible. Walt Disney",
  "There is nothing impossible to him who will try. Alexander the Great",
  "You are what you believe yourself to be. Paulo Coelho",
  "Stumbling is not falling. Malcolm X"
]
