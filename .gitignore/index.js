const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ("&")

client.login(process.env.TOKEN);

process.setMaxListeners(Infinity);

client.on("message", (message) => 
{

    if(message.content === "Bonjour") 
    {
        message.channel.send(" Salut !!! ")
    }

    if(message.content === "help")
    {
        message.channel.send(" As tu besoin d'aide, si oui, écrit &help !!! ")
    }
});

client.on('ready', async () => 
{
    console.log(` ${client.user.username} est en ligne !!! `);
    client.user.setActivity(` ,help | Membres : ${client.users.size} `);
    client.guilds.get("579222931616432128").channels.get("579230004316078081").send(' Prêt à vous servir avec toutes mes fonctionnalités. Commence par faire ,help !!! :desktop: ')
});

client.on('ready', async () => 
{
    client.guilds.get("579222931616432128").channels.get("579230004316078081").send(' Mon créateur est KelenS. Voici son site internet : https://hydaria.yj.fr et sa chaine YTB : https://www.youtube.com/channel/UC0iUyQ8oV57YKruLNlF127g/videos ')
});

client.on('message', async message => 
{
    if (message.author.client) return;
    if (message.channel.type === 'dm') return;

    let prefix = config.prefix;
    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let args = messageArray.slice(1);
});

client.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send(' Bienvenue sur **communauté | Baldark, Six Ranger & KelenS** !!! =) ' + member.displayName);
    });
});

client.on('guildMemberAdd', member => {
    const role = member.guild.roles.find("id", "579241953267286018")
    member.addRole(role);
});

client.on('guildMemberAdd', member => {
    member.guild.channels.find("name", "🎉╿arrivant-partant")
    .send(` :tada: Bienvenue a toi **${member}** =) sur **HUB - Hydaria** !!! `)
}); 

client.on('guildMemberRemove', member => {
    member.createDM().then(channel => {
        return channel.send('A plus tard sur **communauté | Baldark, Six Ranger & KelenS** !!! =(' + member.displayName);
    });
});

client.on('guildMemberRemove', member => {
    member.guild.channels.find("name", "🎉╿arrivant-partant")
    .send(` Aurevoir **${member}** =( !!! `)        
});

client.on("message", message => {
    if (message.content === ("serverlist")) {
        message.channel.send(client.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
    }
});

client.on('message' , message => 
{
    // Si le message est "KelenS" !!! //
    if (message.content === "KelenS") 
    {
        // Envoie "le lien de la chaine youtube de KelenS" dans le salon actuel !!! //
        message.channel.send(' https://www.youtube.com/channel/UC0iUyQ8oV57YKruLNlF127g/videos ');
    }
});

client.on('message', message => {
    if (message.content === "con") {
        message.bulkDelete();
        message.author.send("Pas d'insulte s'il vous plait !!!")
    }

    if (message.content === "merde") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait !!!")
    }

    if (message.content === "pute") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait !!!")
    }
});



// COMMANDES //

client.on("message", message => 
{
    // Si le message contient ",BalDark" //
    if (message.content === (",baldark")) 
    {
        // Envoie le message "chaine ytb" //
        message.channel.sendMessage(` Voici sa chaine Youtube : https://www.youtube.com/channel/UCVLaqqdPihW6V1wOrzuk0jg `);
        console.log(" Une personne vient d'utiliser la commande ,baldark pour voir sa chaine !!! ")
    };
});

client.on("message", message => 
{
    if(message.content ===",say")
    {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Tu n'as pas le droit d'éxécuter cette commande !!!`)

        let argsresult;
        let mChannel = message.mentions.channels.first()

        message.delete()
        if(mChannel) {
            argsresult = args.slice(1).join(" ")
            mChannel.send(argsresult)
        } else {
            argsresult = args.join(" ")
            message.channel.send(argsresult)
        } 
        console.log("Une personne vient de faire la commande suivante : ,say !!!")
    }
});

client.on("message", message => {
    // Si la commande est &help //
    if (message.content === (",help")) {
        let botIcon = client.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setDescription('__***Les commandes***__')
            .setColor('#dc143c')
            .setThumbnail(botIcon)
            .addField('Nom du bot', client.user.username)
            .addField('Commandes', '---------------')
            .addField(',info', 'Renvoie des informations sur le bot')
            .addField(',say', 'Fait une annonce')
            .addField(',baldark', `Montre l'ip du serveur`)
            .addField(',clear', 'Supprime certains message')
            .addField(',site', `Montre l'URL du site officiel du serveur`)
            .addField(',kick', 'Expulse les personnes')
            .addField('serverlist', 'Enonce combien on est sur Hydaria');
    
        return message.channel.send(embed);
        console.log(`${author} vient de faire la commande ,help !!!`)
    }
});

client.on("message", message => {
    // Si la commande est &clear //
    if (message.content === (",clear")) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oof.");
        if(!args[0]) return message.channel.send("oof");
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`Je viens de clear ${args[0]} pour vous !!!`).then(msg => msg.delete(5000));
        });
    
    }
});

client.on("message", message => {
    // Si la commande est &site //
    if (message.content === (",site")) {
        let embed = new Discord.RichEmbed()
            .setDescription(' Voici le lien du site internet de mon créateur : https://hydaria.yj.fr/ !!! ')
            .setColor('#dc143c');
        return message.channel.send(embed);
        console.log(`${author} vient de faire la commande ,site !!!`)
    };
});
