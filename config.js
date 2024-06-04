global.owner = ['6285766450735']  
global.mods = ['6285766450735'] 
global.prems = ['6285766450735']
global.nameowner = 'bottest'
global.numberowner = '6285766450735'
global.mail = 'support@tioprm.eu.org' 
global.gc = 'https://chat.whatsapp.com/CZ5FCfAXnqN3gvtnizRZg4'
global.instagram = 'https://instagram.com'
global.wm = '© bottest'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = 'oD4wgh58' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = '4zoe6D2Z'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'oD4wgh58', 
  'https://api.botcahx.eu.org': '4zoe6D2Z'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
