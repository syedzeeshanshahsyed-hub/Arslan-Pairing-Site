const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: SHANII_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function SHANII_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_SHANII_Tech = SHANI_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_SHANII_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_SHANI_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_SHANII_Tech.sendMessage(Qr_Code_By_SHANII_Tech.user.id, { text: 'SHANII-MD~' + b64data });
	
				   let SHANI_MD_TEXT = `
╔════════════════════◇
║『 SESSION CONNECTED』
║ ✨SHANI-MD🔷
║ ✨SHANIIMD OFFICIAL🔷
╚════════════════════╝


---

╔════════════════════◇
║『 YOU'VE CHOSEN Shanii-MD 』
║ -Set the session ID in Heroku:
║ - SESSION_ID: 
╚════════════════════╝
╔════════════════════◇
║ 『••• _V𝗶𝘀𝗶𝘁 𝗙𝗼𝗿_H𝗲𝗹𝗽 •••』
║❍ 𝐎𝐰𝐧𝐞𝐫: 923197718156
║❍ 𝐑𝐞𝐩𝐨: https://github.com/SHANI-MD/SHANI_MD 
║❍ 𝐖𝐚𝐆𝗿𝐨𝐮𝐩: https://chat.whatsapp.com/KRyARlvcUjoIv1CPSSyQA5?mode=wwt
║❍ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: https://whatsapp.com/channel/0029VarfjW04tRrmwfb8x306
║❍ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: https://www.instagram.com/syedwrites.050?igsh=bm5zdWQxcXM0aHEz
║ ☬ ☬ ☬ ☬
╚═════════════════════╝
𒂀 Enjoy SHANII-MD


---

Don't Forget To Give Star⭐ To My Repo
______________________________`;
	 await Qr_Code_By_SHANII_Tech.sendMessage(Qr_Code_By_SHANII_Tech.user.id,{text:SHANI_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Arslan_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					SHANII_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await SHANII_MD_QR_CODE()
});
module.exports = router
					
