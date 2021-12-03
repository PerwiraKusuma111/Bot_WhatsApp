const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./Perwira.js')
nocache('../Perwira.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (conn= new WAConnection()) => {
	conn.logger.level = 'warn'
	console.log(color(figlet.textSync('herman', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ GO 1K SUBSCRIBE ]\n', 'yellow'), color('Subscribe Herman Chanel', 'yellow'))
	console.log(color('GA SUBSCRIBE BAKAL EROR:V', 'pink'))
	console.log(color('\n\n[ FOLOW IG @cal_me_herman', 'red'))
	conn.browserDescription = ["herman", "Chrome", "3.0.0"];

	// Menunggu QR
	conn.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCAN KODE NYA KODE AKAN ANGUS DALAM WAKTU 20DETIK!'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && conn.loadAuthInfo(`./${setting.sessionName}.json`)
	conn.on('connecting', () => {
		console.log(color('[ Herman Chanel ]', 'yellow'), color('PROSES NYAMBUNG...'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "H",
    "HE",
    "HER",
    "HERM",
    "HERMAN",
    "HERMAN C",
    "HERMAN CH",
    "HERMAN CHA",
    "HERMAN CHAN",
    "HERMAN CHANE",
    "HERMAN CHANEL",
    "HERMAN CHANEL J",
    "HERMAN CHANEL JA",
    "HERMAN CHANEL JAN",
    "HERMAN CHANEL JAN L",
    "HERMAN CHANEL JAN LU",
    "HERMAN CHANEL JAN LUP",
    "HERMAN CHANEL JAN LUPA",
    "HERMAN CHANEL JAN LUPA S",
    "HERMAN CHANEL JAN LUPA SU",
    "HERMAN CHANEL JAN LUPA SUB",
    "HERMAN CHANEL JAN LUPA SUBS",
    "HERMAN CHANEL JAN LUPA SUBSC",
    "HERMAN CHANEL JAN LUPA SUBSCR",
    "HERMAN CHANEL JAN LUPA SUBSCRI",
    "HERMAN CHANEL JAN LUPA SUBSCRIB",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE G",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K S",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SU",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUB",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS N",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NG",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGA",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGAB",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGAB B",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGAB BS",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGAB BSA",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGAB BSA L",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGAB BSA LH"
  ]}

	//connect
	conn.on('open', () => {
		console.log(color('[ Herman Chanel ]', 'yellow'), color('BOT SUDAH AKTIF'));
	})

	// session
	await conn.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	conn.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	conn.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	conn.on('group-participants-update', async (anu) => {
		await welcome(conn, anu)
	})

	conn.on('chat-update', async (message) => {
		require('./Perwira.js')(conn, message)
	})
}

starts()
