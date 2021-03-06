const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const welcomeChannelId = "947745064891854858"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Bienvenido al server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)