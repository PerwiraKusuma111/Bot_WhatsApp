//UDAH DI KASIH YANG NoO ENC MASIH BELUM SUBSCRIBE? PARAH SI
//HARGAI GUE A PA SUSAH NYA KLIK TOMBOL SUBSCRIBE
//KLIK TOMBOL SUBSCRIBE !.!!! ht tps://youtube.com/channel/UCPhU6uA_3gUaEvyrFZFgJqg
//AWAS GA SUBSCRIBE TAR GUE GA UP SC LAGI NI
//MAU GUE ENC?
//KALO MAU YANG NO ENC TERUS KLIK TOMBOL SUBSCRIBE LAH https://youtube.com/channel/UCPhU6uA_3gUaEvyrFZFgJqg
const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const crypto = require('crypto')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const { virtex, vipi } = require('./lib/virtex.js')
const Mfake = fs.readFileSync ('./media/ganteng.jpg')
const Mthumb = fs.readFileSync('./media/ganteng.jpg')
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM')
		
// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot, islamMenu, sertiMenu, ceritaMenu, makerMenu,dewasaMenu, toolsMenu} = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");

simi = false
var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let fakeimage = fs.readFileSync("./media/ganteng.jpg")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))

owner = setting.owner
gamewaktu = setting.gamewaktu
petik = '```'
fake = 'WhatsApp'//GANTI NAMA KAMU BEP
ban =[]

// Database
const _registered = JSON.parse(fs.readFileSync('./database/user/register.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = conn = async (conn, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
        const pop = budy.slice(0)
        const botNumber = conn.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? conn.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await conn.chats.all()
		const yut = mek.message
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? conn.user.jid : conn.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? conn.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = conn.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝕾𝖎𝖑𝖆𝖍𝖐𝖆𝖓 𝕻𝖎𝖑𝖎𝖍 𝕯𝖎𝖘𝖓𝖎!","footerText": "Herman Chanel❤️","listType": "SINGLE_SELECT","sections": list}}, {})
            return conn.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }

        function monospace(string) {
            return '```' + string + '```'
        }   
   
     function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
 
       function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
    
    const reply = (teks) => {
	      conn.sendMessage(from, teks, text, {quoted:mek})
        }
    
    const sendMess = (hehe, teks) => {
           conn.sendMessage(hehe, teks, text)
        }
 
       const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/ganteng.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : conn.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/ganteng.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
  
      const sendText = (from, text) => {
           conn.sendMessage(from, text, MessageType.text)
        }
  
      const textImg = (teks) => {
           return conn.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/ganteng.jpg')})
        }
  
      const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/sherlynn.jpg')
        }}}
    
   const math = (teks) => {
           return Math.floor(teks)
       }
 
      const kick = function(from, orangnya){
	       for (let i of orangnya){
	       conn.groupRemove(from, [i])
        }
        }
   
     const admin = function(from, orangnya){
	       for (let i of orangnya){
	       conn.groupMakeAdmin(from, [i])
        }
        }

       
const kickMember = async(id, target = []) => {
           let group = await conn.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = conn.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await conn.groupRemove(to, [i])
        } else {
           await conn.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
     
  const add = function(from, orangnya){
	       conn.groupAdd(from, orangnya)
}
    
   const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       conn.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
    
  const hideTag = async function(from, text){
	       let anu = await conn.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       conn.sendMessage(from, {text:text}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  


const hideTag2 = async function(from, sticcker){
	       let anu = await conn.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       conn.sendMessage(from, sticcker, sticker, {contextInfo: {"mentionedJid": ane}})
}  


const hideTaag = async function(from, text){
	       let anu = await conn.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       conn.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/sherlynn.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
    


  const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           

           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           conn.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}


       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
       

           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio}
           conn.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
           fs.unlinkSync(filename)});
}
   

   const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       conn.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       conn.sendMessage(from, hasil, type, options).catch(e => {
	       conn.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}


const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await conn.prepareMessage(from, kma, location)



const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
conn.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}


const sendButTexxt = async (id, text1, desc1, but = [], options = {}) => {
const buttonMessages = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
conn.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
      

const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await conn.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = conn.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await conn.groupMakeAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU DINAIKAN AKU BANGGA PADAMU`)
}
}
}



      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await conn.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = conn.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await conn.groupDemoteAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU TURUNKAN SAYA IKUT SEDIH`)
				
}
}
}
      


    let authorname = conn.contacts[from] != undefined ? conn.contacts[from].vname || conn.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
   

      const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
    

   const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}


     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam🌃'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang🏙️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam🌃'
}

//////////////////////hhhkkllijggfdfkmhhjj
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time) => {
            const obj = { id: userid, name: sender, age: age, time: time}
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

       /* const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }*/
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }

   /*const levelRole = getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } */
       // FUNCTION LEVELING
const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'

           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
//function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 1000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
   /*    if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
     

  reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
*/

        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage')
		const isImage = (type === 'imageMessage')
                const isQuotedtext = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 300, status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'dha', sellerJid: '0@s.whatsapp.net'} } }
        const ftext = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `*Hai ${pushname}👋*\n  ${moment().utcOffset('+0700').format('HH:mm:ss')} ${moment.tz('Asia/Jakarta').format('DD/MM/YYYY')}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./media/sherlynn.jpg')}}}
        const ftoko = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./media/sherlynn.jpg`)},"title": `©Herman Chanel`,"description": "ItsMeBotz", "currencyCode": "IDR","priceAmount1000": "99999999","retailerId": "ItsMeBotz","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

	/*const isMtuc = Object.keys(mek.message)[0] == "imageMessage" ? mek.message : ""
	const hubb = `${isMtuc}`*/
            /*const isMtucc = hubb !== "" && content.includes("extendedTextMessage") ||
        hubb !== "" && content.includes("conversation")
        if (isImage) {
        	reply("wokke")
        }*/
      // Anti link
  

      if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                conn.groupRemove(from, [sender])
            }
        }
        
        
let {
    banChats,
} = setting

