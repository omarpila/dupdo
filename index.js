const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTc2Njc5ODAwMDQ5NjY0MDYw.GDDoGG.5km_QwAP15MWyNWQDPnBDtOhA0DbSk4rWszsLc"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Iniciado como: ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
      message.reply("Hello World!")
    }
})
client.login(process.env.TOKEN)