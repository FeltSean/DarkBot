const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = (",")

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
    client.user.setActivity( `,help | Membres : ${client.users.size}` );
    client.guilds.get("613340625584259091").channels.get("613343531297275904").send("**-Redémarrage réussi avec succès** !!!") 
    client.guilds.get("613340625584259091").channels.get("613343531297275904").send(' Prêt à vous servir avec toutes mes fonctionnalités. Commence par faire ,help !!! :desktop: ')
});

client.on('ready', async () => 
{
    client.guilds.get("613340625584259091").channels.get("613343531297275904").send(' Mon créateur est KelenS. Voici son site internet : http://tenteaea.com/UbK et sa chaine YTB : https://www.youtube.com/channel/UC0iUyQ8oV57YKruLNlF127g/videos ')
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
        return channel.send('Bienvenue sur **communauté | Baldark, Six Ranger & KelenS** !!! =)' + member.displayName);
    });
});

client.on('guildMemberAdd', member => {
    const role = member.guild.roles.find("name", "abonné(e)s")
    member.addRole(role);
});

client.on('guildMemberAdd', member => {
    member.guild.channels.find("name", "🎉╿arrivant-partant")
    .send(` :tada: Bienvenue a toi **${member}** =) sur **communauté | Baldark, Six Ranger & KelenS** !!! `)
}); 

client.on('guildMemberRemove', member => {
    member.createDM().then(channel => {
        return channel.send('A plus tard sur **communauté | Baldark, Six Ranger & KelenS** !!! =(' + member.displayName);
    });
});

client.on('guildMemberRemove', member => {
    member.guild.channels.find("name", "🎉╿arrivant-partant")
    .send(` Dommage **${member}** est parti, j'espère qu'il reviendra =( !!! `)        
});

client.on("message", message => {
    if (message.content === (",serverlist")) {
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
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "merde") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "pute") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "pd") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "connard") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "connasse") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "salope") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "bite") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "baisable") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "baise") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "baiser ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "bander ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "branler ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "branlette ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "bordel ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "burnes ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "chatte ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "sexe ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "chiant ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "chiante ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "chiasse ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "chier ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "chiottes ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "conne ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "connerie ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "coucougnettes ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "couilles ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
    }

    if (message.content === "couillu ") {
        message.delete();
        message.author.send("Pas d'insulte s'il vous plait sinon vous serez sanctionner !!!")
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
        message.channel.sendMessage(` Cette commande est actuellement en maintenance pour une durée indéterminer, désolé `);
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
            .addField(',serverlist', 'Enonce combien on est sur communauté | Baldark, Six Ranger & KelenS')
            .addField(',report', 'report un joueur')
            .addField(',service', `Explique ce qu'est exactement Hydaria`);
    
        return message.channel.send(embed);
        console.log(`${author} vient de faire la commande ,help !!!`)
    }
});

client.on("message", message => 
{
    if(command === `${prefix}report`)
    {
        let reportedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!reportedUser) {
            return message.channel.send("L'utilisateur n'existe pas.");
        } 
        let ReportedReason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
            .setDescription("Reports")
            .setColor("#15f153")
            .addField("Utilisateurs reporté", `${reportedUser} (ID: ${reportedUser.id})`)
            .addField("Utilisateur ayant reporté", `${message.author} (ID: ${message.author.id})`)
            .addField("Channel", message.channel)
            .addField("Raison", reportedReason);

        let reporChannel = message.guild.channels.find(`name`, "reports");
        if (!reportChannel) {
            return message.channel.send("Canal 'Reports' introuvable. Veuillez créer ce canal !")
        }

        message.delete();
        reportChannel.send(reportEmbed);
        
        console.log("Une personne vient de faire la commande suivante : ,report !!!")
    }
});

client.on("message", message => 
{
    if(message.content ===",service")
    {
        message.channel.sendMessage(` 
               Hydaria est une entreprise de développement de site internet, de bot discord et d'application. 
            Elle est constituer de trois personnes pour le moment. Il y a @enzozanitchi123#2488, @KelenS-Developpeur#6535 et @TheGeek#8366. 
            Vous pouvez également nous contacter facilement avec cette adresse mail : hydaria@hydaria.yj.fr et voir ce que l'on fait ici sur notre site: http://tenteaea.com/UbK. `);
        console.log("Une personne vient de faire la commande suivante : ,service !!!")
    }
});

client.on("message", message => 
{
    if(message.content ===",clear") 
    {
        message.channel.sendMessage("Cette commande est actuellement en maintenance car elle faisait crash le bot. On vous dira quand elle sera de retour. MERCI");
        console.log("Une personne vient d'éxécuter la commande ,clear")
    }
})

client.on("message", message => {
    // Si la commande est &site //
    if (message.content === (",site")) {
        let embed = new Discord.RichEmbed()
            .setDescription(' Voici le lien du site internet de mon créateur : http://tenteaea.com/UbK !!! ')
            .setColor('#dc143c');
        return message.channel.send(embed);
        console.log(`${author} vient de faire la commande ,site !!!`)
    };
});