function banChat() {
    if (banChats == true) {
        return false
    } else {
        return true
    }
}
        
        
             _sewa.expiredCheck(conn, sewa)
             
       
       
      if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
}
})
              if (position !== false) {
              return _win[position].win
}
}
      
             game.cekWaktuFam(conn, family100)      
  

          if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim ${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
 

       if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                conn.sendMessage(from, `Semua jawaban sudah tertebak\nKirim ${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
  
        
  if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim ${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
   

         if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim ${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
     

       if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim ${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
          

  if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar??*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim ${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
  

        if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim ${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
   

       if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim ${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
     

     if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim ${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
    

        if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim ${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
   

         if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim ${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
         

 if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim ${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
     

     if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim ${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
     

     if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim ${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
     

     if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim ${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }

	

if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			

const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		

if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	
	    // Auto Read
        /*conn.chatRead("status@broadcast")*/
        //auto vn
     /*  conn.updatePresence(from, Presence.recording)*/
  /*if (budy.startsWith("")){
      	for (let _ of totalchat) {
      	conn.updatePresence(_.jid, Presence.composing)
      }}*/
   /*   if (budy.startsWith("x")) {
      	if (!mek.key.fromMe) return
uptime = process.uptime();
			conn.setStatus(`Aktif ${kyun(uptime)}`)
		}*/
		
       // CMD
       /* if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ PRIV ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ GC ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))*/
            
            if(isCmd && !isGroup) console.log(bgcolor(`\x1b[1;37m[CMD]`, 'blue'),bgcolor(`\x1b[1;33m[${time}]`, 'red'), bgcolor(`\x1b[1;31m${sender}`, 'yellow'), '\x1b[1;37mroom', bgcolor(`\x1b[1;33m${from}`, 'red'), `\x1b[0m`)
        if(isCmd && !isGroup) console.log(bgcolor(`\x1b[1;37m[CMD]`, 'blue'),(`\x1b[1;37mPesan : \x1b[1;32m${pop}`))
        if(isCmd && !isGroup) console.log(bgcolor(`\x1b[1;37m[CMD]`, 'blue'), (`\x1b[1;37mFrom  : `),color(`[ ${pushname} ]`, 'cyan'))
        if(isCmd && !isGroup) console.log(' ')
        
        if(isCmd && isGroup) console.log(bgcolor(`\x1b[1;37m[CMD]`, 'blue'),bgcolor(`\x1b[1;33m[${time}]`, 'red'), bgcolor(`\x1b[1;31m${sender}`, 'yellow'), '\x1b[1;37mroom', bgcolor(`\x1b[1;33m${from}`, 'red'), `\x1b[0m`)
        if(isCmd && isGroup) console.log(bgcolor(`\x1b[1;37m[CMD]`, 'blue'),(`\x1b[1;37mPesan : \x1b[1;32m${pop}`))
        if(isCmd && isGroup) console.log(bgcolor(`\x1b[1;37m[CMD]`, 'blue'), (`\x1b[1;37mFrom  : `),color(`[ ${pushname} - ${groupName} ]`, 'cyan'))
        if(isCmd && isGroup) console.log(' ')
        
        if(!isCmd && !isGroup) console.log(bgcolor(`\x1b[1;31m[MSG]`, 'yellow'),bgcolor(`\x1b[1;33m[${time}]`, 'red'), bgcolor(`\x1b[1;31m${sender}`, 'yellow'), '\x1b[1;37mroom', bgcolor(`\x1b[1;33m${from}`, 'red'), `\x1b[0m`)
        if(!isCmd && !isGroup) console.log(bgcolor(`\x1b[1;31m[MSG]`, 'yellow'),(`\x1b[1;37mPesan : \x1b[1;32m${pop}`))
        if(!isCmd && !isGroup) console.log(bgcolor(`\x1b[1;31m[MSG]`, 'yellow'), (`\x1b[1;37mFrom  : `),color(`[ ${pushname} ]`, 'cyan'))
        if(!isCmd && !isGroup) console.log(' ')
        
        if(!isCmd && isGroup) console.log(bgcolor(`\x1b[1;31m[MSG]`, 'yellow'),bgcolor(`\x1b[1;33m[${time}]`, 'red'), bgcolor(`\x1b[1;31m${sender}`, 'yellow'), '\x1b[1;37mroom', bgcolor(`\x1b[1;33m${from}`, 'red'), `\x1b[0m`)
        if(!isCmd && isGroup) console.log(bgcolor(`\x1b[1;31m[MSG]`, 'yellow'),(`\x1b[1;37mPesan : \x1b[1;32m${pop}`))
        if(!isCmd && isGroup) console.log(bgcolor(`\x1b[1;31m[MSG]`, 'yellow'), (`\x1b[1;37mFrom  : `),color(`[ ${pushname} - ${groupName} ]`, 'cyan'))
        if(!isCmd && isGroup) console.log(' ')
        
        if(!isCmd && !isGroup && isImage) console.log(bgcolor(`\x1b[1;31m[MSG]`, 'yellow'),bgcolor(`\x1b[1;33m[${time}]`, 'red'), bgcolor(`\x1b[1;31m${sender}`, 'yellow'), '\x1b[1;37mroom', bgcolor(`\x1b[1;33m${from}`, 'red'), `\x1b[0m`)
        if(!isCmd && !isGroup && isImage) console.log(bgcolor(`\x1b[1;31m[MSG]`, 'yellow'),(`\x1b[1;37mPesan : \x1b[1;32mImage`))
        if(!isCmd && !isGroup && isImage) console.log(bgcolor(`\x1b[1;31m[MSG]`, 'yellow'), (`\x1b[1;37mFrom  : `),color(`[ ${pushname} ]`, 'cyan'))
        if(!isCmd && !isGroup && isImage) console.log(' ')
        
        
        /*if (isMedia && !mek.message.videoMessage || isImage) {*/
          /*  const encmedia = mek
            const media = await conn.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                }*/
                const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					/*if (userLevel === undefined && userXp === undefined) return console.log("noregist")*/
					const requiredXp = 1000 * (Math.pow(2, userLevel) - 1)
   /*  if (!isGroup) {
		if (!command) {
		if (!isMedia) {
			if (mek.key.fromMe) return
		siminya = await fetchJson(`https://api-sv2.simsimi.net/v2/?text=${pop}&lc=id`)
		msgsimi = siminya.success
		conn.sendMessage(from, `${msgsimi}\n                                   _ᴬᵘᵗᵒ ᵐᵉˢˢᵃᵍᵉ_`, text, {quoted: mek, sendEphemeral: true, contextInfo : {forwardingScore: 508, isForwarded: true}})
		}}} */
		
            switch(command){
            	case 'simi_on':
            if (!mek.key.fromMe) return reply("_Owner only_")
            simi = true
reply("_Berhasil mengaktifkan_")
break
case 'simi_off':
            if (!mek.key.fromMe) return reply("_Owner only_")
            simi = false
reply("_Berhasil mematikan_")
break
           case 'daftar':
                			
                			if (!q.includes('|')) return  reply("Format salah\nContoh format benar #daftar Andi|17")
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                	ppimg = fs.readFileSync(`./media/canss.jpg`)
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time)
                   conn.sendMessage(from, ppimg, image, {quoted: mek, caption: `*[Terdaftar]*Nama: ${namaUser}\nNo.    : wa.me/${sender.split("@")[0]}\nUmur : ${umurUser}\nNs.     : 72nkG82hkwi920hapu`, contextInfo: {mentionedJid: [`${sender}`]}})
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time)
                    		conn.sendMessage(from, ppimg, image, {quoted: mek, caption: `*[Terdaftar]*\nNama: ${namaUser}\nNo.    : @${sender.split("@")[0]}\nUmur : ${umurUser}\nNs.     : 72nkG82hkwi920hapun`, contextInfo: {mentionedJid: [`${sender}`]}})
                			}
					break
           case 'q':
nekk = mek.message.extendedTextMessage.contextInfo.quotedMessage
gop = conn.prepareMessageFromContent(from, nekk, {contextInfo: {}})
conn.relayWAMessage(gop)
break
       case 'donasi':
               txtt =`*Hai Kak* ${pushname} *Yang Baik*\n*Mau donasi?* Dikasih Syukur, Gak jadi Gpp :)`

               buttons = [{buttonId: '!gopay',buttonText:{displayText: 'GOOPAY'},type:1},{buttonId:'!pulsa',buttonText:{displayText:'PULSA'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: '𝑀𝑎𝑘𝑎𝑠𝑖ℎ 𝑌𝑔 𝑆𝑢𝑑𝑎ℎ 𝐷𝑜𝑛𝑎𝑠𝑖 ',
               buttons: buttons,
               headerType: 1
}

               prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
               conn.relayWAMessage(prep)
               break 
        case 'owner':
        case 'creator':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               txtt =`*Hai Kak* ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

               buttons = [{buttonId: '!youtube',buttonText:{displayText: 'YouTube'},type:1},{buttonId:'!infoig',buttonText:{displayText:'Instagram'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Bantu Support Yah!',
               buttons: buttons,
               headerType: 1
}

               prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
               conn.relayWAMessage(prep)
               break      
             

  const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await conn.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
conn.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

case 'leveling':
					if (!mek.key.fromMe) return reply("Owner Only")
					if (args.length < 1) return reply('*Mengaktifkan tekan on, Menonaktif tekan off*')
					if (args[0] === 'on') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
					_leveling.push(from)
					fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
					reply("Sukses mengaktifkan")
					} else if (args[0] === 'off') {
					_leveling.splice(from, 1)
						fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
						reply("Sukses Menonaktifkan")
					} else {
						reply("Error")
					}
					break
case 'red':
conn.chatRead("status@broadcast")
break

case 'level':
					if (!mek.key.fromMe) return reply("Owner only")
					if (!isLevelingOn) return reply("Levelin off in here")
					
					resul = `*\\Name :* ${pushname}
*\\No      :* @${sender.split("@")[0]}
*\\XP      :* ${userXp}/${requiredXp}
*\\Level  :* ${userLevel}
*\\Role   :* ${role}`
					conn.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
case 'tahta':
if (args.length < 1) return reply("Masukkan teksnya")
donty = await getBuffer(`https://api.zeks.me/api/hartatahta?apikey=Rkm5VgPvmNWXm35NnTY0x0aCcT2&text=${q}`)
conn.sendMessage(from, donty, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'wings':
if (args.length < 1) return reply("Masukkan teksnya")
/*case 'futuristic-technology':
case 'black-white-bear-mascot':*/
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/textpro/neon-devil-wings?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'neon':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/textpro/futuristic-technology?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'mascot':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/textpro/black-white-bear-mascot?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'beach':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/textpro/on-the-beach?teks=${encodeURI(q)}&&background=0`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'glitch':
if (args.length < 1) return reply("Masukkan teksnya\nContoh : #glitch teks1/teks2")
gh = args.join(" ")
teks1 = gh.split("/")[0];
teks2 = gh.split("/")[1];
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/textpro/tiktok?teks1=${teks1}&&teks2=${teks2}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'textpro':
menu =`*This is list of TextPro*

/glitch teks1/teks2
/wings
/beach
/mascot
/neon
`
conn.sendMessage(from, menu, text, {quoted: mek})
break

case 'photooxy':
menu =`*PhotoOxy*

/fire
/metalicgold
/sky
/cup
/cup2
/cup3
/coofe
/bluelove
/redlove
/burn
/lovemsg
/grass
/woodlove
/woodflower
/wolfmetal
/ocean
/goldflower
/woodenfall
/glowtext
/yellowtext
/orangetext
/honey
/nature
/stars
/glowrainbow
/fur
/cromium
/hellokitty
/glowrainbow2
/yellow3d
/watermelon
/matrix
/material
/glowbutterfly
/blackwood
/multimetal
/harrypotter
/lightblue
/scary
/purplesmoke
/partyneon
/multimetalic
`
conn.sendMessage(from, menu, text, {quoted: mek})
break

case 'fire':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/flaming-fire?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'metalicgold':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/metalic-gold?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'sky':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/shadow-sky?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'cup':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/teks-cup?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'bluelove':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/romantic-messages?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'burn':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/burn-paper?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'cup2':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/funny-cup?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'lovemsg':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/love-messages?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'grass':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/under-grass?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'redlove':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/romantic-double?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break

case 'cup3':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/coffee-cup?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'woodlove':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/wood-hearth?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'woodflower':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/wooden-boards?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'wolfmetal':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/wolf-metal?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'ocean':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/underwater?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'goldflower':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/golden-roses?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'woodenfall':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/under-fall?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'glowtext':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/neon-glow?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'yellowtext':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/3d-glowing?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'orangetext':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/vintage-text?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'honey':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/honey-text?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'nature':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/green-leaves?teks=${encodeURI(q)}&&font=1`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'glowrainbow':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/glow-rainbow?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'stars':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/write-stars?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'fur':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/fur-effect?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'cromium':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/crisp-chrome?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'hellokitty':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/embroidery-text?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'glowrainbow2':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/3d-rainbow-bg?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'yellow3d':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/striking-3d?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'watermelon':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/summer-watermelon?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'matrix':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/under-web-matrix?teks=${encodeURI(q)}&&background=2`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'material':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/multi-material?teks=${encodeURI(q)}&&background=5`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'glowbutterfly':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/butter-fly?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'blackwood':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/wooden-3d-black?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'multimetal':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/banner-metal?teks=${encodeURI(q)}&&background=0`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'harrypotter':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/harry-poter?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'lightblue':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/neon-lights?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'coofe':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/put-coffee-cup?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'scary':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/text-on-scary?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'purplesmoke':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/smoke-typography?teks=${encodeURI(q)}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'partyneon':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/party-neon?teks=${encodeURI(q)}&&background=3`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'multimetalic':
if (args.length < 1) return reply("Masukkan teksnya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/dark-metal?teks=${encodeURI(q)}&&background=1`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Sudah jadi kak_"})
break
case 'anime':
if (args.length < 1) return reply("Masukkan nama animenya")
imagt = await getBuffer(`http://hadi-api.herokuapp.com/api/waifusrc?nama=${q}`)
conn.sendMessage(from, imagt, image, {quoted: mek, caption: "_Itu kak animenya_"})
break
case 'command':
               list = []
               listmenu = [`neon-devil-wings`,`wibumenu`,`stickermenu`]
               listmenuu = [`wings`,`technology`, `black bear`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Menu ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,  `*Hallo Kak* ${pushname}\nJangan lupa Makan🤡`, list)
               break

        case 'menu':
        case 'help':
       /* const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 1000 * (Math.pow(2, userLevel) - 1)
					resul = `*LEVEL*\n  ─ *Name* : ${pushname}\n*Nomor* : ${sender.split("@")[0]}\n*User XP* : ${userXp}/${requiredXp}\n*User Level* : ${userLevel}`
					conn.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})*/
        menu =`*Bot WhatsApp*\n`
menuu =`*List Menu*

*Group Menu* 
 ${prefix}hidetag
 ${prefix}tagall
 ${prefix}kick
 ${prefix}grup open/close
 ${prefix}admin
 ${prefix}unadmin
 
*Download Menu*
 ${prefix}ytsearch
 ${prefix}ytmp3
 ${prefix}ytmp4
 ${prefix}get
 ${prefix}image
 ${prefix}tiktok
 ${prefix}mediafire
 ${prefix}igdl

*Maker Menu*
 ${prefix}attp
 ${prefix}tahta
 ${prefix}photooxy
 ${prefix}textpro

*Tools Menu*
 ${prefix}sticker
 ${prefix}toimg
 ${prefix}tovideo
 ${prefix}togif
 ${prefix}tomp3
 
*Fun Menu*
 ${prefix}tebakgambar
 ${prefix}suit
 ${prefix}caklontong
 ${prefix}family100
 ${prefix}katabijak
 ${prefix}motivasi
 ${prefix}pantun
 ${prefix}bucin
 ${prefix}fakta
`

/**Info Today* 
 *Pukul :* ${moment().utcOffset('+0700').format('HH:mm')}
 *Tanggal :* ${moment.tz('Asia/Jakarta').format('DD/MM')}
 *User :* ${pushname}*/

              /* buttons = [{buttonId: `${prefix}command`,buttonText:{displayText: 'SEMUAH FITUR😈'},type:1},{buttonId: `${prefix}vn`,buttonText:{displayText: 'MENU VN🗣️'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'SEDEKAH🤡'},type:1}]

               imageMsg = (await conn.prepareMessageMedia(fs.readFileSync(`./media/sherlynn.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/sherlynn.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: 'ItsMeBotz', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              conn.relayWAMessage(prep)*/
              sendButTexxt(from, `${menu}`, `${menuu}\n\nBot WhatsApp`, [{buttonId:`${prefix}youtube`,buttonText:{displayText:'YouTube'},type:1},{buttonId:`Oke`,buttonText:{displayText:'Oke'},type:1}], {contextInfo: {mentionedJid: ["6281232646925@s.whatsapp.net", `${sender}`]}})
                break
case 'mr':
if (!mek.key.fromMe) return
buttons = [{buttonId: 'e',buttonText:{displayText: 'Keren'},type:1},{buttonId:'ig',buttonText:{displayText:'Ngga'},type:1}]

               buttonsMessage = {
               contentText: `Keren gak Minecraft nya`,
               footerText: 'WhatsApp',
               buttons: buttons,
               headerType: 1
}

               prep = await conn.prepareMessageFromContent("6288290272180@s.whatsapp.net",{buttonsMessage},{})
               conn.relayWAMessage(prep)
               
               break
        case 'rolegtli':
        rolegtli =`*Hallo, Senang bertemu anda!*
*Ingin melihat server GTPS dengan Role murah?*
*Cek list Server GTLI dibawah!*`
               buttons = [{buttonId: `${prefix}pricegtli`,buttonText:{displayText: 'CEK LIST'},type:1}]

               imageMsg = (await conn.prepareMessageMedia(fs.readFileSync(`./media/sherlynn.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/sherlynn.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${rolegtli}`,
               footerText: 'ItsMeBotz', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              conn.relayWAMessage(prep)
                break
case 'po':
if (!mek.key.fromMe) return
conn.sendMessage(from, "hello", text, {contextInfo: {externalAdReply: {title: "Hallo", body: "Hallo", mediaType: 2, mediaUrl: "https://www.instagram.com/p/CWkgL03Fyt8/?utm_medium=share_sheet", thumbnail: fs.readFileSync(`./media/canss.jpg`)}}})
break
                break
         case 'rolegtivd':
        rolegtivd =`*Hallo, Senang bertemu anda!*
*Ingin melihat server GTPS dengan Role murah?*
*Cek list Server GTIVD dibawah!*`
               buttons = [{buttonId: `${prefix}pricegtivd`,buttonText:{displayText: 'CEK LIST'},type:1}]

               imageMsg = (await conn.prepareMessageMedia(fs.readFileSync(`./media/sherlynn.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/sherlynn.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${rolegtivd}`,
               footerText: 'ItsMeBotz', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              conn.relayWAMessage(prep)
                break
        
       case 'othercmd':
               list = []
               listmenu = [`ruleswave`]
               listmenuu = [`Rules Guild`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'ItsMeBotz' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,  `*Hallo Kak* ${pushname}\nCek Price Role Disini!`, list)
               break
               case 'vn':
               list = []
               listmenu = [`audio1`,`audio2`,`audio3`,`audio4`,`audio5`,`audio6`,`audio7`]
               listmenuu = [`AUDIO 1`,`AUDIO 2`,`AUDIO 3`,`AUDIO 4`,`AUDIO 5`,`AUDIO 6`,`AUDIO 7`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Silahkan di pilih' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        footerText: 'case by Herman Chanel', imageMessage: imageMsg,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,   `Subscribe https://youtube.com/channel/UCPhU6uA_3gUaEvyrFZFgJqg`, list)
               break
//------------------< Game >------------------- 
        case 'limitgame': 
        case 'balance': 
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               break
         case 'gelud':
               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik ${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               conn.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        case 'resetgame':
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              conn.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              gameAdd(sender, glimit)
              break

case 'caklontong':
result = await fetchJson (`https://x-restapi.herokuapp.com/api/caklontong?apikey=BETA`)
soalcak = result.soal
jawabancak = result.jawaban
soalnya = `*${result.soal}?*`
conn.sendMessage(from, soalnya, text, {quoted: mek})
await sleep(80000)
reply("*Jawaban :* " + jawabancak)
break
case 'motivasi':
bon = await fetchJson(`https://x-restapi.herokuapp.com/api/random-motivasi?apikey=BETA`)
pesanya =`*_Quotes motivasi_*

_${bon.motivasi}_
`
conn.sendMessage(from, pesanya, text, {quoted: mek})
break
case 'bucin':
bon = await fetchJson(`https://x-restapi.herokuapp.com/api/random-bucin?apikey=BETA`)
pesanya =`*_Bucin Quotes_*

_${bon.bucin}_
`
conn.sendMessage(from, pesanya, text, {quoted: mek})
break
case 'pantun':
bon = await fetchJson(`https://x-restapi.herokuapp.com/api/random-pantun?apikey=BETA`)
pesanya =`*Pantun*

${bon.pantun}
`
conn.sendMessage(from, pesanya, text, {quoted: mek})
break
case 'fakta':
bon = await fetchJson(`https://x-restapi.herokuapp.com/api/random-fakta?apikey=BETA`)
pesanya =`*_Bucin Quotes_*

_${bon.fakta}_
`
conn.sendMessage(from, pesanya, text, {quoted: mek})
break
case 'katabijak':
bon = await fetchJson(`https://x-restapi.herokuapp.com/api/random-katabijak?apikey=BETA`)
pesanya =`*_Bijak Quotes_*

_${bon.katabijak}_
`
conn.sendMessage(from, pesanya, text, {quoted: mek})
break
case 'family100':
result = await fetchJson (`https://x-restapi.herokuapp.com/api/family100?apikey=BETA`)
famili = `*${result.soal}?*`
jawabanfamili = result.jawaban
conn.sendMessage(from, famili, text, {quoted: mek})
await sleep(80000)
reply("*Jawaban :* " + jawabanfamili)
break
       
       case 'tebaklagu':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              conn.sendMessage(from, ini_buffer, audio, {mimetype: "audio/mp4", quoted: mek}).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
}
              gameAdd(sender, glimit)
              break
       case 'tebaktebakan':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              conn.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break
       case 'kuismath':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              conn.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
}
              gameAdd(sender, glimit)
              break
       case 'tebakgambar':
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://x-restapi.herokuapp.com/api/tebak-gambar?apikey=BETA`)
              ini_image = get_result.img
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              conn.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(90000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
              gameAdd(sender, glimit)
              break
       case 'siapaaku':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              conn.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       
       
      
       case 'slot':
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit': //nyolong dari zenz
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//------------------< Sewa >-------------------
       case 'sewa':
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply(`Penggunaan :\n${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              reply(`Penggunaan :\n${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*➤ ID User :* ${i.id} \n*➤ Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              reply(txtnyee)
              break
       case 'sewacheck':
       case 'ceksewa': 
              if (!isGroup) return reply(mess.only.group)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➤ *ID User*: ${from}\n➤ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              reply(premiumnya)
              break
         
//------------------< Premium >-------------------
       case 'premium': 
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
       case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) return reply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
       
       case 'addcmd': 
       case 'setcmd':
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah ${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break


       case 'delcmd':
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah ${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break


       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break

 
case 'igvid':
try {
if (!q) return reply("Linknya mana woi")
pont = await fetchJson(`https://x-restapi.herokuapp.com/api/ig-dl?url=${q}&apikey=BETA`)
yuffer = await getBuffer(pont.linkdownload)
conn.sendMessage(from, yuffer, video)
} catch (e) {
reply(String(e))
}
brek
break
       /*case 'igdl2':
       case 'instagram2':
              try {
              if (!q) return reply('Linknya?')
              reply(mess.wait)
              res = await axios.get(`https://api.zeks.xyz/api/ig?apikey=${setting.zekskey}&url=${args[0]}`)
              for(let i = 0; i < res.data.result.length; i++) {
              sendMediaURL(from, res.data.result[i].url, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM MEDIA*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\` Username : ${res.data.owner}\`\`\`
\`\`\` Caption : ${res.data.caption}\`\`\``, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break*/
/*case 'r76m':
conn.groupAdd(from, ["6281224432109@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281210160358@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281220776447@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281251287813@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281236324627@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281255240090@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281273621465@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281290880575@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281313850195@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281315504797@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281325770987@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281326238057@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281329054644@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281330564209@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281332637890@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281336511242@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281343584169@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281353225374@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281358041125@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281368296255@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281378695708@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281380316101@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281392093171@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281584839296@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281909484103@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281933500143@s.whatsapp.net"])
‎conn.groupAdd(from, ["6281959978570@s.whatsapp.net"])
‎conn.groupAdd(from, ["6282122695278@s.whatsapp.net"])
‎conn.groupAdd(from, ["6282139268900@s.whatsapp.net"])
‎conn.groupAdd(from, ["6282151986354@s.whatsapp.net"])
‎conn.groupAdd(from, ["6282144391193@s.whatsapp.net"])
‎conn.groupAdd(from, ["6282179395219@s.whatsapp.net"])
‎conn.groupAdd(from, ["6282192425234@s.whatsapp.net"])
‎conn.groupAdd(from, ["6282249291451@s.whatsapp.net"])
‎conn.groupAdd(from, ["6282267278159@s.whatsapp.net"])
‎conn.groupAdd(from, ["6282286741463@s.whatsapp.net"])
‎conn.groupAdd(from, ["6282295360998@s.whatsapp.net"])
‎conn.groupAdd(from, ["6282338851526@s.whatsapp.net"])
‎conn.groupAdd(from, ["6282399255216@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283101499281@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283117674118@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283123727298@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283125034688@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283141525783@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283173399516@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283191364966@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283197368891@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283832650680@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283841431000@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283842343786@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283842738643@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283851524352@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283870313618@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283872681618@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283874366564@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283878837772@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283879476358@s.whatsapp.net"])
‎conn.groupAdd(from, ["6283891536003@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285156300845@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285161987474@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285211527147@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285162667970@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285257296539@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285272287751@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285273083592@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285274904728@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285336565338@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285606254221@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285607787830@s.whatsapp.net"])
‎conn.groupAdd(from, ["628568390231@s.whatsapp.net"])
‎conn.groupAdd(from, ["62856077878302@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285706992143@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285707692311@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285713371088@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285714095494@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285717183998@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285725397493@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285735153103@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285763057241@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285773419879@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285774035498@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285781156659@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285784453174@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285785545891@s.whatsapp.net"])
‎conn.groupAdd(from, ["62857870868547@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285791677204@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285807231361@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285846135801@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285858267143@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285865444673@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285881734209@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285882484990@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285885240614@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285943424373@s.whatsapp.net"])
‎conn.groupAdd(from, ["6285954327042@s.whatsapp.net"])
‎conn.groupAdd(from, ["6287820508415@s.whatsapp.net"])
‎conn.groupAdd(from, ["6287828137328@s.whatsapp.net"])
‎conn.groupAdd(from, ["6287833395054@s.whatsapp.net"])
‎conn.groupAdd(from, ["6287838237928@s.whatsapp.net"])
‎conn.groupAdd(from, ["6287857613839@s.whatsapp.net"])
‎conn.groupAdd(from, ["6287881859617@s.whatsapp.net"])
‎conn.groupAdd(from, ["6287890794326@s.whatsapp.net"])
‎conn.groupAdd(from, ["62881023767905@s.whatsapp.net"])
‎conn.groupAdd(from, ["62881023827242@s.whatsapp.net"])
break*/
       case 'igdl': 
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
             .catch((err) => { reply(String(err)) })
              break
       
       case 'image':
       case 'gimage':
       case 'googleimage':
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
      case 'ytmp3':
            
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `
*Data Berhasil Didapatkan!*
\`\`\` Title : ${res[0].judul}\`\`\`
\`\`\` Ext : MP3\`\`\`
\`\`\` Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
case 'ytmp43':
if (!mek.key.fromMe) return reply("Hmmm")
bupjson = await fetchJson(`http://hadi-api.herokuapp.com/api/ytvideo?url=${q}`)
thumb = await getBuffer(bupjson.result.album)
vidnya = await getBuffer(bupjson.result.download_video)
tampilann = `*YouTube Mp4*

*Judul :* ${bupjson.result.title}
*desc :* ${bupjson.result.desc}
*viewer :* ${bupjson.result.viewer}
*like :* ${bupjson.result.like}

*Media akan dikirim beberapa saat*
*Jika error gunakan command .ytmp42*`
conn.sendMessage(from, thumb, image, {quoted: mek, caption: tampilann})
conn.sendMessage(from, vidnya, video, {quoted: mek})
break
 
case 'ytmp42':
fjson = await fetchJson(`https://x-restapi.herokuapp.com/api/ytmp4?url=${q}&apikey=BETA`)
thumbn = await getBuffer(fjson.thumb)
dlvid = await getBuffer(fjson.dl_link)
tampilany = `*YouTube mp4*

*Judul :* ${fjson.title}
*Size :* ${fjson.filesize}

*Media akan dikirim beberapa saat*`
conn.sendMessage(from, thumbn, image, {quoted: mek, caption: tampilany})
conn.sendMessage(from, dlvid, video, {quoted: mek})
break

     case 'ytmp4':
            
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `
*Data Berhasil Didapatkan!*
\`\`\` Title : ${res[0].judul}\`\`\`
\`\`\` Ext : MP4\`\`\`
\`\`\` Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
     case 'ytmp4hd':
     case 'ythd':
            
            if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`
*Data Berhasil Didapatkan!*
\`\`\` Title : ${title}\`\`\`
\`\`\` Kualitas* : 720p\`\`\`
\`\`\` Size* : ${filesizeF}\`\`\`
\`\`\` Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`
*Data Berhasil Didapatkan!*
\`\`\` Title : ${title}\`\`\`
\`\`\` Kualitas : 720p\`\`\`
\`\`\` Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break
        /*case 'google':
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              googleIt({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
               conn.sendMessage(from, ss, image, {caption: vars, quoted : mek})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break*/
case 'google':
				
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://x-restapi.herokuapp.com/api/google-search?q=${q}&apikey=BETA`)
                    gt_result = get_result.data
                    ini_txt = 'Google Search : \n'
                    for (var x of gt_result) {
                        ini_txt += `• Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break 
        case 'mediafire':
               
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `
*Data Berhasil Didapatkan!*
\`\`\` Nama : ${res[0].nama}\`\`\`
\`\`\` Ukuran : ${res[0].size}\`\`\`
\`\`\` Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
             break
       case 'tiktokwm': 
       case 'ttdl':
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { reply(String(err)) })
             break
      case 'tiktok': 
      case 'tiktoknowm':
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
case 'tiktokbut':
              
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              buttons = [{buttonId: `${prefix}tiktoknowm ${q}`,buttonText:{displayText: `🎥 Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Mp3'},type:1}]
              imageMsg = (await conn.prepareMessageMedia(fs.readFileSync(`./media/sherlynn.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/sherlynn.jpg`)})).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Subscribe Yt Zero YT7\n Helpme tu 1k subscriber', imageMessage: imageMsg,
              contentText:`Silahkan pilihan media yg mau di download kak:v`,buttons,headerType:4}
              prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              conn.relayWAMessage(prep)
              break
      
      case 'fb':
      case 'facebook':
             if (!q) return
             reply(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=0963ec745dde`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             reply(`${e}`)
}
             break
      case 'twitter':
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'brainly':
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(res)
})
             break
      
            case 'waifu':
            
v = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
inifile = sendMediaURL(from, v.url, )
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}nhentaibot`,buttonText:{displayText:'NHENTAI BOT'},type:1}]
              imageMsg = ( await conn.prepareMessage(from, inifile, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              conn.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
break
       case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
              if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://dha-chan02.github.io`)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}nhentaibot`,buttonText:{displayText:'NHENTAI BOT'},type:1}]
              imageMsg = ( await conn.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await conn.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              conn.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
        case 'music':
case 'lagu':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=${setting.zekskey}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				conn.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})
					break
                 case 'play':
				case 'ytplay':
				gog = args.join(" ")
              bonn = await fetchJson(`http://hadi-api.herokuapp.com/api/ytplay?q=${gog}`)
              title = `${bonn.result.title}`
              thumb = await getBuffer(bonn.result.thumb)
              ukuran = `${bonn.result.size}`
              tipet = `${bonn.result.ext}`
              resolusi = `${bonn.result.resolution}`
              mp3 = await getBuffer(bonn.result.download_audio)
              mentu = `*YT Play YouTube Mp3*
              
Title: ${title}
Type: ${tipet}
Resolution: ${resolusi}
Size: ${ukuran}

Media akan dikirim, tunggu beberapa saat.
*Jika error gunakan command #music*`
conn.sendMessage(from, thumb, image, {quoted: mek, caption: mentu})
conn.sendMessage(from, mp3, audio, {mimetype: 'audio/mp4',quoted: mek})
break
case 'ytmppppp':
				gog = args.join(" ")
              bonn = await fetchJson(`http://hadi-api.herokuapp.com/api/ytplay?q=${gog}`)
              title = `${bonn.result.title}`
              thumb = await getBuffer(bonn.result.thumb)
              ukuran = `${bonn.result.size}`
              tipet = `${bonn.result.ext}`
              resolusi = `${bonn.result.resolution}`
              mp4 = await getBuffer(bonn.result.download_video)
              mentu = `*Play YouTube Mp3*
              
Title: ${title}
Type: ${tipet}
Resolution: ${resolusi}
Size: ${ukuran}

Media akan dikirim, tunggu beberapa saat.`
conn.sendMessage(from, thumb, image, {quoted: mek, caption: mentu})
conn.sendMessage(from, mp4, video, {quoted: mek})
break
         
       case 'yts':
       case 'ytsearch':
              
              reply(mess.wait)
              try {
              res = await yts(args.join(" "))
              a = `
*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\` Title : ${i.title}\`\`\`
\`\`\` Views : ${i.views}\`\`\`
\`\`\` Upload : ${i.ago}\`\`\`
\`\`\` Durasi : ${i.timestamp}\`\`\`
\`\`\` Channel : ${i.author.name}\`\`\`
\`\`\` Link : ${i.url}\`\`\``
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await conn.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
       case 'imgtourl':
       case 'img2url':
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  conn.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               conn.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
               break
         case 'asupan': // shansekai                
               if (!isPremium) return reply(mess.only.premium)
               reply(mess.wait)
               asupan()
              .then(async (body) => {
               asupann = body.split('\n')
               asupanx = asupann[Math.floor(Math.random() * asupann.length)]
               sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, '\`\`\`ASUPAN BRO GUA DAPAT DARI ZERO YT7\`\`\`')
               console.log('Success sending video!')
})
              .catch(async (err) => {
               console.log(err)
               reply(`${err}`)
})
               break              
        case 'nulis':
        case 'tulis':
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               conn.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break

       case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break

      
      
//------------------< Sticker/Tools >-------------------

       case 'dadu': // by CHIKAA CHANTEKKXXZZ
              reply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break              
      case 'doge':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':
       case 'gawrgura':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'animestick':
       case 'stickeranime':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       
       
case 'ttp':
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('wait....')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
       case 'attp':
       try {
              if (args.length == 0) return reply(`Example: ${prefix + command} kurr`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              conn.sendMessage(from, buffer, sticker, { quoted: mek })
              } catch(e) {
              	reply(e)
              }
              break
       
       case 'loliv':
       case 'lolivid':
       case 'lolivideo':
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
       case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await conn.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await conn.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            conn.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break    
       case 'take':
       case 'colong':
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.strngify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await conn.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, conn, mek, from)
              break
       case 'delwm':
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await conn.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, conn, mek, from)
              break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await conn.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              conn.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              conn.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await conn.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              conn.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              conn.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
      case 'toimg':
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await conn.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              conn.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
       case 'smeme': 
reply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  conn.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break

       case 'memeimg':
       case 'memegen':                    
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await conn.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
        case 'togif':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await conn.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               conn.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await conn.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               conn.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tomp3':
               if (isQuotedVideo){
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await conn.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               conn.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
               fs.unlinkSync(ran)
})
               } else {
               reply(mess.wrongFormat)
}
               break      
//------------------<18+ Menu>-----------------------   
       case 'randombokep':
              bokep = body.slice(1)
              const bo =['https://www.mediafire.com/download/8hnhjcf3pseubgy','https://www.mediafire.com/download/cty9phda3d1s62u','https://www.mediafire.com/download/8hnhjcf3pseubgy']
              const kep = bo[Math.floor(Math.random() * bo.length)]
              conn.sendMessage(from, '*PERMINTAAN:* '+bokep+'\n*DOSA TANGGUNG PRIBADI*\n*NI BRO FREE BUAT KAMU DOWNLOAD SENDIRI:* '+ kep, text, { quoted: ftoko, caption: `NI BOKEP SAYA DAPAT DARI *©Herman Botz* DOSA TANGGUNG SENDIRI🗿`})
              break
                
case 'asupan1':
			conn.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				conn.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break        
case 'asupan2':
			conn.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan2.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				conn.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break 				                                 
//------------------<WAR MENU>---------------    
 case 'pvp':
if (!mek.key.fromMe && !isOwner) return
tapib1 = fs.readFileSync('./media/audio/numayei.mp3')
conn.sendMessage(from, tapib1, document, { quoted: mek, filename:`Zero YT7 ~ 404 ${vipi}.mp3`, mimetype: 'audio/application' })
await reply('Bang mau nanya')
break  

case 'plp':
res = await conn.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
"description": `\`\`\`Use The Bot As Best You Can And Dont Misuse The Bot Feature\`\`\``,
"buttonText": vipi,
"listType": "SINGLE_SELECT",
"sections": [
{
"title": vipi,
"rows": [
{
"title": "Banned",
"rowId": "Banned"
}
]
}
]
}
}, {quoted:mek})
conn.relayWAMessage(res)
break   
case 'pcp':
if (!mek.key.fromMe && !isOwner) return
buf = Mfake
imeu = await conn.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await conn.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `Herman Bot ~ 404 ${vipi}`,
"description": `${virtex}`,
"currencyCode": "IDR",
"priceAmount1000": "99999999999999999999999999999999",
"productImageCount": 1
},
"businessOwnerJid": "6288224859350@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:bugtrol, contextInfo:{}}) 

conn.relayWAMessage(res)
break
// Bug Trolli 

//------------------<HEWAN MENU>---------------
                    
//------------------< Ingfo Bot >-------------------
      case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              break
       case 'youtube': 
              reply(`*Bantu Subscribe agar chanel berkembang*\nhttps://youtu.be/EdPhHMoPL5s`)
              break
case 'infoig': 
              reply(`*Bantu Subscribe agar chanel berkembang*\nhttps://www.instagram.com/p/CTwjxbRpTCe/?utm_medium=copy_link`)
              break
       case 'masukandata':
             reply(`*「BOT MELAYANI」*\n\n━━━━━━━━━━━━━━━━━━━━\n\nMASUKKANA DATA BERIKUT\n*•NAMA GAME:*\n*•ID GAME:*\n*•USER NAME:*\n━━━━━━━━━━━━━━━━━━━━\n*NOTE:*\n*1.* _JANGAN LUPA BUKTI TRXNYA_\n*2.* _OTOMATIS PESANAN_\n_LANSUNG DI PROSES_\n*3.* _PESANAN ANDA DI PROSES_\n_OLEH_\n\n   *©HermanBot*\n\n_JIKA PESANAN ANDA LOW_\n_PROSES MOHON BERSABAR_\nwa.me/6283146208804`)
              break
      case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
      case 'status':
              groups = conn.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await conn.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\` Group Chats : ${groups.length}\`\`\`
\`\`\` Private Chats : ${privat.length}\`\`\`
\`\`\` Total Chats : ${totalChat.length}\`\`\`
\`\`\` Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\` Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\` Baterai : ${baterai}% ${charger}\`\`\`
\`\`\` Ram Usage : ${ram2}\`\`\`
\`\`\` Platform : ${os.platform()}\`\`\`
\`\`\` Hostname : ${os.hostname()}\`\`\`
\`\`\` Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\` Wa Version: ${conn.user.phone.wa_version}\`\`\`
\`\`\` Os Version: ${conn.user.phone.os_version}\`\`\`
\`\`\` Device Manufacturer: ${conn.user.phone.mekice_manufacturer}\`\`\`
\`\`\` Device Model: ${conn.user.phone.mekice_model}\`\`\`
\`\`\` Os Build Number: ${conn.user.phone.os_build_number}\`\`\``
             reply(teks)
             break  
//------------------< Owner >-------------------
      case 'addupdate':
             if (!isOwner) return reply(mess.only.owner)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'update':
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset':
             if (!isOwner) return reply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
             fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
             textImg('Oke Desu ~')
             break
      case 'exif':
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break	
//-----------add hiburan   
case 'tupai':
				reply('PROSES')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await conn.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						conn.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: troli})
						fs.unlinkSync(ran)
					})
				break 
case 'addstik':
		if (!isOwner) return reply (mess.only.owner)
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await conn.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
				conn.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: troli})
				break
case 'addimg':
				if (!isOwner) return reply (mess.only.owner)
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await conn.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				conn.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: troli})
				break
				
case 'addvid':
				if (!isOwner) return reply (mess.only.owner)
				if (!isQuotedVideo) return reply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await conn.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				conn.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: troli })
				break
			        
case 'addvn':
				if (!isOwner) return reply (mess.only.owner)
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await conn.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				conn.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: troli})
				break 
case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				conn.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": setiker } })
				break				
case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				conn.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": setiker } })
				break				
case 'listvid':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				conn.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": imagenye } })
				break				
case 'listvn':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				conn.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": audionye } })
				break	
case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				conn.sendMessage(from, result, sticker,{quoted:troli})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break				
case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				conn.sendMessage(from, buffer, image, { quoted: troli, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				conn.sendMessage(from, buffer, video, { quoted: troli, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break				
case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				conn.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: troli, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break										      
      case 'join': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = conn.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'eval':
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             break
      case 'getquoted':
             reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
             break
      case 'bc':
      case 'broadcast':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await conn.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await conn.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             conn.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
conn.sendMessage(_.jid, 
			{"contentText": `*「 Siaran HermanBot 」*\n#Ijin Siaran\n*Isi Pesan :* ${body.slice(4)}`,
			"footerText": 'Hêrmåñ ßð†z',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "LIST MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
      case 'clearall':
             if (!isOwner) return  reply(mess.only.owner)
             anu = await conn.chats.all()
             conn.setMaxListeners(25)
             for (let _ of anu) {
             conn.deleteChat(_.jid)
}
             reply('Sukses delete all chat :)')
             break
      case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'start':
             if (!isOwner) return 
             reply(`OTEWE MENGHIDUPKAN MESIN😗`)
             await sleep(3000)
             process.exit()
             break             
      case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = conn.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             conn.groupLeave(id)
}
             break
//------------------< G R U P >-------------------
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
				linkgc = await conn.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group ${groupName}`
				conn.sendMessage(from, yeh, text, {quoted: mek})
				break
            case 'kick':
             if (!mek.key.fromMe) return reply("_Owner Only_")
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             reply("🗿")
             break
      case 'add':
 if (!isGroupAdmins) return reply("Admin only")
      if (!isGroup) return reply("_Owner Only_")
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             conn.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             conn.groupAdd(from, [entah])
}
             break
case 'admin':
             if (!isBotGroupAdmins) return reply("_Bot Admin Only_")
             if (!isGroupAdmins) return reply("_Only Admin_")
            if (!isGroup) return reply("_Group Admins Only_")
             if (!isQuotedtext && !isQuotedImage && !isQuotedVideo && !isQuotedSticker && !isQuotedAudio) return reply("_Reply pesan member yang ingin dijadikan admin_")
             entah = mek.message.extendedTextMessage.contextInfo.participant
             conn.groupMakeAdmin(from, [entah])
             reply('🗿')
break
case 'unadmin':
           if (!isBotGroupAdmins) return reply("_Bot Admin Only_")
             if (!isGroupAdmins) return reply("_Only Admin_")
            if (!isGroup) return reply("_Group Admins Only_")
             if (!isQuotedtext && !isQuotedImage && !isQuotedVideo && !isQuotedSticker && !isQuotedAudio) return reply("_Reply pesan member yang ingin dijadikan admin_")
             entah = mek.message.extendedTextMessage.contextInfo.participant
             conn.groupDemoteAdmin(from, [entah])
             reply('🗿')
break
 case 'raw':
tksnya = mek
conn.sendMessage(from, tksnya, text)
break
       case 'setgrupname':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              conn.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              conn.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await conn.downloadMediaMessage(encmedia)
              conn.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       case 'me':
       case 'profile':
              let Levelnye = level.getLevelingLevel(sender, _level)
              let Xpluu = level.getLevelingXp(sender, _level)
              let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
              conn.updatePresence(from, Presence.composing)
              try {
              profil = await conn.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await conn.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = conn.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              buff = await getBuffer(profil)
              conn.sendMessage(from, buff, image, {quoted: freply, caption: profile})
              break
       case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
       case 'infogrup':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await conn.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              conn.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
              case '@':
       case 'tagall':
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = ` `
              for (let i of groupMembers){
              txti += `@${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       /*case 'kickall': // Anti Banned
              if (!isGroupAdmins) return reply(mess.only.admin)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break*/
       case 'leave':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              conn.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(conn.chats.get(ido).presences), conn.user.jid]
             conn.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
case '.':
      case 'hidetag':
      if (!mek.key.fromMe && !isGroupAdmins) return reply("_Admin & Owner Only_")
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
case 'tnt':
hideTag2("120363023239180947@g.us", fs.readFileSync(`./kucing.webp`), sticker)
break
      case 'sider':
             if (!isGroupAdmins) return reply(mess.only.admin)
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await conn.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
//------------------< Fun >-------------------
    case 'public':
                if (!mek.key.fromMe && !isOwner) return reply('Fitur Khusus Owner!!')
                if (banChats === false) return
                // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                setting.banChats = false
                banChats = false
                fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                reply(`「 *PUBLIC-MODE* 」`)
                break
        case 'self':
                if (!mek.key.fromMe && !isOwner) return reply('Fitur Khusus Owner!!')
                if (setting.banChats === true) return
                setting.banChats = true
                uptime = process.uptime()
                // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                banChats = true
                fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                reply(`「 *SELF-MODE* 」`)
                break
       case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case 'mining':
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'toxic':
              Toxic().then(toxic => {
              reply (toxic)
})
              break
        case 'citacita':
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              conn.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: mek})
              break
       case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              conn.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
              break
       case 'rate':
       case 'nilai':
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              conn.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
              break
       case 'gantengcek':
       case 'cekganteng':
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              conn.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              break
       case 'cantikcek':
       case 'cekcantik':
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              conn.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              break
       case 'cekwatak':
              var namao = pushname
              var prfx = await conn.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              conn.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
              break
       case 'bisakah':
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              conn.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
       case 'kapankah':
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              conn.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
       case 'truth':
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              conn.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
              break
       case 'dare':
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              conn.sendMessage(from, buffer, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
              break		
       case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//------------------< Lainnya >-------------------

				case 'ban':
					conn.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.owner)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
				case 'unban':
					if (!isOwner)return reply(mess.only.owner)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
        case 'getpp':
               if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
               linkpp = await conn.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               conn.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = mek.message.extendedTextMessage.contextInfo.participant
               linkpp = await conn.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               conn.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await conn.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               conn.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        /*case 'd':
        case 'del':
        case 'delete': // MR.CYSER
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               conn.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break*/
        case 'tes':
               reply('Okeh nyala')
               break
        case 'info':
        case 'infobot':  // Jangan Di Ubah Plise
               gopeynya = 'https://i.ibb.co/kynNYTh/ganteng.jpg'
               thankslort = `*[━━━━ INFO BOT ━━━━]*\n*➤ Nama : Hêrmåñ ßð†z*\n*➤ Pukul : ${moment().utcOffset('+0700').format('HH:mm')}*\n*➤ Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM')}*\n*➤ Tipe : Node Js*\n*➤ Version : 3.3*\n*[━━━━━━━━━━━━━━━━━━]*`
             conn.sendMessage(from, await getBuffer(gopeynya), image, {quoted: ftoko, caption: thankslort })
             break
      case 'get':
      case 'fetch': //ambil dari nuru
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg': 
case 'caripesan':  //by ANU TEAM
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('Maks 30!')
             reply(mess.wait)
             cok = await conn.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             conn.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
       
       case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              conn.sendMessage('6285157740529@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
       case 'readall':
              totalchat.map( async ({ jid }) => {
              await conn.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break	
              


                    
       case 'antilink':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
       case 'welcome':
               if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case 'mute':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
               if (args.length < 1) return reply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else {
               reply(`Pilih enable atau disable`)
}
               break
        
case 'group':
 		case 'grup': 
if (!isBotGroupAdmins) return reply("_Bot harus jadi Admin_")
if (!isGroupAdmins) return reply("_Group Admin Only_")
if (!isGroup) return reply("_In Group_")
if (args[0] === 'close') {
	reply("_Succes Close Group_")
						conn.groupSettingChange(from, GroupSettingChange.messageSend, true)
					} else
if (args[0] === 'open') {
	reply("_Succes Open Group_")
						conn.groupSettingChange(from, GroupSettingChange.messageSend, false)
}

					break                


default:
if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   conn.sendMessage(from, starGame, text, {quoted: troli, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		conn.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙??`, text, {quoted: troli, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  conn.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
conn.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:troli,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
conn.sendMessage(from, ucapan1, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
conn.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
conn.sendMessage(from, ucapan1, text, {quoted:troli, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 conn.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return conn.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith("=>")) {
if (!mek.key.fromMe) return reply("Nama lu Perwira?")
run = args.join(' ')
return eval(run)
}
if (budy.startsWith(">>")) {
return conn.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted:mek})
}
if (budy.startsWith(">")) {
if (!mek.key.fromMe) return
try {
var konsol = args.join(' ')
function Res(sul) {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sat)
}
return reply(bang)
}
reply(util.format(eval(`(async () => { ${konsol} })()`)))
} catch(e) {
emror = String(e)
reply(`${emror}`)
}
}

/*if (!isOwner) return
if (budy.startsWith('+')) {
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
 }*/
                
            
		/*if (budy.includes(`Bot`)) {

                  reply(`Iya gw Bot, Gak seneng lu?`)

                 }

       if (budy.includes(`@6283146208804`)) {
const baby = fs.readFileSync('./sticker/ivend.webp');
conn.sendMessage(from, baby, MessageType.sticker, {quoted: mek})

                  }


       if (budy.includes(`@6283146208804`)) {
const rell = fs.readFileSync('./sticker/rutzbot.webp');
conn.sendMessage(from, rell, MessageType.sticker, {quoted: mek})

                  }
                  
		if (budy.includes(`bot`)) {

                  reply(`Iya gw Bot, Gak seneng lu?`)

                  }


		if (budy.includes(`Assalamualaikum`)) {

                  reply(`Waalaikumsalam ${pushname}`)

                  }


		if (budy.includes(`P`)) {

                  reply(`Pa pe pa pe, Salam gblk`)

                  }


		if (budy.includes(`Kontol`)) {

                  reply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Ngentod`)) {

                  reply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Kntl`)) {

                  reply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Memek`)) {

                  reply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`memek`)) {

                  reply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`jembut`)) {

                  reply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`kontol`)) {

                  reply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`anj`)) {

                  reply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Anjg`)) {

                  reply(`_Jangan Toxic anj_`)

                  }


		if (budy.includes(`Bacot`)) {

                  reply(`Napa lu?`)

                  }*/
/*if (!isGroup && isCmd && !mek.key.fromMe){
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
conn.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/canss.jpg')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}*/
	} 
/*if (isGroup && body != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}*/
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}
