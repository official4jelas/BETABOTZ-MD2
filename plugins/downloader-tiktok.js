const fetch = require('node-fetch');

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
    if (!text) throw `Linknya Mana? 🤔`;
    m.reply('Sedang diproses, tunggu sebentar... ⏳');
    
    try {
        let anu = await fetch(`https://widipe.com/download/ttdl?url=${text}`);
        let result = await anu.json();
        
        if (result.result) {
            await conn.sendFile(m.chat, result.result.video, 'anu.mp4', `*🎥 Video:* ${result.result.title}\n*💬 Deskripsi:* ${result.result.description || 'N/A'}`, m);
            conn.sendFile(m.chat, result.result.audio, 'anu.mp3', `*🎶 Audio:* ${result.result.title}`, m);
        } else {
            m.reply('Gak ada hasil, coba link lain ya! 😅');
        }
    } catch (e) {
        console.error(e);
        conn.sendFile(m.chat, 'error.mp3', "anu.mp3", null, m, true, {
            type: "audioMessage",
            ptt: true,
        });
        m.reply('Oops! Ada yang salah, coba lagi nanti. 🔄');
    }
}

handler.help = ['tiktok'];
handler.tags = ['downloader'];
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i;
handler.limit = true;

module.exports = handler;
