const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'aide',
	description: 'Explique rapidement le bot.',
	execute(client, message, args){
		const embedAide = new MessageEmbed()
			.setColor("#13a2ce")
			.setTitle("Fiche d'aide d'Arthas")
			.setURL('https://mathis-backert.com')
			.setThumbnail(client.user.displayAvatarURL())
			.addField('Description :', "Arthas est un bot spécial.\nIl répond aux mots clés.\nIl ne répondra qu\'à un seul mot clé, sauf pour la commande \"+sondage.\"")
			.addField('Exemple :', "+aide, +arthas, +cent, +dé, +dés, +gif, +help, +ping, +qui, +serveur...")
			.addField('Sondages :', "\"+sondage\" permet de créer des sondages (Merci...), c'est la seule commande qui comprend plusieurs arguments :\n\"+sondage +<Question> +<Minutes>\".\n\n<Question> est remplacé par la question et <Minutes> par un nombre entier.\n\nOn a donc trois arguments tous précédés par un +.\nPar exemple -> \"+sondage +est-ce que... +5\"")
			.addField('Niveaux :', "Le Bot comprend un système de niveaux.\nChaque commande donne entre 1 et 5 Xp.\n\nPour monter de niveau il faut 20 Xp, puis 40 Xp, puis 60 Xp, etc...\n\nLa commande +niveau ne donne pas d'Xp mais permet de voir son avancement.")
			.setFooter("Dev : "+"Ypermat#3885");

		message.channel.send(embedAide);
	}
}