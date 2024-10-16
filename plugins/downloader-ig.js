let { igdl } = require('btch-downloader')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `🔗 Masukkan Link Instagram-nya, bro!`
    
    try {
        let res = await igdl(args[0])
        if (!res.length) throw `😢 Gak ada video yang bisa di-download!`

        for (let i of res) {
            await conn.sendFile(m.chat, i.url, 'instagram.mp4', `🎥 Nih, video dari Instagram:`, m)
            await conn.delay(1500) // Biar gak terlalu cepat
        }
    } catch (error) {
        throw `⚠️ Error: ${error.message}`
    }
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

handler.limit = true

module.exports = handler;
